/**
 * Environment configuration
 */

export const ENV = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_URL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  APP_NAME: process.env.REACT_APP_NAME || 'CADCAM Product Management',
  APP_VERSION: process.env.REACT_APP_VERSION || '1.0.0',
  DEBUG: process.env.REACT_APP_DEBUG === 'true',
} as const;

export const isDevelopment = ENV.NODE_ENV === 'development';
export const isProduction = ENV.NODE_ENV === 'production';
export const isTest = ENV.NODE_ENV === 'test';

// Feature flags
export const FEATURES = {
  ENABLE_ANALYTICS: process.env.REACT_APP_ENABLE_ANALYTICS === 'true',
  ENABLE_ERROR_REPORTING: process.env.REACT_APP_ENABLE_ERROR_REPORTING === 'true',
  ENABLE_PWA: process.env.REACT_APP_ENABLE_PWA === 'true',
  ENABLE_DARK_MODE: process.env.REACT_APP_ENABLE_DARK_MODE === 'true',
} as const;