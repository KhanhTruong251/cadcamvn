/**
 * Application constants
 */

// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000
} as const;

// Application Routes
export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: '/product/:id',
  ADMIN: '/admin',
  ABOUT: '/about',
  CONTACT: '/contact',
  LOGIN: '/login',
  REGISTER: '/register',
  CART: '/cart',
  CHECKOUT: '/checkout',
  PROFILE: '/profile'
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_DATA: 'user_data',
  CART_ITEMS: 'cart_items',
  THEME: 'theme',
  LANGUAGE: 'language',
  SEARCH_HISTORY: 'search_history',
  USER_PREFERENCES: 'user_preferences',
  RECENTLY_VIEWED: 'recently_viewed'
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 12,
  PAGE_SIZE_OPTIONS: [12, 24, 48, 96],
  MAX_VISIBLE_PAGES: 5
} as const;

// Product Categories
export const PRODUCT_CATEGORIES = [
  'Máy CNC',
  'Phần mềm CAD',
  'Phần mềm CAM',
  'Thiết bị đo',
  'Dao cắt',
  'Phụ kiện',
  'Khác'
] as const;

// File Upload
export const FILE_UPLOAD = {
  MAX_SIZE_MB: 5,
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  ALLOWED_DOCUMENT_TYPES: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
} as const;

// Form Validation
export const VALIDATION = {
  MIN_PASSWORD_LENGTH: 8,
  MAX_NAME_LENGTH: 100,
  MAX_DESCRIPTION_LENGTH: 1000,
  MIN_PRICE: 0,
  MAX_PRICE: 999999999
} as const;

// UI Constants
export const UI = {
  HEADER_HEIGHT: 64,
  SIDEBAR_WIDTH: 256,
  MOBILE_BREAKPOINT: 768,
  TABLET_BREAKPOINT: 1024,
  DESKTOP_BREAKPOINT: 1280
} as const;

// Animation Durations (in ms)
export const ANIMATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500
} as const;

// Toast/Notification Types
export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
} as const;

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500
} as const;

// Date Formats
export const DATE_FORMATS = {
  DISPLAY: 'dd/MM/yyyy',
  DISPLAY_WITH_TIME: 'dd/MM/yyyy HH:mm',
  ISO: 'yyyy-MM-dd',
  API: 'yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\''
} as const;

// Currency
export const CURRENCY = {
  CODE: 'VND',
  SYMBOL: '₫',
  LOCALE: 'vi-VN'
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  FACEBOOK: 'https://facebook.com/cadcam',
  TWITTER: 'https://twitter.com/cadcam',
  INSTAGRAM: 'https://instagram.com/cadcam',
  YOUTUBE: 'https://youtube.com/cadcam',
  LINKEDIN: 'https://linkedin.com/company/cadcam'
} as const;

// Contact Information
export const CONTACT_INFO = {
  EMAIL: 'contact@cadcam.com',
  PHONE: '+84 (028) 1234 5678',
  ADDRESS: '123 Đường ABC, Quận 1, TP.HCM',
  WORKING_HOURS: 'Thứ 2 - Thứ 6: 8:00 - 17:00'
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Lỗi kết nối mạng. Vui lòng thử lại.',
  SERVER_ERROR: 'Lỗi server. Vui lòng thử lại sau.',
  UNAUTHORIZED: 'Bạn không có quyền truy cập.',
  NOT_FOUND: 'Không tìm thấy dữ liệu.',
  VALIDATION_ERROR: 'Dữ liệu không hợp lệ.',
  UNKNOWN_ERROR: 'Đã xảy ra lỗi không xác định.'
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  CREATED: 'Tạo mới thành công!',
  UPDATED: 'Cập nhật thành công!',
  DELETED: 'Xóa thành công!',
  SAVED: 'Lưu thành công!',
  SENT: 'Gửi thành công!'
} as const;