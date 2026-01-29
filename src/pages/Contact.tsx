import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowLeft,
  QrCode
} from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';

const Contact: React.FC = () => {
  const { t } = useLocale();

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('contact.info.headquarters'),
      content: t('common.footer.address'),
      description: t('contact.info.headquartersDesc')
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t('contact.info.hotline'),
      content: "(+84) 345 992 855 - (+84) 918 416 100",
      description: t('contact.info.hotlineDesc')
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t('contact.info.email'),
      content: t('common.footer.email'),
      description: t('contact.info.hotlineDesc')
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t('contact.info.legal'),
      content: "MST: 0317967396",
      description: t('contact.info.legalDesc')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-6">
            <Link 
              to="/"
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors mr-6"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {t('contact.header.backToHome')}
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">{t('contact.header.title')}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('contact.info.title')}</h2>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-900 font-medium mb-1">
                      {info.content}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('contact.map.title')}</h3>
              <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5!2d106.7!3d10.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1234567890%3A0x1234567890abcdef!2zODMgxJDGsOG7nW5nIDE5LCBQLiBIaeG7h3AgQsOsbmggQ2jDoW5oLCBUUC4gVGjhu6UgxJDhu5ljLCBITUNN!5e0!3m2!1svi!2s!4v1234567890123!5m2!1svi!2s&q=83+đường+19+Hiệp+Bình+Chánh+Thủ+Đức+HCMC"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="Company Location"
                />
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 mb-1">
                      {t('contact.map.officeAddress')}
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      {t('common.footer.address')}
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=83+đường+19+Hiệp+Bình+Chánh+Thủ+Đức+HCMC"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      <MapPin className="w-4 h-4 mr-1" />
                      {t('contact.map.openInMaps')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Zalo QR Code */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('contact.zalo.title')}</h2>
            
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
              <div className="flex flex-col items-center">
                <div className="mb-6">
                  <QrCode className="w-12 h-12 text-blue-600 mx-auto" />
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <img 
                    src="/images/zalo-qr.png" 
                    alt="Zalo QR Code" 
                    className="w-64 h-64 mx-auto"
                    onError={(e) => {
                      // Fallback nếu không có ảnh
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('contact.zalo.scanQR')}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t('contact.zalo.instructions')}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-blue-600">
                    <Phone className="w-5 h-5" />
                    <a href="tel:0918416100" className="font-medium hover:underline">
                      {t('contact.zalo.orCall')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;