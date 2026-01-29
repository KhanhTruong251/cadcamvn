import axios, { AxiosError } from 'axios';
import { Product } from '../types';
import { API_CONFIG, HTTP_STATUS, ERROR_MESSAGES } from '../constants';
import { Category } from '../types';

const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const customError: {
      message: string;
      status?: number;
      data?: any;
    } = {
      message: ERROR_MESSAGES.UNKNOWN_ERROR,
      status: error.response?.status,
      data: error.response?.data
    };

    if (error.code === 'ECONNABORTED') {
      customError.message = 'Yêu cầu quá thời gian chờ';
    } else if (!error.response) {
      customError.message = ERROR_MESSAGES.NETWORK_ERROR;
    } else {
      switch (error.response.status) {
        case HTTP_STATUS.UNAUTHORIZED:
          customError.message = ERROR_MESSAGES.UNAUTHORIZED;
          // Redirect to login or clear auth
          localStorage.removeItem('auth_token');
          break;
        case HTTP_STATUS.FORBIDDEN:
          customError.message = 'Bạn không có quyền thực hiện hành động này';
          break;
        case HTTP_STATUS.NOT_FOUND:
          customError.message = ERROR_MESSAGES.NOT_FOUND;
          break;
        case HTTP_STATUS.CONFLICT:
          customError.message = 'Dữ liệu đã tồn tại';
          break;
        case HTTP_STATUS.INTERNAL_SERVER_ERROR:
          customError.message = ERROR_MESSAGES.SERVER_ERROR;
          break;
        default:
          if (error.response.data && typeof error.response.data === 'object' && 'message' in error.response.data) {
            customError.message = (error.response.data as any).message;
          }
      }
    }

    return Promise.reject(customError);
  }
);

// Retry logic for failed requests
const retryRequest = async <T>(fn: () => Promise<T>, retries: number = API_CONFIG.RETRY_ATTEMPTS): Promise<T> => {
  try {
    return await fn();
  } catch (error) {
    if (retries > 0 && shouldRetry(error)) {
      await new Promise(resolve => setTimeout(resolve, API_CONFIG.RETRY_DELAY));
      return retryRequest(fn, retries - 1);
    }
    throw error;
  }
};

const shouldRetry = (error: any): boolean => {
  return (
    error.code === 'ECONNABORTED' ||
    error.code === 'ENOTFOUND' ||
    error.code === 'ECONNRESET' ||
    (error.status >= 500 && error.status < 600)
  );
};

export const productApi = {
  // Lấy danh sách sản phẩm
  getProducts: async (params?: { page?: number; limit?: number; search?: string; category?: string }): Promise<Product[]> => {
    return retryRequest(async () => {
      const response = await api.get<any>('/products', { params });
      // Server returns { success, message, data: { products, pagination } }
      return response.data.data.products || response.data.data;
    });
  },

  // Lấy chi tiết sản phẩm
  getProduct: async (id: string): Promise<Product> => {
    return retryRequest(async () => {
      const response = await api.get<any>(`/products/${id}`);
      return response.data.data;
    });
  },

  // Tạo sản phẩm mới
  createProduct: async (productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> => {
    const response = await api.post<any>('/products', productData);
    return response.data.data;
  },

  // Cập nhật sản phẩm
  updateProduct: async (id: string, productData: Partial<Product>): Promise<Product> => {
    const response = await api.put<any>(`/products/${id}`, productData);
    return response.data.data;
  },

  // Xóa sản phẩm
  deleteProduct: async (id: string): Promise<void> => {
    await api.delete(`/products/${id}`);
  },

  // Tìm kiếm sản phẩm
  searchProducts: async (query: string, filters?: { category?: string; minPrice?: number; maxPrice?: number }): Promise<Product[]> => {
    return retryRequest(async () => {
      const response = await api.get<any>('/products/search', { 
        params: { q: query, ...filters } 
      });
      return response.data.data;
    });
  },

  // Lấy danh mục sản phẩm
  getCategories: async (): Promise<Category[]> => {
    return retryRequest(async () => {
      try {
        const response = await api.get<any>('/categories');
        return response.data.data || [];
      } catch (error) {
        // Fallback to mock data if API is not available
        console.warn('Categories API not available, using mock data');
        return [
          {
            id: '1',
            name: 'Phần mềm CAD',
            description: 'Các phần mềm thiết kế CAD chuyên nghiệp',
            slug: 'phan-mem-cad',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: '2',
            name: 'Phần mềm CAM',
            description: 'Các phần mềm gia công CAM tiên tiến',
            slug: 'phan-mem-cam',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: '3',
            name: 'Máy CNC',
            description: 'Máy CNC chất lượng cao',
            slug: 'may-cnc',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: '4',
            name: 'Phụ kiện',
            description: 'Phụ kiện và linh kiện máy móc',
            slug: 'phu-kien',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
        ];
      }
    });
  },
};

export default api; 