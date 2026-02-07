import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plane, Footprints, Factory, Smile, Package } from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';

const VoxelDanceAdditiveProduct: React.FC = () => {
  const { t } = useLocale();

  const industries = [
    { key: 'aerospace', icon: Plane },
    { key: 'shoes', icon: Footprints },
    { key: 'industrial', icon: Factory },
    { key: 'dental', icon: Smile },
    { key: 'consumerGoods', icon: Package },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - BOOST YOUR PRODUCTIVITY */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-[#0d0d0d]">
        {/* Dark gradient + orange glow (add hero.jpg to public/images/voxeldance for sparks image) */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'radial-gradient(ellipse 70% 80% at 75% 50%, rgba(234, 88, 12, 0.2) 0%, transparent 50%), linear-gradient(90deg, #0d0d0d 0%, #1a1a1a 45%, rgba(26,26,26,0.6) 100%)',
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
              {t('productPages.voxeldanceAdditive.hero.boostYour')}
              <br />
              {t('productPages.voxeldanceAdditive.hero.productivity')}
            </h1>
            <p className="text-base sm:text-lg text-white/90 mb-10 max-w-lg leading-relaxed">
              {t('productPages.voxeldanceAdditive.hero.tagline')}
            </p>
            <Link
              to="/products/voxeldance-manufacturing"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              {t('productPages.voxeldanceAdditive.hero.learnMore')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Empower your industries */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black text-center mb-12 sm:mb-16">
            {t('productPages.voxeldanceAdditive.industries.title')}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-10">
            {industries.map(({ key, icon: Icon }, index) => (
              <div key={key} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-[#e85c0d] flex items-center justify-center mb-4 shadow-md">
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={2} />
                </div>
                <span className={`text-sm sm:text-base font-medium ${index === 0 ? 'text-[#c2410c]' : 'text-gray-900'}`}>
                  {t(`productPages.voxeldanceAdditive.industries.${key}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tailored 3D printing software solutions */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        {/* Subtle wireframe pattern background */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              {t('productPages.voxeldanceAdditive.solutions.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('productPages.voxeldanceAdditive.solutions.subtitle')}
            </p>
          </div>

          {/* VoxelDance Additive Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
              {/* Monitor Image */}
              <div className="relative bg-gray-900 p-6 sm:p-8 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  {/* Monitor Frame */}
                  <div className="bg-black rounded-t-lg p-2 pb-1">
                    <div className="bg-gray-800 rounded-t-sm h-48 sm:h-64 relative overflow-hidden">
                      {/* 3D Model Heatmap Display */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-green-500/20 via-yellow-500/20 to-red-500/20 relative">
                          {/* Wireframe pattern overlay */}
                          <div 
                            className="absolute inset-0 opacity-30"
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20H0v-2h20v2H0v2h20v2H0v2h20v2H0v2h20z'/%3E%3C/g%3E%3C/svg%3E")`,
                            }}
                          />
                          {/* 3D shape silhouette */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-400/40 via-green-400/40 to-red-400/40 rounded-lg transform rotate-12" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Monitor Stand */}
                  <div className="bg-gray-700 h-2 w-24 mx-auto rounded-b-lg" />
                  <div className="bg-gray-600 h-1 w-32 mx-auto rounded-b-lg" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  {/* V Logo */}
                  <div className="w-10 h-10 bg-[#e85c0d] rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xl">V</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {t('productPages.voxeldanceAdditive.solutions.additive.title')}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('productPages.voxeldanceAdditive.solutions.additive.description')}
                </p>
                <Link
                  to="/products/voxeldance-manufacturing"
                  className="inline-block bg-[#e85c0d] hover:bg-[#c2410c] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  {t('productPages.voxeldanceAdditive.solutions.additive.learnMore')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoxelDanceAdditiveProduct;
