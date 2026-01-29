import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Types
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  theme: 'light' | 'dark';
  language: 'vi' | 'en';
  loading: boolean;
  error: string | null;
}

// Action Types
type AppAction =
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_CART_ITEM'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_THEME'; payload: 'light' | 'dark' }
  | { type: 'SET_LANGUAGE'; payload: 'vi' | 'en' };

// Initial State
const initialState: AppState = {
  user: null,
  isAuthenticated: false,
  cart: [],
  cartCount: 0,
  cartTotal: 0,
  theme: 'light',
  language: 'vi',
  loading: false,
  error: null
};

// Reducer
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload
      };

    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      };

    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload
      };

    case 'ADD_TO_CART': {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      let newCart: CartItem[];

      if (existingItem) {
        newCart = state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        newCart = [...state.cart, action.payload];
      }

      const cartCount = newCart.reduce((sum, item) => sum + item.quantity, 0);
      const cartTotal = newCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      return {
        ...state,
        cart: newCart,
        cartCount,
        cartTotal
      };
    }

    case 'REMOVE_FROM_CART': {
      const newCart = state.cart.filter(item => item.id !== action.payload);
      const cartCount = newCart.reduce((sum, item) => sum + item.quantity, 0);
      const cartTotal = newCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      return {
        ...state,
        cart: newCart,
        cartCount,
        cartTotal
      };
    }

    case 'UPDATE_CART_ITEM': {
      const newCart = state.cart.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity > 0);

      const cartCount = newCart.reduce((sum, item) => sum + item.quantity, 0);
      const cartTotal = newCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      return {
        ...state,
        cart: newCart,
        cartCount,
        cartTotal
      };
    }

    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
        cartCount: 0,
        cartTotal: 0
      };

    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload
      };

    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.payload
      };

    default:
      return state;
  }
};

// Context
interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  // Helper functions
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateCartItem: (id: string, quantity: number) => void;
  clearCart: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
  setLanguage: (language: 'vi' | 'en') => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Helper functions
  const setUser = (user: User | null) => {
    dispatch({ type: 'SET_USER', payload: user });
  };

  const setLoading = (loading: boolean) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  };

  const setError = (error: string | null) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  };

  const addToCart = (item: CartItem) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const updateCartItem = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_CART_ITEM', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const setTheme = (theme: 'light' | 'dark') => {
    dispatch({ type: 'SET_THEME', payload: theme });
  };

  const setLanguage = (language: 'vi' | 'en') => {
    dispatch({ type: 'SET_LANGUAGE', payload: language });
  };

  const contextValue: AppContextType = {
    state,
    dispatch,
    setUser,
    setLoading,
    setError,
    addToCart,
    removeFromCart,
    updateCartItem,
    clearCart,
    setTheme,
    setLanguage
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// Hook
export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};