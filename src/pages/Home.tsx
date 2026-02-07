import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';

const Home: React.FC = () => {
  const { t } = useLocale();

  const productCards = [
    {
      key: 'rhinoceros',
      image: '/images/rhino8/logo.jpg',
      link: '/products/rhinoceros'
    },
    {
      key: 'orangRhino',
      image: '/images/orang/orang_logo.png',
      link: '/products/orang-rhino'
    },
    {
      key: 'jevero',
      image: '/images/jevero/logo.jpg',
      link: '/products/jevero'
    },
    {
      key: 'voxeldanceAdditive',
      image: '/images/voxeldance/logo.jpg',
      link: '/products/voxeldance-additive'
    },
    {
      key: 'rhinocam',
      image: '/images/rhinocam/rhinocam-logo-f97fcd96.png',
      link: '/products/rhinocam'
    },
    {
      key: 'rizomuv',
      image: '/images/rizomuv/logo.jpg',
      link: '/products/rizomuv'
    }
  ];

  const deviceCards = [
    {
      key: 'scan3dTexu630w',
      image: '/images/scan3d/hình chính máy 630W.jpg',
      link: '/products/scan3d-texu-630w'
    },
    {
      key: 'scan3dTexu3w',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      link: '/products/scan3d-texu-3w'
    },
    {
      key: 'scan3dTexuT22',
      image: '/images/scan3d/texu_T22.jpg',
      link: '/products/scan3d-texu-t22'
    }
  ];

  // Banner slider videos (5 main software videos)
  const bannerVideos = [
    { 
      id: 1, 
      video: '/videos/rhino8/new-in-v8-shrinkwrap-1080p.mp4', 
      title: 'Rhinoceros 8 - ShrinkWrap',
      alt: 'Rhinoceros 8 ShrinkWrap Feature'
    },
    { 
      id: 2, 
      video: '/videos/orang/main-ant3d.mp4', 
      title: 'Ant3D - Main Demo',
      alt: 'Ant3D Main Demonstration'
    },
    { 
      id: 3, 
      video: '/videos/jevero/Jevero-presentation-trailer.mp4', 
      title: 'Jevero - Presentation',
      alt: 'Jevero Presentation Trailer'
    },
    { 
      id: 4, 
      video: '/videos/rhino8/new-in-v8-metal-1080p.mp4', 
      title: 'Rhinoceros 8 - Metal',
      alt: 'Rhinoceros 8 Metal Performance'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerVideos.length);
    }, 8000); // Change slide every 8 seconds (longer for videos)

    return () => clearInterval(interval);
  }, [bannerVideos.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerVideos.length) % bannerVideos.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerVideos.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner with Video Slider */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-black">
        {/* Video Background Slider */}
        <div className="absolute inset-0">
          {bannerVideos.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 scale-100 z-10' 
                  : 'opacity-0 scale-105 z-0'
              }`}
            >
              {index === currentSlide ? (
                <video
                  key={`video-${banner.id}-${currentSlide}`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  onLoadedData={(e) => {
                    // Ensure video plays
                    const video = e.target as HTMLVideoElement;
                    video.play().catch(() => {});
                  }}
                >
                  <source src={banner.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : null}
              
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60"></div>
              
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Main Title */}
            <div className="mb-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-2xl">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {t('common.home.hero.title')}
                </span>
                <br />
                <span className="text-white">
                  {t('common.home.hero.subtitle')}
                </span>
                <br />
                <span className="text-white text-3xl md:text-5xl lg:text-6xl">
                  {t('common.home.hero.subtitle2')}
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto drop-shadow-lg leading-relaxed">
              {t('common.home.hero.description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/products"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50 text-lg"
              >
                {t('common.home.hero.exploreProducts')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-lg"
              >
                {t('common.home.hero.contactConsultation')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Current Video Title Badge */}
            <div className="mt-8 animate-fade-in-delay">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <Play className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold text-sm md:text-base">
                  {bannerVideos[currentSlide].title}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Enhanced */}
        <button
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/40"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/40"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Enhanced Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {bannerVideos.map((banner, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group flex flex-col items-center gap-2"
              aria-label={`Go to ${banner.title}`}
            >
              <div
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? 'w-10 bg-gradient-to-r from-yellow-400 to-orange-400 shadow-lg shadow-yellow-400/50'
                    : 'w-2 bg-white/40 hover:bg-white/60 group-hover:w-6'
                }`}
              />
              {index === currentSlide && (
                <span className="text-white text-xs font-medium whitespace-nowrap drop-shadow-lg">
                  {index + 1}/{bannerVideos.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Orang-Rhino & Ant3D Featured Video Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden py-16 lg:py-24">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Content above video */}
          <div className="text-center mb-12 z-10">
            <div className="inline-block mb-4">
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                {t('common.home.orangRhinoSection.badge')}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-orange-600">{t('common.home.orangRhinoSection.title')}</span>
              <br />
              {t('common.home.orangRhinoSection.subtitle')}
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t('common.home.orangRhinoSection.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-5 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl text-lg"
              >
                {t('common.home.orangRhinoSection.contactSales')}
                <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
              <Link
                to="/products/orang-rhino"
                className="inline-flex items-center px-6 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-300"
              >
                <Play className="w-4 h-4 mr-2" />
                {t('common.home.orangRhinoSection.discoverMore')}
              </Link>
            </div>
          </div>

          {/* Large Video - Full Width */}
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
              {/* Enhanced Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>
              
              <div className="relative bg-black rounded-3xl overflow-hidden">
                <div className="relative w-full aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/AL0di7yN3MA?rel=0&autoplay=1&mute=1&loop=1&playlist=AL0di7yN3MA"
                    title="Orang-Rhino Banner Video"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                
                {/* Overlay gradient for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Floating badges - Larger */}
            <div className="absolute -top-6 -right-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold shadow-2xl transform rotate-12 animate-bounce text-lg z-20">
              {t('common.home.orangRhinoSection.badge1')}
            </div>
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white px-6 py-3 rounded-lg font-bold shadow-2xl transform -rotate-12 text-lg z-20">
              {t('common.home.orangRhinoSection.badge2')}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('common.home.featuredProducts.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('common.home.featuredProducts.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 items-stretch">
            {productCards.map((product) => {
              const title = t(`common.home.featuredProducts.items.${product.key}.title`);
              const description = t(`common.home.featuredProducts.items.${product.key}.description`);

              return (
                <Link
                  key={product.key}
                  to={product.link}
                  className="group relative rounded-3xl bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-pink-500/40 p-[1px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer h-full flex flex-col"
                  aria-label={title}
                >
                  <div className="h-full w-full rounded-[27px] bg-white/95 backdrop-blur-md shadow-lg transition-colors duration-300 group-hover:bg-white flex flex-col">
                    <div className="relative h-40 overflow-hidden rounded-t-[27px] bg-gray-50">
                      <img
                        src={product.image}
                        alt={title}
                        className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-2xl lg:text-3xl font-bold leading-tight drop-shadow-lg whitespace-nowrap truncate">{title}</h3>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-gray-600 mb-6 flex-1 leading-relaxed line-clamp-3">
                        {description}
                      </p>
                      <div className="flex flex-col gap-3 mt-auto">
                        <Link
                          to="/contact"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                        >
                          {t('common.home.hero.contactConsultation')}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                        <Link
                          to={product.link}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center justify-center text-blue-600 font-medium hover:text-blue-700 transition-colors text-xs"
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          {t('common.home.featuredProducts.viewDetails')}
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
            >
              {t('common.home.hero.contactConsultation')}
              <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              {t('common.home.featuredProducts.viewAllProducts')}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('common.home.featuredDevices.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('common.home.featuredDevices.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 items-stretch">
            {deviceCards.map((device) => {
              const title = t(`common.home.featuredDevices.items.${device.key}.title`);
              const description = t(`common.home.featuredDevices.items.${device.key}.description`);

              return (
                <Link
                  key={device.key}
                  to={device.link}
                  className="group relative rounded-3xl bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-pink-500/40 p-[1px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer h-full flex flex-col"
                  aria-label={title}
                >
                  <div className="h-full w-full rounded-[27px] bg-white/95 backdrop-blur-md shadow-lg transition-colors duration-300 group-hover:bg-white flex flex-col">
                    <div className="relative h-40 overflow-hidden rounded-t-[27px] bg-gray-50">
                      <img
                        src={device.image}
                        alt={title}
                        className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-2xl lg:text-3xl font-bold leading-tight drop-shadow-lg whitespace-nowrap truncate">{title}</h3>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-gray-600 mb-6 flex-1 leading-relaxed line-clamp-3">
                        {description}
                      </p>
                      <div className="flex flex-col gap-3 mt-auto">
                        <Link
                          to="/contact"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                        >
                          {t('common.home.hero.contactConsultation')}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                        <Link
                          to={device.link}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center justify-center text-blue-600 font-medium hover:text-blue-700 transition-colors text-xs"
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          {t('common.home.featuredDevices.viewDetails')}
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
            >
              {t('common.home.hero.contactConsultation')}
              <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
            <Link
              to="/devices"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              {t('common.home.featuredDevices.viewAllDevices')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
