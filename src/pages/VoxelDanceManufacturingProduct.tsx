import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, CheckCircle, FileType, Layers, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';

const VoxelDanceManufacturingProduct: React.FC = () => {
  const { t } = useLocale();
  const [currentSupportSlide, setCurrentSupportSlide] = useState(0);
  
  const supportImages = [
    '/images/voxeldance/mix support.db110a87.png',
    '/images/voxeldance/mix support (1).dd27f196.png'
  ];
  
  const nextSupportSlide = () => {
    setCurrentSupportSlide((prev) => (prev + 1) % supportImages.length);
  };
  
  const prevSupportSlide = () => {
    setCurrentSupportSlide((prev) => (prev - 1 + supportImages.length) % supportImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Background pattern/gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black to-black z-0"></div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t('productPages.voxeldanceManufacturing.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto">
            {t('productPages.voxeldanceManufacturing.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-md text-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              {t('productPages.voxeldanceManufacturing.hero.learnMore')}
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-12 py-4 rounded-md text-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Play className="w-5 h-5 mr-2" />
              {t('productPages.voxeldanceManufacturing.hero.watchDemo')}
            </Link>
          </div>
        </div>
      </section>

      {/* What is VoxelDance Manufacturing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('productPages.voxeldanceManufacturing.about.title')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t('productPages.voxeldanceManufacturing.about.description')}
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-green-100 rounded-lg overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 bg-white/50 rounded-full flex items-center justify-center">
                      <Layers className="w-16 h-16 text-green-600" />
                    </div>
                    <p className="text-gray-700 font-semibold">{t('productPages.voxeldanceManufacturing.about.buildPreparation')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Just import all the formats. */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/images/voxeldance/13867719.90c5f216.png" 
                  alt="File Format Support" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t('productPages.voxeldanceManufacturing.features.importFormats.title')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('productPages.voxeldanceManufacturing.features.importFormats.description')}
              </p>
              
              {/* File Formats Grid */}
              <div className="space-y-6">
                {/* Mesh & 3D Printing Formats */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('productPages.voxeldanceManufacturing.features.importFormats.meshFormats')}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: 'STL', ext: '*.stl' },
                      { name: 'OBJ', ext: '*.obj' },
                      { name: '3MF', ext: '*.3mf' },
                      { name: 'CLI', ext: '*.cli' },
                      { name: 'SLC', ext: '*.slc' }
                    ].map((format, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <FileType className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">
                          <span className="font-medium">{format.name}</span>
                          <span className="text-gray-500 ml-1">({format.ext})</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CAD Formats */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('productPages.voxeldanceManufacturing.features.importFormats.cadFormats')}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: 'STEP', ext: '*.stp, *.step' },
                      { name: 'IGES', ext: '*.igs, *.iges' },
                      { name: 'SolidWorks', ext: '*.sldprt, *.sldasm, *.slddrw' },
                      { name: 'Pro/E Creo', ext: '*.prt, *.asm' },
                      { name: '3DExperience', ext: '*.CATPart' },
                      { name: 'Rhino', ext: '*.3dm' },
                      { name: 'AutoCAD', ext: '*.dxf, *.dwg' }
                    ].map((format, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <FileType className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">
                          <span className="font-medium">{format.name}</span>
                          <span className="text-gray-500 ml-1 text-xs">({format.ext})</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repairing files was never so easy. */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('productPages.voxeldanceManufacturing.features.repair.title')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('productPages.voxeldanceManufacturing.features.repair.description')}
              </p>
              <ul className="space-y-4">
                {[
                  t('productPages.voxeldanceManufacturing.features.repair.identifyErrors'),
                  t('productPages.voxeldanceManufacturing.features.repair.autoRepair')
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/videos/voxeldance/13853872.88fff357.gif" 
                  alt="Automatic Mesh Repair" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Powerful Orientation Tools */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/videos/voxeldance/13873624.38e7224b.gif" 
                  alt="Powerful Orientation Tools" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('productPages.voxeldanceManufacturing.features.orientation.title')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('productPages.voxeldanceManufacturing.features.orientation.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nest Your Parts in 2D/3D Automatically and Fast. */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('productPages.voxeldanceManufacturing.features.nesting.title')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('productPages.voxeldanceManufacturing.features.nesting.description')}
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/videos/voxeldance/13874031.190f6c88.webp" 
                  alt="2D/3D Nesting" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multiple Supports for SLA, LPBF and DLP. */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('productPages.voxeldanceManufacturing.features.supports.title')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('productPages.voxeldanceManufacturing.features.supports.description')}
              </p>
              <div className="mt-4">
                <p className="text-lg font-semibold text-gray-800 mb-3">{t('productPages.voxeldanceManufacturing.features.supports.supportTypes')}</p>
                <ul className="space-y-3">
                  {[
                    t('productPages.voxeldanceManufacturing.features.supports.barSupport'),
                    t('productPages.voxeldanceManufacturing.features.supports.pointSupport'),
                    t('productPages.voxeldanceManufacturing.features.supports.lineSupport'),
                    t('productPages.voxeldanceManufacturing.features.supports.blockSupport'),
                    t('productPages.voxeldanceManufacturing.features.supports.smartSupport')
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl relative group">
                {/* Images */}
                <div className="relative w-full h-full">
                  {supportImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentSupportSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`Multiple Support Types ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevSupportSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSupportSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {supportImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSupportSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSupportSlide
                          ? 'bg-white w-8'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhance Slice Files with Hatches */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center">
                  <Sparkles className="w-32 h-32 text-yellow-600" />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('productPages.voxeldanceManufacturing.features.hatches.title')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('productPages.voxeldanceManufacturing.features.hatches.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Compatibility
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hardware Compatibility
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            VoxelDance Manufacturing supports a wide range of industrial additive manufacturing systems
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              'EOS',
              'SLM Solutions',
              'Renishaw',
              '3D Systems',
              'Concept Laser',
              'Trumpf',
              'Sisma',
              'AddUp',
              'Farsoon',
              'BLT',
              'EP',
              'HBD'
            ].map((brand, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border-2 border-gray-200 hover:border-green-500 rounded-lg p-6 flex items-center justify-center transition-colors duration-300 h-24"
              >
                <span className="text-gray-700 font-semibold text-center">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('productPages.voxeldanceManufacturing.cta.title')}
          </h2>
          <p className="text-xl text-green-100 mb-10">
            {t('productPages.voxeldanceManufacturing.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-700 hover:bg-gray-100 px-12 py-4 rounded-md text-lg font-semibold transition-colors"
            >
              {t('productPages.voxeldanceManufacturing.cta.requestDemo')}
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700 px-12 py-4 rounded-md text-lg font-semibold transition-colors"
            >
              {t('productPages.voxeldanceManufacturing.cta.contactSales')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoxelDanceManufacturingProduct;
