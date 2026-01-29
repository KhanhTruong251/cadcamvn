import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  MessageCircle,
  Layers,
  Image,
  Move,
  Grid,
  Edit,
  FileImage,
  Palette
} from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';

const BotchaProduct: React.FC = () => {
  const { t } = useLocale();

  const mainFeatures = [
    {
      icon: "/icons/botcha/botcha__unwrap-1.png",
      titleKey: "productPages.botcha.features.uvUnwrap.title",
      descriptionKey: "productPages.botcha.features.uvUnwrap.description"
    },
    {
      icon: "/icons/botcha/botcha__cambia-forma-1.png",
      titleKey: "productPages.botcha.features.drawOnMesh.title",
      descriptionKey: "productPages.botcha.features.drawOnMesh.description"
    },
    {
      icon: "/icons/botcha/botcha__trasferisci-uv-1.png",
      titleKey: "productPages.botcha.features.uvTransfer.title",
      descriptionKey: "productPages.botcha.features.uvTransfer.description"
    },
    {
      icon: "/icons/botcha/botcha__cambia-forma-1.png",
      titleKey: "productPages.botcha.features.changeLast.title",
      descriptionKey: "productPages.botcha.features.changeLast.description"
    },
    {
      icon: "/icons/botcha/botcha__rimappa-oggetto-1.png",
      titleKey: "productPages.botcha.features.remapObject.title",
      descriptionKey: "productPages.botcha.features.remapObject.description"
    },
    {
      icon: "/icons/botcha/botcha__spiana-forma-1.png",
      titleKey: "productPages.botcha.features.flattenLast.title",
      descriptionKey: "productPages.botcha.features.flattenLast.description"
    },
    {
      icon: "/icons/botcha/botcha__proietta-mesh-1.png",
      titleKey: "productPages.botcha.features.projectMesh.title",
      descriptionKey: "productPages.botcha.features.projectMesh.description"
    },
    {
      icon: "/icons/botcha/botcha__soft-edit-1.png",
      titleKey: "productPages.botcha.features.softEdit.title",
      descriptionKey: "productPages.botcha.features.softEdit.description"
    }
  ];

  const highlights = [
    {
      image: "/images/botcha/remapping.jpg",
      titleKey: "productPages.botcha.highlights.remapping.title",
      descriptionKey: "productPages.botcha.highlights.remapping.description"
    },
    {
      image: "/images/botcha/tooling.jpg",
      titleKey: "productPages.botcha.highlights.tooling.title",
      descriptionKey: "productPages.botcha.highlights.tooling.description"
    },
    {
      image: "/images/botcha/lacing.jpg",
      titleKey: "productPages.botcha.highlights.lacing.title",
      descriptionKey: "productPages.botcha.highlights.lacing.description"
    },
    {
      image: "/images/botcha/grasshopper.jpg",
      titleKey: "productPages.botcha.highlights.grasshopper.title",
      descriptionKey: "productPages.botcha.highlights.grasshopper.description"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="flex flex-col">
            {/* Text Content - Top */}
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-5xl font-bold mb-6 leading-tight">
                {t('productPages.botcha.hero.title')}
              </h1>
              <p className="text-xl lg:text-2xl text-purple-100 mb-8 leading-relaxed">
                {t('productPages.botcha.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-purple-700 font-semibold rounded-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  {t('productPages.botcha.hero.requestDemo')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-700 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t('productPages.botcha.hero.contactUs')}
                </Link>
              </div>
            </div>
            
            {/* Main Video Section - Bottom */}
            <div className="relative max-w-5xl mx-auto w-full mt-8">
              <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/AC17voknro8?autoplay=1&mute=1&loop=1&playlist=AC17voknro8"
                  title="Botcha Product Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <img src={highlight.image} alt={t(highlight.titleKey)} className="w-full h-48 object-cover mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t(highlight.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(highlight.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t('productPages.botcha.features.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-purple-100"
              >
                <div className="mb-4 flex items-center justify-start">
                  <img 
                    src={feature.icon} 
                    alt={t(feature.titleKey)}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      console.error(`Failed to load icon: ${feature.icon}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {t(feature.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t('productPages.botcha.cta.title')}
          </h2>
          <h3 className="text-3xl font-bold text-purple-200 mb-8">
            {t('productPages.botcha.cta.subtitle')}
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-5 bg-white text-purple-700 font-semibold rounded-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
          >
            {t('productPages.botcha.cta.requestDemo')}
            <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BotchaProduct;
