import { useState, useCallback } from 'react';
import { validateForm } from '../utils/validators';

interface UseFormOptions<T> {
  initialValues: T;
  validationRules?: Record<string, ((value: any) => { isValid: boolean; message?: string })[]>;
  onSubmit?: (values: T) => void | Promise<void>;
}

interface UseFormReturn<T> {
  values: T;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  isValid: boolean;
  isSubmitting: boolean;
  setValue: (field: keyof T, value: any) => void;
  setValues: (values: Partial<T>) => void;
  setError: (field: keyof T, error: string) => void;
  clearError: (field: keyof T) => void;
  clearErrors: () => void;
  handleChange: (field: keyof T) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleBlur: (field: keyof T) => () => void;
  handleSubmit: (event: React.FormEvent) => void;
  reset: () => void;
  validate: () => boolean;
}

/**
 * Custom hook for form management with validation
 */
export const useForm = <T extends Record<string, any>>({
  initialValues,
  validationRules = {},
  onSubmit
}: UseFormOptions<T>): UseFormReturn<T> => {
  const [values, setFormValues] = useState<T>(initialValues);
  const [errors, setFormErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setValue = useCallback((field: keyof T, value: any) => {
    setFormValues(prev => ({ ...prev, [field]: value }));
    
    // Clear error when field is modified
    if (errors[field as string]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field as string];
        return newErrors;
      });
    }
  }, [errors]);

  const setValues = useCallback((newValues: Partial<T>) => {
    setFormValues(prev => ({ ...prev, ...newValues }));
  }, []);

  const setError = useCallback((field: keyof T, error: string) => {
    setFormErrors(prev => ({ ...prev, [field as string]: error }));
  }, []);

  const clearError = useCallback((field: keyof T) => {
    setFormErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[field as string];
      return newErrors;
    });
  }, []);

  const clearErrors = useCallback(() => {
    setFormErrors({});
  }, []);

  const handleChange = useCallback((field: keyof T) => {
    return (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { value, type } = event.target;
      const finalValue = type === 'checkbox' 
        ? (event.target as HTMLInputElement).checked
        : type === 'number' 
        ? Number(value)
        : value;
      
      setValue(field, finalValue);
    };
  }, [setValue]);

  const handleBlur = useCallback((field: keyof T) => {
    return () => {
      setTouched(prev => ({ ...prev, [field as string]: true }));
      
      // Validate field on blur if validation rules exist
      if (validationRules[field as string]) {
        const fieldValidators = validationRules[field as string];
        for (const validator of fieldValidators) {
          const result = validator(values[field]);
          if (!result.isValid) {
            setError(field, result.message || 'Invalid value');
            break;
          }
        }
      }
    };
  }, [values, validationRules, setError]);

  const validate = useCallback(() => {
    const validation = validateForm(values, validationRules);
    setFormErrors(validation.errors);
    return validation.isValid;
  }, [values, validationRules]);

  const handleSubmit = useCallback(async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!validate()) {
      return;
    }

    if (onSubmit) {
      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  }, [values, validate, onSubmit]);

  const reset = useCallback(() => {
    setFormValues(initialValues);
    setFormErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  const isValid = Object.keys(errors).length === 0;

  return {
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
    setValue,
    setValues,
    setError,
    clearError,
    clearErrors,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    validate
  };
};