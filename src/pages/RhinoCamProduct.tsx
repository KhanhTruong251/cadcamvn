import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Download, 
  MessageCircle, 
  Play,
  ChevronDown,
  ChevronUp,
  Cpu,
  Phone,
  Mail,
  Globe
} from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';

const RhinoCamProduct: React.FC = () => {
  const { t, locale } = useLocale();
  const [expandedConfig, setExpandedConfig] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [imageError, setImageError] = useState(false);

  // Load translations
  const translations = useMemo(() => {
    try {
      if (locale === 'en') {
        return require('../locales/en.json');
      } else {
        return require('../locales/vi.json');
      }
    } catch {
      return {};
    }
  }, [locale]);

  const configurations = useMemo(() => {
    const configKeys = ['xpr', 'std', 'exp', 'pro', 'pre'];
    return configKeys.map(id => ({
      id,
      name: t(`productPages.rhinocam.configurations.${id}.name`),
      description: t(`productPages.rhinocam.configurations.${id}.description`),
      features: translations.productPages?.rhinocam?.configurations?.[id]?.features || [],
      for: t(`productPages.rhinocam.configurations.${id}.for`)
    }));
  }, [t, translations]);


  const faqs = useMemo(() => {
    return translations.productPages?.rhinocam?.faq?.items || [];
  }, [translations]);


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Introduction */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t('productPages.rhinocam.hero.title')}</h1>
              <p className="text-xl text-gray-300 mb-6">
                {t('productPages.rhinocam.hero.subtitle')}
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                {t('productPages.rhinocam.hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  {t('productPages.rhinocam.hero.tryFree')}
                </Link>
                <Link 
                  to="/contact"
                  className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('productPages.rhinocam.hero.buyNow')}
                </Link>
              </div>
            </div>
            
            {/* Right Column - Logo/Image */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-lg">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  {!imageError ? (
                    <img 
                      src="/images/rhinocam/rhinocam-tab-image.webp" 
                      alt="RhinoCAM" 
                      className="w-full h-auto object-cover"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="bg-gradient-to-br from-blue-500/20 to-indigo-600/20 backdrop-blur-sm p-12 flex items-center justify-center aspect-video">
                      <div className="text-center">
                        <Cpu className="w-24 h-24 mx-auto mb-4 text-white/60" />
                        <div className="text-4xl font-bold text-white mb-2">{t('productPages.rhinocam.hero.title')}</div>
                        <div className="text-gray-400 text-sm">{t('productPages.rhinocam.hero.imageError')}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t('productPages.rhinocam.overview.title')}</h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('productPages.rhinocam.overview.whatIs.title')}</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                {t('productPages.rhinocam.overview.whatIs.description')}
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                {(translations.productPages?.rhinocam?.overview?.whatIs?.features || []).map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold text-gray-900 mb-4">
                {t('productPages.rhinocam.overview.whatIs.modules')}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('productPages.rhinocam.overview.whatDoes.title')}</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                {t('productPages.rhinocam.overview.whatDoes.description')}
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {(translations.productPages?.rhinocam?.overview?.whatDoes?.capabilities || []).map((capability: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-base">{capability}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xl text-gray-700 mt-6">
                {t('productPages.rhinocam.overview.whatDoes.idealFor')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">{t('productPages.rhinocam.modules.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              to="/products/rhinocam/mill"
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer h-80"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('/images/rhinocam/mill_thumb.jpg')`
                }}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors" />
              </div>
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">{t('productPages.rhinocam.modules.mill.name')}</h3>
                <p className="text-lg text-white/90">{t('productPages.rhinocam.modules.mill.description')}</p>
              </div>
            </Link>
            <Link 
              to="/products/rhinocam/turn"
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer h-80"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('/images/rhinocam/turn_thumb.jpg')`
                }}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors" />
              </div>
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">{t('productPages.rhinocam.modules.turn.name')}</h3>
                <p className="text-lg text-white/90">{t('productPages.rhinocam.modules.turn.description')}</p>
              </div>
            </Link>
            <Link 
              to="/products/rhinocam/nest"
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer h-80"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('/images/rhinocam/nest_thumb.jpeg')`
                }}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors" />
              </div>
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">{t('productPages.rhinocam.modules.nest.name')}</h3>
                <p className="text-lg text-white/90">{t('productPages.rhinocam.modules.nest.description')}</p>
              </div>
            </Link>
            <Link 
              to="/products/rhinocam/art"
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer h-80"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('/images/rhinocam/art_thumb.webp')`
                }}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors" />
              </div>
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">{t('productPages.rhinocam.modules.art.name')}</h3>
                <p className="text-lg text-white/90">{t('productPages.rhinocam.modules.art.description')}</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Configurations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">{t('productPages.rhinocam.configurations.title')}</h2>
          <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
            {t('productPages.rhinocam.configurations.description')}
          </p>
          
          <div className="space-y-6">
            {configurations.map((config, index) => (
              <div 
                key={config.id}
                className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-500 transition-colors"
              >
                <button
                  onClick={() => setExpandedConfig(expandedConfig === config.id ? null : config.id)}
                  className="w-full p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between text-left"
                >
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{config.name}</h3>
                    <p className="text-gray-700">{config.description}</p>
                  </div>
                  {expandedConfig === config.id ? (
                    <ChevronUp className="w-6 h-6 text-gray-600 ml-4 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-600 ml-4 flex-shrink-0" />
                  )}
                </button>
                
                {expandedConfig === config.id && (
                  <div className="p-6 bg-white border-t border-gray-200">
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{t('productPages.rhinocam.configurations.mainFeatures')}</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {config.features.map((feature: string, i: number) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{t('productPages.rhinocam.configurations.for')}</h4>
                      <p className="text-gray-700">{config.for}</p>
                    </div>
                    <div className="mt-4">
                      <Link 
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        <MessageCircle className="w-5 h-5" />
                        {t('productPages.rhinocam.configurations.contactForPrice')}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('productPages.rhinocam.faq.title')}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq: { question: string; answer: string }, index: number) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between text-left"
                >
                  <span className={`text-xl font-semibold pr-4 transition-colors ${
                    expandedFaq === index ? 'text-blue-600' : 'text-gray-900'
                  }`}>{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0 transition-colors" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-600 flex-shrink-0 transition-colors" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="p-6 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Link */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-2">
            {t('productPages.rhinocam.officialLink.text')}
          </p>
          <a 
            href="https://mecsoft.com/products/rhinocam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-semibold underline inline-flex items-center gap-2"
          >
            <Globe className="w-4 h-4" />
            <span>{t('productPages.rhinocam.officialLink.url')}</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default RhinoCamProduct;


