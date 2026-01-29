import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Download, 
  MessageCircle, 
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Scan,
  Zap,
  Shield,
  Award,
  Camera,
  Cpu,
  Monitor,
  Ruler,
  Lightbulb
} from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';

const Scan3DTexu630W: React.FC = () => {
  const { t, locale } = useLocale();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [imageError, setImageError] = useState(false);

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
    return translations.productPages?.scan3dTexu630w?.faq?.items || [];
  }, [translations]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/devices"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {t('common.header.backToProducts')}
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                {t('productPages.scan3dTexu630w.hero.title')}
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                {t('productPages.scan3dTexu630w.hero.subtitle')}
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                {t('productPages.scan3dTexu630w.hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  {t('productPages.scan3dTexu630w.hero.requestQuote')}
                </Link>
                <Link 
                  to="/contact"
                  className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('productPages.scan3dTexu630w.hero.contactUs')}
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-lg">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  {!imageError ? (
                    <img 
                      src="/images/scan3d/630W.jpg" 
                      alt="Scan3D Texu 630W" 
                      className="w-full h-auto object-cover"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="bg-gradient-to-br from-blue-500/20 to-indigo-600/20 backdrop-blur-sm p-12 flex items-center justify-center aspect-video">
                      <div className="text-center">
                        <Scan className="w-24 h-24 mx-auto mb-4 text-white/60" />
                        <div className="text-4xl font-bold text-white mb-2">
                          {t('productPages.scan3dTexu630w.hero.title')}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {t('productPages.scan3dTexu630w.hero.imageError')}
                        </div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('productPages.scan3dTexu630w.overview.title')}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              {t('productPages.scan3dTexu630w.overview.description')}
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {(translations.productPages?.scan3dTexu630w?.overview?.features || []).map((feature: string, i: number) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('productPages.scan3dTexu630w.overview.whatDoes.title')}
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              {t('productPages.scan3dTexu630w.overview.whatDoes.description')}
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              {(translations.productPages?.scan3dTexu630w?.overview?.whatDoes?.capabilities || []).map((capability: string, i: number) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-base">{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('productPages.scan3dTexu630w.features.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(translations.productPages?.scan3dTexu630w?.features?.items || []).map((feature: { icon: string; title: string; description: string }, index: number) => {
              const IconComponent = {
                scan: Scan,
                zap: Zap,
                shield: Shield,
                award: Award,
                camera: Camera,
                cpu: Cpu,
                monitor: Monitor,
                ruler: Ruler,
                lightbulb: Lightbulb
              }[feature.icon] || CheckCircle;

              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-200"
                >
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-700 text-base">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('productPages.scan3dTexu630w.specifications.title')}
          </h2>
          <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="divide-y divide-gray-200">
                  {(translations.productPages?.scan3dTexu630w?.specifications?.items || []).map((spec: { name: string; value: string }, i: number) => (
                    <tr key={i} className="hover:bg-white transition-colors">
                      <td className="px-6 py-4 text-base font-semibold text-gray-900 w-1/3">
                        {spec.name}
                      </td>
                      <td className="px-6 py-4 text-base text-gray-700">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('productPages.scan3dTexu630w.applications.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(translations.productPages?.scan3dTexu630w?.applications?.items || []).map((app: string, index: number) => (
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

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('productPages.scan3dTexu630w.faq.title')}
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

export default Scan3DTexu630W;

