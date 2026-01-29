export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
  status: 'active' | 'inactive' | 'discontinued';
  createdAt?: string;
  updatedAt?: string;
  specialPage?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductFormData {
  name: string;
  price: string;
  description: string;
  image: string;
  quantity: string;
  category: string;
  status: 'active' | 'inactive' | 'discontinued';
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface ProductsResponse extends ApiResponse<Product[]> {}
export interface ProductResponse extends ApiResponse<Product> {} 