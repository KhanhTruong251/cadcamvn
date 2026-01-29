import React from 'react';
import { useLocale } from '../contexts/LocaleContext';

const LanguageSyncDemo: React.FC = () => {
  const { locale, t } = useLocale();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border">
      <h2 className="text-2xl font-bold mb-4">Language Sync Demo</h2>
      <div className="space-y-4">
        <div>
          <strong>Current Language:</strong> {locale}
        </div>
        
        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold mb-2">Rhinoceros Product Translations:</h3>
          <div className="space-y-2 text-sm">
            <div><strong>Hero Badge:</strong> {t('productPages.rhinoceros.hero.badge')}</div>
            <div><strong>Hero Title:</strong> {t('productPages.rhinoceros.hero.title')}</div>
            <div><strong>Tab Overview:</strong> {t('productPages.rhinoceros.tabs.overview')}</div>
            <div><strong>Tab Features:</strong> {t('productPages.rhinoceros.tabs.features')}</div>
          </div>
        </div>

        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold mb-2">Orang-Rhino Product Translations:</h3>
          <div className="space-y-2 text-sm">
            <div><strong>Hero Badge:</strong> {t('productPages.orangRhino.hero.badge')}</div>
            <div><strong>Hero Title:</strong> {t('productPages.orangRhino.hero.title')}</div>
            <div><strong>Tab Overview:</strong> {t('productPages.orangRhino.tabs.overview')}</div>
            <div><strong>Tab Features:</strong> {t('productPages.orangRhino.tabs.features')}</div>
          </div>
        </div>

        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold mb-2">Common Translations:</h3>
          <div className="space-y-2 text-sm">
            <div><strong>Home:</strong> {t('common.header.home')}</div>
            <div><strong>Products:</strong> {t('common.header.products')}</div>
            <div><strong>Contact:</strong> {t('common.header.contact')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSyncDemo;
