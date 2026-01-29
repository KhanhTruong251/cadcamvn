import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Zap
} from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';

const ShrinkWrapFeature: React.FC = () => {
  const { t } = useLocale();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-blue-100/10"></div>
        <div className="pointer-events-none absolute -top-16 -right-16 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="pointer-events-none absolute top-24 -left-20 w-64 h-64 bg-indigo-300/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold shadow animate-pulse">
                <Zap className="w-4 h-4" />
                <span>{t('shrinkwrap.hero.badge')}</span>
              </div>
              
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-2 leading-tight">
                  {t('shrinkwrap.hero.title')}
                </h1>
                <div className="h-1.5 w-28 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full mb-6"></div>
                <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed">
                  {t('shrinkwrap.hero.subtitle')}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-slate-600">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>{t('shrinkwrap.hero.features.printing')}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-600">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>{t('shrinkwrap.hero.features.union')}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-600">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>{t('shrinkwrap.hero.features.scanData')}</span>
                </div>
              </div>

              {/* Intentionally no CTA buttons to keep page minimal */}
            </div>

            {/* Video, revealed after Learn more */}
            <div className="relative">
              <div className="p-[2px] rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-500 shadow-xl">
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-white">
                <video
                  className="w-full h-full"
                  controls
                  preload="metadata"
                  poster="/images/rhino8/shrinkwrap-poster.jpg"
                  style={{ objectFit: 'cover' }}
                >
                  <source src="/videos/rhino8/new-in-v8-shrinkwrap-1080p.mp4" type="video/mp4" />
                </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{t('shrinkwrap.overview.title')}</h2>
            <div className="mx-auto h-1.5 w-24 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t('shrinkwrap.overview.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2 text-center">{t('shrinkwrap.capabilities.title')}</h3>
          <div className="mx-auto h-1.5 w-20 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[ 
              {
                title: t('shrinkwrap.capabilities.items.watertight.title'),
                desc: t('shrinkwrap.capabilities.items.watertight.desc')
              },
              {
                title: t('shrinkwrap.capabilities.items.combine.title'),
                desc: t('shrinkwrap.capabilities.items.combine.desc')
              },
              {
                title: t('shrinkwrap.capabilities.items.scanData.title'),
                desc: t('shrinkwrap.capabilities.items.scanData.desc')
              },
              {
                title: t('shrinkwrap.capabilities.items.robust.title'),
                desc: t('shrinkwrap.capabilities.items.robust.desc')
              },
              {
                title: t('shrinkwrap.capabilities.items.parameters.title'),
                desc: t('shrinkwrap.capabilities.items.parameters.desc')
              },
              {
                title: t('shrinkwrap.capabilities.items.manufacturing.title'),
                desc: t('shrinkwrap.capabilities.items.manufacturing.desc')
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-center mb-3">
                  <div className="mr-3 inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-sm">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h4 className="text-slate-900 font-semibold text-lg">{item.title}</h4>
                </div>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggested Workflow */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2 text-center">{t('shrinkwrap.workflow.title')}</h3>
          <div className="mx-auto h-1.5 w-20 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full mb-8"></div>
          <div className="space-y-6">
            {[
              t('shrinkwrap.workflow.steps.0'),
              t('shrinkwrap.workflow.steps.1'),
              t('shrinkwrap.workflow.steps.2'),
              t('shrinkwrap.workflow.steps.3'),
              t('shrinkwrap.workflow.steps.4')
            ].map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold shadow-sm">
                  {index + 1}
                </div>
                <p className="text-slate-600 leading-relaxed pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips & Best Practices */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2 text-center">{t('shrinkwrap.tips.title')}</h3>
          <div className="mx-auto h-1.5 w-20 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: t('shrinkwrap.tips.items.detail.title'),
                desc: t('shrinkwrap.tips.items.detail.desc')
              },
              {
                title: t('shrinkwrap.tips.items.offset.title'),
                desc: t('shrinkwrap.tips.items.offset.desc')
              },
              {
                title: t('shrinkwrap.tips.items.clean.title'),
                desc: t('shrinkwrap.tips.items.clean.desc')
              },
              {
                title: t('shrinkwrap.tips.items.thickness.title'),
                desc: t('shrinkwrap.tips.items.thickness.desc')
              }
            ].map((tip, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                <h4 className="text-slate-900 font-semibold mb-2">{tip.title}</h4>
                <p className="text-slate-600">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal page: sections removed by request */}
    </div>
  );
};

export default ShrinkWrapFeature;
