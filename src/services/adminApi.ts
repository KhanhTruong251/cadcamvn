import axios from 'axios';
import { API_CONFIG } from '../constants';

export interface AdminUser {
  username: string;
  role: string;
  loginTime: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  user?: AdminUser;
  token?: string;
  message?: string;
}

class AdminApiService {
  private api;

  constructor() {
    this.api = axios.create({
      baseURL: API_CONFIG.BASE_URL,
      timeout: API_CONFIG.TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Authenticate admin user
  async authenticateAdmin(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      // First try to call the real API
      const response = await this.api.post('/auth/admin/login', credentials);
      
      if (response.data.success) {
        // Store authentication data
        localStorage.setItem('isAdminAuthenticated', 'true');
        localStorage.setItem('adminUser', JSON.stringify(response.data.user));
        localStorage.setItem('adminToken', response.data.token);
        
        return response.data;
      }
      
      throw new Error(response.data.message || 'Authentication failed');
    } catch (error) {
      console.warn('Admin API not available, using fallback authentication');
      
      // Fallback authentication for demo purposes
      return this.fallbackAuthentication(credentials);
    }
  }

  // Fallback authentication when API is not available
  private async fallbackAuthentication(credentials: LoginCredentials): Promise<AuthResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Demo credentials
    const validCredentials = [
      { username: 'admin', password: 'admin123' },
      { username: 'cadcam_admin', password: 'cadcam2024' },
      { username: 'superuser', password: 'super123' }
    ];
    
    const isValid = validCredentials.some(
      cred => cred.username === credentials.username && cred.password === credentials.password
    );
    
    if (isValid) {
      const user: AdminUser = {
        username: credentials.username,
        role: 'admin',
        loginTime: new Date().toISOString()
      };
      
      // Store authentication data
      localStorage.setItem('isAdminAuthenticated', 'true');
      localStorage.setItem('adminUser', JSON.stringify(user));
      localStorage.setItem('adminToken', `demo_token_${Date.now()}`);
      
      return {
        success: true,
        user,
        token: `demo_token_${Date.now()}`,
        message: 'Đăng nhập thành công'
      };
    } else {
      return {
        success: false,
        message: 'Tên đăng nhập hoặc mật khẩu không đúng'
      };
    }
  }

  // Check if admin is authenticated
  isAuthenticated(): boolean {
    const isAuth = localStorage.getItem('isAdminAuthenticated') === 'true';
    const user = localStorage.getItem('adminUser');
    const token = localStorage.getItem('adminToken');
    
    return isAuth && !!user && !!token;
  }

  // Get current admin user
  getCurrentUser(): AdminUser | null {
    const userStr = localStorage.getItem('adminUser');
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch {
        return null;
      }
    }
    return null;
  }

  // Logout admin
  logout(): void {
    localStorage.removeItem('isAdminAuthenticated');
    localStorage.removeItem('adminUser');
    localStorage.removeItem('adminToken');
  }

  // Verify admin session (call this on protected routes)
  async verifySession(): Promise<boolean> {
    if (!this.isAuthenticated()) {
      return false;
    }

    try {
      const token = localStorage.getItem('adminToken');
      const response = await this.api.get('/auth/admin/verify', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      return response.data.valid === true;
    } catch (error) {
      console.warn('Session verification failed, using local check');
      
      // Fallback: check if session is not too old (24 hours)
      const user = this.getCurrentUser();
      if (user && user.loginTime) {
        const loginTime = new Date(user.loginTime);
        const now = new Date();
        const hoursDiff = (now.getTime() - loginTime.getTime()) / (1000 * 60 * 60);
        
        return hoursDiff < 24; // Session valid for 24 hours
      }
      
      return false;
    }
  }
}

export const adminApi = new AdminApiService();
