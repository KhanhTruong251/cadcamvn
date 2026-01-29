import React from 'react';
import { useLocale } from '../contexts/LocaleContext';
import LanguageSyncDemo from '../components/LanguageSyncDemo';

const LanguageSyncTest: React.FC = () => {
  const { locale, setLocale } = useLocale();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Language Synchronization Test
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Test the language synchronization across all product pages
          </p>
          
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setLocale('en')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                locale === 'en'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLocale('vi')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                locale === 'vi'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Tiếng Việt
            </button>
          </div>
        </div>

        <LanguageSyncDemo />
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg border">
          <h2 className="text-xl font-bold mb-4">Test Instructions</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <p>1. Switch between English and Vietnamese using the buttons above</p>
            <p>2. Observe how all text changes dynamically</p>
            <p>3. Check that product page translations are working correctly</p>
            <p>4. Verify that common elements (header, footer) are synchronized</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSyncTest;
