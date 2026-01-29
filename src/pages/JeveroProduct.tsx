import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  MessageCircle,
  Layers,
  Ruler,
  FileText,
  Calculator,
  Package,
  Download,
  Grid,
  Zap,
  Settings,
  Workflow,
  Globe
} from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';

const JeveroProduct: React.FC = () => {
  const { t } = useLocale();

  const mainFeatures = [
    {
      icon: "/icons/jevero/ic_join_100-1.png",
      titleKey: "productPages.jevero.features.parametricPatterns.title",
      descriptionKey: "productPages.jevero.features.parametricPatterns.description"
    },
    {
      icon: "/icons/jevero/ic_pannel-grading_100-1.png",
      titleKey: "productPages.jevero.features.grading.title",
      descriptionKey: "productPages.jevero.features.grading.description"
    },
    {
      icon: "/icons/jevero/ic_pannel-view-mode-list_100-1.png",
      titleKey: "productPages.jevero.features.partManagement.title",
      descriptionKey: "productPages.jevero.features.partManagement.description"
    },
    {
      icon: "/icons/jevero/ic_nesting-export-data_100-1.png",
      titleKey: "productPages.jevero.features.dataExport.title",
      descriptionKey: "productPages.jevero.features.dataExport.description"
    },
    {
      icon: "/icons/jevero/ic_margin-distance_100-1.png",
      titleKey: "productPages.jevero.features.preciseMeasurements.title",
      descriptionKey: "productPages.jevero.features.preciseMeasurements.description"
    },
    {
      icon: "/icons/jevero/ic_panel_generate-grading-table_100-1.png",
      titleKey: "productPages.jevero.features.processing.title",
      descriptionKey: "productPages.jevero.features.processing.description"
    },
    {
      icon: "/icons/jevero/ic_set-layering_100-1.png",
      titleKey: "productPages.jevero.features.layering.title",
      descriptionKey: "productPages.jevero.features.layering.description"
    },
    {
      icon: "/icons/jevero/ic_dxf-rebuild-_100-1.png",
      titleKey: "productPages.jevero.features.dxfRebuilding.title",
      descriptionKey: "productPages.jevero.features.dxfRebuilding.description"
    }
  ];

  const highlights = [
    {
      titleKey: "productPages.jevero.highlights.robustGrading.title",
      descriptionKey: "productPages.jevero.highlights.robustGrading.description",
      gradient: "from-blue-500 to-cyan-500",
      image: "/images/jevero/grading.jpg"
    },
    {
      titleKey: "productPages.jevero.highlights.fitsPipeline.title",
      descriptionKey: "productPages.jevero.highlights.fitsPipeline.description",
      gradient: "from-indigo-500 to-purple-500",
      image: "/images/jevero/pipeline.jpg"
    },
    {
      titleKey: "productPages.jevero.highlights.supportedByManufacturers.title",
      descriptionKey: "productPages.jevero.highlights.supportedByManufacturers.description",
      gradient: "from-blue-600 to-indigo-600",
      image: "/images/jevero/jevero_cut-machine.jpg"
    },
    {
      titleKey: "productPages.jevero.highlights.worldOfTools.title",
      descriptionKey: "productPages.jevero.highlights.worldOfTools.description",
      gradient: "from-cyan-500 to-blue-500",
      image: "/images/jevero/jevero_img.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
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
                {t('productPages.jevero.hero.title')}
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                {t('productPages.jevero.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  {t('productPages.jevero.hero.requestDemo')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t('productPages.jevero.hero.contactUs')}
                </Link>
              </div>
            </div>
            
            {/* Main Video Section - Bottom */}
            <div className="relative max-w-5xl mx-auto w-full mt-8">
              <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/4o0th8IUcEk?autoplay=1&mute=1&loop=1&playlist=4o0th8IUcEk"
                  title="Jevero Product Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description & Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Description Text - Top */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
              {t('productPages.jevero.description.text')}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Image Section */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img 
                    src={highlight.image} 
                    alt={t(highlight.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop';
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60`}></div>
                  
                  
                </div>
                
                {/* Content Section */}
                <div className="relative p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {t(highlight.titleKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {t(highlight.descriptionKey)}
                  </p>
                </div>
                
                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`}></div>
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
              {t('productPages.jevero.features.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-blue-100"
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('productPages.jevero.cta.title')}
          </h2>
          <h3 className="text-3xl font-bold text-blue-600 mb-8">
            {t('productPages.jevero.cta.subtitle')}
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
          >
            {t('productPages.jevero.cta.requestDemo')}
            <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default JeveroProduct;
