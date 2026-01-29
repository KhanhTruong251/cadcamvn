import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import enTranslations from '../locales/en.json';

type Locale = 'en' | 'vi';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
  children: ReactNode;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>('en');
  const [translations, setTranslations] = useState<any>({});

  useEffect(() => {
    // Load saved locale from localStorage
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'vi')) {
      setLocale(savedLocale);
    }
  }, []);

  useEffect(() => {
    // Load translations for current locale
    const loadTranslations = async () => {
      try {
        const translations = await import(`../locales/${locale}.json`);
        setTranslations(translations.default || translations);
      } catch (error) {
        console.error(`Failed to load translations for ${locale}:`, error);
        // Fallback to English if loading fails
        if (locale !== 'en') {
          setLocale('en');
        }
      }
    };

    loadTranslations();
  }, [locale]);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const t = (key: string): string => {
    const resolveKey = (source: any): string | undefined => {
      const keys = key.split('.');
      let value: any = source;

      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          return undefined;
        }
      }

      return typeof value === 'string' ? value : undefined;
    };

    // Try current locale first
    const current = resolveKey(translations);
    if (current !== undefined) {
      return current;
    }

    // Fallback to English translations if key is missing in current locale
    const fallback = resolveKey(enTranslations);
    return fallback !== undefined ? fallback : key;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};
