import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Download, 
  MessageCircle, 
  ChevronDown,
  ChevronUp,
  Layers,
  Phone,
  Mail,
  Globe,
  ArrowLeft
} from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';

const RhinoCamNest: React.FC = () => {
  const { t, locale } = useLocale();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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


  const faqs = useMemo(() => {
    return translations.productPages?.rhinocam?.nest?.faq?.items || [];
  }, [translations]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/products/rhinocam"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {t('common.header.backToProducts')}
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t('productPages.rhinocam.nest.hero.title')}</h1>
              <p className="text-xl text-gray-300 mb-6">
                {t('productPages.rhinocam.nest.hero.subtitle')}
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                {t('productPages.rhinocam.nest.hero.description')}
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
            <div className="flex items-center justify-center">
              <div className="w-full max-w-2xl">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/2r1yn3j67Ww?autoplay=1&mute=1"
                    title="RhinoCAM-NEST Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t('productPages.rhinocam.nest.overview.title')}</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              {t('productPages.rhinocam.nest.overview.description')}
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {(translations.productPages?.rhinocam?.nest?.overview?.features || []).map((feature: string, i: number) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('productPages.rhinocam.nest.overview.whatDoes.title')}</h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              {t('productPages.rhinocam.nest.overview.whatDoes.description')}
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              {(translations.productPages?.rhinocam?.nest?.overview?.whatDoes?.capabilities || []).map((capability: string, i: number) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-base">{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">{t('productPages.rhinocam.nest.applications.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(translations.productPages?.rhinocam?.nest?.applications?.items || []).map((app: string, index: number) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-200"
              >
                <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
                <p className="text-gray-800 font-medium text-base">{app}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">{t('productPages.rhinocam.nest.features.title')}</h2>
          
          {/* Feature Tables */}
          <div className="space-y-8">
            {(translations.productPages?.rhinocam?.nest?.features?.categories || []).map((category: { name: string; features: Array<{ name: string }> }, index: number) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="px-6 py-4 text-left text-base font-semibold text-gray-900">{category.name}</th>
                        <th className="px-4 py-4 text-center text-base font-semibold text-gray-900 w-16">RHINONEST</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {(category.features || []).map((feature: { name: string }, i: number) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-base text-gray-900">{feature.name}</td>
                          <td className="px-4 py-4 text-center">
                            <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('productPages.rhinocam.nest.faq.title')}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq: { question: string; answer: string }, index: number) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white"
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

    </div>
  );
};

export default RhinoCamNest;

