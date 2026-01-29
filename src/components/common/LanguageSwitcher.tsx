import React from 'react';
import { useLocale } from '../../contexts/LocaleContext';

const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale } = useLocale();

  return (
    <div className="inline-flex items-center gap-1 bg-gray-100 rounded-lg p-1 shadow-sm">
      <button
        onClick={() => setLocale('en')}
        className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md transition-all duration-200 font-medium text-sm ${
          locale === 'en'
            ? 'bg-blue-600 text-white shadow-md scale-105 ring-2 ring-blue-400'
            : 'bg-white text-gray-700 hover:bg-gray-200 hover:shadow-sm'
        }`}
        title="Switch to English"
        aria-label="Switch to English"
      >
        <span className="text-lg">🇺🇸</span>
        <span>EN</span>
      </button>
      <button
        onClick={() => setLocale('vi')}
        className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md transition-all duration-200 font-medium text-sm ${
          locale === 'vi'
            ? 'bg-blue-600 text-white shadow-md scale-105 ring-2 ring-blue-400'
            : 'bg-white text-gray-700 hover:bg-gray-200 hover:shadow-sm'
        }`}
        title="Chuyển sang tiếng Việt"
        aria-label="Chuyển sang tiếng Việt"
      >
        <span className="text-lg">🇻🇳</span>
        <span>VI</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
