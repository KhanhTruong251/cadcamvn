import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Download,
  Play,
  Star,
  Users,
  Award,
  Zap,
  Shield,
  Globe,
  CheckCircle,
  ChevronRight,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';

const RhinocerosProduct: React.FC = () => {
  const { t, locale } = useLocale();
  const [selectedImage, setSelectedImage] = useState(0);

  // Get translations and extract features arrays
  const translations = useMemo(() => {
    try {
      // Dynamic import for translations
      if (locale === 'en') {
        return require('../locales/en.json');
      } else {
        return require('../locales/vi.json');
      }
    } catch {
      return {};
    }
  }, [locale]);

  const getFeaturesArray = (key: string): string[] => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return [];
      }
    }
    
    return Array.isArray(value) ? value : [];
  };

  const productMediaKeys = ['shrinkwrap', 'subdCreases', 'macMetal', 'modelingSimplified'];
  
  const productMedia = productMediaKeys.map((key) => ({
    image: key === 'shrinkwrap' ? '/images/rhino8/shrinkwrap.png' :
            key === 'subdCreases' ? '/images/rhino8/subd-creases.png' :
            key === 'macMetal' ? '/images/rhino8/metal-mac.png' :
            '/images/rhino8/modeling-simplified.png',
    video: key === 'shrinkwrap' ? '/videos/rhino8/new-in-v8-shrinkwrap-1080p.mp4' :
            key === 'subdCreases' ? '/videos/rhino8/subd-sharp-edges-1080p.mp4' :
            key === 'macMetal' ? '/videos/rhino8/new-in-v8-metal-1080p.mp4' :
            '/videos/rhino8/new-in-v8-modeling-simplified-1080p.mp4',
    key,
    alt: t(`productPages.rhinoceros.gallery.items.${key}.alt`),
    details: {
      title: t(`productPages.rhinoceros.gallery.items.${key}.title`),
      description: t(`productPages.rhinoceros.gallery.items.${key}.description`),
      features: getFeaturesArray(`productPages.rhinoceros.gallery.items.${key}.features`)
    }
  }));

  // Fallback images in case local images don't exist
  const fallbackImages = [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-6 h-6 text-yellow-400" />
                <span className="text-blue-200 text-sm font-medium">{t('productPages.rhinoceros.hero.badge')}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                {t('productPages.rhinoceros.hero.title')}
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {t('productPages.rhinoceros.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t('productPages.rhinoceros.hero.contactButton')}
                </button>
              </div>
            </div>

            <div className="relative z-10">
              <video
                key={productMedia[selectedImage].video}
                src={productMedia[selectedImage].video}
                poster={productMedia[selectedImage].image}
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-video object-contain bg-black rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Images Gallery */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {productMedia.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`group relative rounded-lg overflow-hidden border-2 transition-all duration-300 bg-gray-100 ${selectedImage === index
                  ? 'border-blue-500 shadow-md shadow-blue-200/50'
                  : 'border-transparent hover:border-blue-300 hover:shadow'
                  }`}
              >
                <img
                  src={item.image}
                  alt={`Rhino 8 - ${item.alt}`}
                  className="w-full h-40 sm:h-48 lg:h-56 object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = fallbackImages[index];
                  }}
                />
                {/* Viewing Status Overlay - only show on selected image */}
                {selectedImage === index && (
                  <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    {t('productPages.rhinoceros.gallery.viewing')}
                  </div>
                )}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity ${selectedImage === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className={`text-sm sm:text-base font-bold text-white truncate block drop-shadow-lg ${selectedImage === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}>
                    {item.alt}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* All the details link */}
          <div className="flex justify-end mt-6 mb-6">
            <a
              href="https://www.rhino3d.com/en/8/new/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300 rounded-lg hover:bg-blue-50"
            >
              {t('productPages.rhinoceros.gallery.allDetails')}
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Selected Feature Details */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-100 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {productMedia[selectedImage].details.title}
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {productMedia[selectedImage].details.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {productMedia[selectedImage].details.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RhinocerosProduct;
