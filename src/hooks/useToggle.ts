import { useState, useCallback } from 'react';

/**
 * Custom hook for managing boolean toggle state
 */
export const useToggle = (initialValue: boolean = false): [boolean, () => void, (value?: boolean) => void] => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  const setToggle = useCallback((newValue?: boolean) => {
    setValue(newValue !== undefined ? newValue : prev => !prev);
  }, []);

  return [value, toggle, setToggle];
};

/**
 * Custom hook for managing multiple toggles
 */
export const useToggles = (initialValues: Record<string, boolean> = {}) => {
  const [toggles, setToggles] = useState(initialValues);

  const toggle = useCallback((key: string) => {
    setToggles(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  }, []);

  const setToggle = useCallback((key: string, value: boolean) => {
    setToggles(prev => ({
      ...prev,
      [key]: value
    }));
  }, []);

  const resetToggles = useCallback(() => {
    setToggles(initialValues);
  }, [initialValues]);

  return {
    toggles,
    toggle,
    setToggle,
    resetToggles
  };
};