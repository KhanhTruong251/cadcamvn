import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useLocale } from '../../contexts/LocaleContext';

const Footer: React.FC = () => {
  const { t } = useLocale();
  
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Thông tin công ty */}
          <div className="col-span-1 lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white border-2 border-gray-700 shadow-sm overflow-hidden p-1">
                <img 
                  src="/images/logos/logo-crop.jpg" 
                  alt="3C CNC SOFT Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="leading-tight">
                <h2 className="text-2xl font-bold text-white">3C CNC SOFT</h2>
                <p className="text-xs text-gray-400 font-medium">Optimized Technology Platform</p>
              </div>
            </Link>
            <p className="text-gray-400 max-w-md">
              {t('common.footer.companyInfo')}
            </p>
            
            {/* Thông tin liên hệ */}
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-3 text-blue-400" />
                <span className="text-sm leading-relaxed">{t('common.footer.address')}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-3 text-blue-400" />
                <span className="text-sm leading-relaxed">{t('common.footer.phone')}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-3 text-blue-400" />
                <span className="text-sm leading-relaxed">{t('common.footer.email')}</span>
              </div>
            </div>
          </div>

          {/* Liên kết nhanh */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white/90">{t('common.footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
                  {t('common.header.home')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
                  {t('common.header.products')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
                  {t('common.header.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
                  {t('common.header.contact')}
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
                  {t('common.header.admin')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Hỗ trợ khách hàng */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white/90">{t('common.footer.customerSupport')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/help" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
                  {t('common.footer.helpCenter')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
                  {t('common.footer.faq')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
                  {t('common.footer.contactUs')}
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
                  {t('common.footer.consultation')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
                  {t('common.footer.privacyPolicy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mạng xã hội & Bản tin */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Mạng xã hội */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm font-medium">{t('common.footer.followUs')}</span>
              <div className="flex space-x-3 text-gray-400">
                <a
                  href="#"
                  className="hover:text-blue-300 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="hover:text-blue-300 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="hover:text-blue-300 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="hover:text-blue-300 transition-colors"
                  aria-label="Youtube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Bản tin */}
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-sm font-medium">{t('common.footer.newsletter')}</span>
              <div className="flex">
                <input
                  type="email"
                  placeholder={t('common.footer.emailPlaceholder')}
                  className="px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button className="px-5 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors text-sm font-semibold">
                  {t('common.footer.subscribe')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            {t('common.footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;