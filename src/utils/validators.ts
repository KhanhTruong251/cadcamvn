/**
 * Validation utility functions
 */

export interface ValidationResult {
  isValid: boolean;
  message?: string;
}

/**
 * Validate email format
 */
export const validateEmail = (email: string): ValidationResult => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email) {
    return { isValid: false, message: 'Email là bắt buộc' };
  }
  
  if (!emailRegex.test(email)) {
    return { isValid: false, message: 'Email không hợp lệ' };
  }
  
  return { isValid: true };
};

/**
 * Validate phone number (Vietnamese format)
 */
export const validatePhone = (phone: string): ValidationResult => {
  const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
  
  if (!phone) {
    return { isValid: false, message: 'Số điện thoại là bắt buộc' };
  }
  
  if (!phoneRegex.test(phone)) {
    return { isValid: false, message: 'Số điện thoại không hợp lệ' };
  }
  
  return { isValid: true };
};

/**
 * Validate password strength
 */
export const validatePassword = (password: string): ValidationResult => {
  if (!password) {
    return { isValid: false, message: 'Mật khẩu là bắt buộc' };
  }
  
  if (password.length < 8) {
    return { isValid: false, message: 'Mật khẩu phải có ít nhất 8 ký tự' };
  }
  
  if (!/(?=.*[a-z])/.test(password)) {
    return { isValid: false, message: 'Mật khẩu phải có ít nhất 1 chữ thường' };
  }
  
  if (!/(?=.*[A-Z])/.test(password)) {
    return { isValid: false, message: 'Mật khẩu phải có ít nhất 1 chữ hoa' };
  }
  
  if (!/(?=.*\d)/.test(password)) {
    return { isValid: false, message: 'Mật khẩu phải có ít nhất 1 số' };
  }
  
  return { isValid: true };
};

/**
 * Validate required field
 */
export const validateRequired = (value: any, fieldName: string): ValidationResult => {
  if (!value || (typeof value === 'string' && value.trim() === '')) {
    return { isValid: false, message: `${fieldName} là bắt buộc` };
  }
  
  return { isValid: true };
};

/**
 * Validate minimum length
 */
export const validateMinLength = (value: string, minLength: number, fieldName: string): ValidationResult => {
  if (!value || value.length < minLength) {
    return { isValid: false, message: `${fieldName} phải có ít nhất ${minLength} ký tự` };
  }
  
  return { isValid: true };
};

/**
 * Validate maximum length
 */
export const validateMaxLength = (value: string, maxLength: number, fieldName: string): ValidationResult => {
  if (value && value.length > maxLength) {
    return { isValid: false, message: `${fieldName} không được quá ${maxLength} ký tự` };
  }
  
  return { isValid: true };
};

/**
 * Validate number range
 */
export const validateNumberRange = (
  value: number, 
  min: number, 
  max: number, 
  fieldName: string
): ValidationResult => {
  if (value < min || value > max) {
    return { isValid: false, message: `${fieldName} phải từ ${min} đến ${max}` };
  }
  
  return { isValid: true };
};

/**
 * Validate positive number
 */
export const validatePositiveNumber = (value: number, fieldName: string): ValidationResult => {
  if (value <= 0) {
    return { isValid: false, message: `${fieldName} phải là số dương` };
  }
  
  return { isValid: true };
};

/**
 * Validate URL format
 */
export const validateUrl = (url: string): ValidationResult => {
  const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  
  if (!url) {
    return { isValid: false, message: 'URL là bắt buộc' };
  }
  
  if (!urlRegex.test(url)) {
    return { isValid: false, message: 'URL không hợp lệ' };
  }
  
  return { isValid: true };
};

/**
 * Validate file type
 */
export const validateFileType = (
  file: File, 
  allowedTypes: string[], 
  fieldName: string = 'File'
): ValidationResult => {
  if (!allowedTypes.includes(file.type)) {
    return { 
      isValid: false, 
      message: `${fieldName} phải có định dạng: ${allowedTypes.join(', ')}` 
    };
  }
  
  return { isValid: true };
};

/**
 * Validate file size
 */
export const validateFileSize = (
  file: File, 
  maxSizeInMB: number, 
  fieldName: string = 'File'
): ValidationResult => {
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  
  if (file.size > maxSizeInBytes) {
    return { 
      isValid: false, 
      message: `${fieldName} không được vượt quá ${maxSizeInMB}MB` 
    };
  }
  
  return { isValid: true };
};

/**
 * Validate form data with multiple rules
 */
export const validateForm = (
  data: Record<string, any>, 
  rules: Record<string, ((value: any) => ValidationResult)[]>
): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};
  
  for (const [field, validators] of Object.entries(rules)) {
    for (const validator of validators) {
      const result = validator(data[field]);
      if (!result.isValid) {
        errors[field] = result.message || 'Giá trị không hợp lệ';
        break; // Stop at first error for this field
      }
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};