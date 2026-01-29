/**
 * Local Storage utility functions with error handling and type safety
 */

export class Storage {
  /**
   * Set item in localStorage with JSON serialization
   */
  static setItem<T>(key: string, value: T): boolean {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
      return true;
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      return false;
    }
  }

  /**
   * Get item from localStorage with JSON parsing
   */
  static getItem<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      if (item === null) return null;
      return JSON.parse(item) as T;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  }

  /**
   * Remove item from localStorage
   */
  static removeItem(key: string): boolean {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing from localStorage:', error);
      return false;
    }
  }

  /**
   * Clear all localStorage
   */
  static clear(): boolean {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing localStorage:', error);
      return false;
    }
  }

  /**
   * Check if localStorage is available
   */
  static isAvailable(): boolean {
    try {
      const test = '__localStorage_test__';
      localStorage.setItem(test, 'test');
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Get all keys from localStorage
   */
  static getAllKeys(): string[] {
    try {
      return Object.keys(localStorage);
    } catch (error) {
      console.error('Error getting localStorage keys:', error);
      return [];
    }
  }

  /**
   * Get storage usage in bytes
   */
  static getUsage(): number {
    try {
      let total = 0;
      for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
          total += localStorage[key].length + key.length;
        }
      }
      return total;
    } catch (error) {
      console.error('Error calculating localStorage usage:', error);
      return 0;
    }
  }
}

/**
 * Session Storage utility functions
 */
export class SessionStorage {
  static setItem<T>(key: string, value: T): boolean {
    try {
      const serializedValue = JSON.stringify(value);
      sessionStorage.setItem(key, serializedValue);
      return true;
    } catch (error) {
      console.error('Error saving to sessionStorage:', error);
      return false;
    }
  }

  static getItem<T>(key: string): T | null {
    try {
      const item = sessionStorage.getItem(key);
      if (item === null) return null;
      return JSON.parse(item) as T;
    } catch (error) {
      console.error('Error reading from sessionStorage:', error);
      return null;
    }
  }

  static removeItem(key: string): boolean {
    try {
      sessionStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing from sessionStorage:', error);
      return false;
    }
  }

  static clear(): boolean {
    try {
      sessionStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing sessionStorage:', error);
      return false;
    }
  }
}

/**
 * Predefined storage keys to avoid typos
 */
export const STORAGE_KEYS = {
  USER_PREFERENCES: 'user_preferences',
  AUTH_TOKEN: 'auth_token',
  CART_ITEMS: 'cart_items',
  SEARCH_HISTORY: 'search_history',
  THEME: 'theme',
  LANGUAGE: 'language',
  RECENTLY_VIEWED: 'recently_viewed',
  FORM_DRAFT: 'form_draft'
} as const;

/**
 * Typed storage functions for common use cases
 */
export const UserPreferences = {
  get: () => Storage.getItem<Record<string, any>>(STORAGE_KEYS.USER_PREFERENCES) || {},
  set: (preferences: Record<string, any>) => Storage.setItem(STORAGE_KEYS.USER_PREFERENCES, preferences),
  update: (key: string, value: any) => {
    const current = UserPreferences.get();
    current[key] = value;
    return UserPreferences.set(current);
  }
};

export const CartStorage = {
  get: () => Storage.getItem<any[]>(STORAGE_KEYS.CART_ITEMS) || [],
  set: (items: any[]) => Storage.setItem(STORAGE_KEYS.CART_ITEMS, items),
  add: (item: any) => {
    const current = CartStorage.get();
    current.push(item);
    return CartStorage.set(current);
  },
  remove: (itemId: string) => {
    const current = CartStorage.get();
    const filtered = current.filter(item => item.id !== itemId);
    return CartStorage.set(filtered);
  },
  clear: () => Storage.removeItem(STORAGE_KEYS.CART_ITEMS)
};

export const SearchHistory = {
  get: () => Storage.getItem<string[]>(STORAGE_KEYS.SEARCH_HISTORY) || [],
  add: (query: string, maxHistory: number = 10) => {
    const current = SearchHistory.get();
    const filtered = current.filter(item => item !== query);
    filtered.unshift(query);
    const limited = filtered.slice(0, maxHistory);
    return Storage.setItem(STORAGE_KEYS.SEARCH_HISTORY, limited);
  },
  clear: () => Storage.removeItem(STORAGE_KEYS.SEARCH_HISTORY)
};