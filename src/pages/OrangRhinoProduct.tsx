import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Play,
  MessageCircle,
  Download,
  ArrowRight,
  CheckCircle,
  Layers,
  Settings,
  Zap,
  Package,
  Grid,
  Ruler,
  FileText,
  Move,
  RotateCcw,
  Box,
  Image,
  Gauge,
  TrendingUp,
  Footprints,
  Scissors,
  Factory,
  X,
  BookOpen,
  Monitor,
  Download as InstallIcon,
  AlertTriangle,
  Info
} from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';

const OrangRhinoProduct: React.FC = () => {
  const { t } = useLocale();
  const [selectedProduct, setSelectedProduct] = useState<'orang' | 'ant3d'>('orang');
  const [selectedModule, setSelectedModule] = useState<string>('overview');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const getYouTubeId = (input: string): string | null => {
    // Accept raw ID
    if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;

    try {
      const url = new URL(input);

      // youtu.be/<id>
      if (url.hostname.includes('youtu.be')) {
        const id = url.pathname.replace('/', '').split('/')[0];
        return id ? id : null;
      }

      // youtube.com/watch?v=<id>
      const v = url.searchParams.get('v');
      if (v) return v;

      // youtube.com/embed/<id>
      const match = url.pathname.match(/\/embed\/([^/?]+)/);
      if (match?.[1]) return match[1];
    } catch {
      // ignore
    }

    return null;
  };

  // Reset module and video when switching products
  useEffect(() => {
    setSelectedModule('overview');
    setSelectedVideo(null);
  }, [selectedProduct]);

  // Orang-Rhino Functional Modules
  const orangModules = [
    {
      id: 'curve',
      nameKey: 'productPages.orangRhino.orang.modules.curve.name',
      nameViKey: 'productPages.orangRhino.orang.modules.curve.nameVi',
      icon: Ruler,
      descriptionKey: 'productPages.orangRhino.orang.modules.curve.description',
      features: [
        'Interpolate curves on curves: Makes connections between two curves by cutting and reconstructing them quickly and accurately',
        'Repair curves: Reconstruct polylines from 2D modeling software (Shoemaster, Romans Cad) for use in Rhinoceros without redrawing',
        'Offset curve: Batch offset curves with variable dimensions, providing endless design possibilities',
        '2D to 3D: Quickly position engineering projects (blueprints) in global standard, reducing manual operation time'
      ]
    },
    {
      id: 'surface',
      nameKey: 'productPages.orangRhino.orang.modules.surface.name',
      nameViKey: 'productPages.orangRhino.orang.modules.surface.nameVi',
      icon: Layers,
      descriptionKey: 'productPages.orangRhino.orang.modules.surface.description',
      features: [
        'Groove: Create complex profiles in batches with different shapes',
        'Surface ConvexHull: Makes complex geometries like pyramids or rounded effects (e.g., Boost texture pattern) with standard heights or controlled by target surface',
        'Blend surfaces with multiple boundaries: Make transition surfaces between multiple cavities in seconds',
        'Seam Library: Create a library of easily accessible and customizable seams',
        'Convex hull mesh: Creates organic geometries through batch meshing, delivering smooth effects',
        'IP tool: Reduce and compensate thicknesses in 3D for expanded EVA and Supercritical EVA products',
        'Many to Many surface flow: Performs complex projections in a few clicks between many base and target surfaces'
      ]
    },
    {
      id: 'morph',
      nameKey: 'productPages.orangRhino.orang.modules.morph.name',
      nameViKey: 'productPages.orangRhino.orang.modules.morph.nameVi',
      icon: Move,
      descriptionKey: 'productPages.orangRhino.orang.modules.morph.description',
      features: [
        'Modify contours and profiles with precision',
        'Remove areas with negatives that hinder machining process',
        'Create complex geometries that save time and provide unique visual effects',
        'Interfere morph: Give Grasshopper Attractor point-like effects quickly and easily'
      ]
    },
    {
      id: 'mould',
      nameKey: 'productPages.orangRhino.orang.modules.mould.name',
      nameViKey: 'productPages.orangRhino.orang.modules.mould.nameVi',
      icon: Box,
      descriptionKey: 'productPages.orangRhino.orang.modules.mould.description',
      features: [
        'Automated creation for closing matrices',
        'Morph resources for process optimization',
        'Casting resources for adjusting thickness of steel and aluminum cast molds',
        'Hole distribution for weight loss',
        'Command for creating gas escapes for ETPU molds'
      ]
    },
    {
      id: 'reverse',
      nameKey: 'productPages.orangRhino.orang.modules.reverse.name',
      nameViKey: 'productPages.orangRhino.orang.modules.reverse.nameVi',
      icon: RotateCcw,
      descriptionKey: 'productPages.orangRhino.orang.modules.reverse.description',
      features: [
        'Powerful tools for creating curves from STL objects',
        'NURBS surface reconstruction from scan data',
        'Clean meshes from scan data for manufacturing'
      ]
    },
    {
      id: 'texture',
      nameKey: 'productPages.orangRhino.orang.modules.texture.name',
      nameViKey: 'productPages.orangRhino.orang.modules.texture.nameVi',
      icon: Image,
      descriptionKey: 'productPages.orangRhino.orang.modules.texture.description',
      features: [
        'Apply textures to soles and footwear components',
        'Use black and white images for texture mapping',
        'Grayscale image support for detailed textures'
      ]
    },
    {
      id: 'grade',
      nameKey: 'productPages.orangRhino.orang.modules.grade.name',
      nameViKey: 'productPages.orangRhino.orang.modules.grade.nameVi',
      icon: TrendingUp,
      descriptionKey: 'productPages.orangRhino.orang.modules.grade.description',
      features: [
        'NormalScale: Scales normally without restrictions',
        'EqualRatioScale: Reverses distortion in circular objects caused by difference between X,Y progressions',
        'ShareScale: Coordinate sole components (e.g., same stabilizer for three midsole sizes)',
        'SolidRange: Making coordinations in jumps',
        'UnfoldScale: Normal scale keeping perimeter length in women\'s high heel products',
        'UnfoldSolidScale: Coordination of women\'s sole heels while maintaining perimeter length',
        'GlobalThickness: Maintains sole and sidewall thicknesses across all sizes',
        'SliperParameters: Defines dividing line so sole and last can be scaled with different progressions',
        'TwoGroupSurfaces: Used for locking uppers or any object through two groups of surfaces',
        'LockWidth: Locks width of seam allowances, designs, and other objects',
        'CodeReplace: Replaces code with layer number',
        'GradeData: Spreadsheet data and constraints',
        'Scale rules: Same thickness all sizes, Same height all sizes, 2x2 sizes'
      ]
    }
  ];

  // Ant3D features (Key Benefits)
  const ant3dFeatures = [
    {
      icon: Grid,
      titleKey: 'productPages.orangRhino.ant3d.features.modeling.title',
      descriptionKey: 'productPages.orangRhino.ant3d.features.modeling.description'
    },
    {
      icon: Zap,
      titleKey: 'productPages.orangRhino.ant3d.features.prototyping.title',
      descriptionKey: 'productPages.orangRhino.ant3d.features.prototyping.description'
    },
    {
      icon: FileText,
      titleKey: 'productPages.orangRhino.ant3d.features.documentation.title',
      descriptionKey: 'productPages.orangRhino.ant3d.features.documentation.description'
    },
    {
      icon: CheckCircle,
      titleKey: 'productPages.orangRhino.ant3d.features.quality.title',
      descriptionKey: 'productPages.orangRhino.ant3d.features.quality.description'
    }
  ];

  // Ant3D Functional Modules
  const ant3dModules = [
    {
      id: 'modeling',
      nameKey: 'productPages.orangRhino.ant3d.modules.modeling.name',
      nameViKey: 'productPages.orangRhino.ant3d.modules.modeling.nameVi',
      icon: Grid,
      descriptionKey: 'productPages.orangRhino.ant3d.modules.modeling.description',
      features: [
        'Advanced 3D modeling tools for footwear components',
        'Parametric design capabilities for flexible modifications',
        'Surface modeling for complex shoe geometries',
        'Integration with industry-standard CAD formats',
        'Real-time visualization and rendering'
      ]
    },
    {
      id: 'pattern',
      nameKey: 'productPages.orangRhino.ant3d.modules.pattern.name',
      nameViKey: 'productPages.orangRhino.ant3d.modules.pattern.nameVi',
      icon: Scissors,
      descriptionKey: 'productPages.orangRhino.ant3d.modules.pattern.description',
      features: [
        '2D pattern design and development',
        'Pattern grading and sizing tools',
        'Seam allowance management',
        'Pattern optimization for material efficiency',
        'Export to cutting machines and production systems'
      ]
    },
    {
      id: 'last',
      nameKey: 'productPages.orangRhino.ant3d.modules.last.name',
      nameViKey: 'productPages.orangRhino.ant3d.modules.last.nameVi',
      icon: Footprints,
      descriptionKey: 'productPages.orangRhino.ant3d.modules.last.description',
      features: [
        'Digital last creation and modification',
        'Last grading across multiple sizes',
        'Anatomical accuracy and comfort analysis',
        'Last library management',
        'Compatibility with physical last manufacturing'
      ]
    },
    {
      id: 'upper',
      nameKey: 'productPages.orangRhino.ant3d.modules.upper.name',
      nameViKey: 'productPages.orangRhino.ant3d.modules.upper.nameVi',
      icon: Package,
      descriptionKey: 'productPages.orangRhino.ant3d.modules.upper.description',
      features: [
        'Upper design and development tools',
        '3D to 2D pattern flattening',
        'Upper assembly and stitching simulation',
        'Material properties and stretch analysis',
        'Design validation and fit testing'
      ]
    },
    {
      id: 'sole',
      nameKey: 'productPages.orangRhino.ant3d.modules.sole.name',
      nameViKey: 'productPages.orangRhino.ant3d.modules.sole.nameVi',
      icon: Layers,
      descriptionKey: 'productPages.orangRhino.ant3d.modules.sole.description',
      features: [
        'Sole design and engineering',
        'Multi-layer sole construction',
        'Tread pattern design',
        'Sole grading and sizing',
        'Integration with Orang-Rhino for advanced sole features'
      ]
    },
    {
      id: 'prototyping',
      nameKey: 'productPages.orangRhino.ant3d.modules.prototyping.name',
      nameViKey: 'productPages.orangRhino.ant3d.modules.prototyping.nameVi',
      icon: Zap,
      descriptionKey: 'productPages.orangRhino.ant3d.modules.prototyping.description',
      features: [
        'Rapid prototyping workflows',
        '3D printing preparation and optimization',
        'Virtual prototyping and testing',
        'Prototype documentation and versioning',
        'Cost estimation and material planning'
      ]
    },
    {
      id: 'manufacturing',
      nameKey: 'productPages.orangRhino.ant3d.modules.manufacturing.name',
      nameViKey: 'productPages.orangRhino.ant3d.modules.manufacturing.nameVi',
      icon: Factory,
      descriptionKey: 'productPages.orangRhino.ant3d.modules.manufacturing.description',
      features: [
        'Production-ready file generation',
        'Manufacturing documentation and specifications',
        'Quality control and inspection tools',
        'Production workflow optimization',
        'Integration with manufacturing systems'
      ]
    },
    {
      id: 'manual',
      nameKey: 'productPages.orangRhino.ant3d.modules.manual.name',
      nameViKey: 'productPages.orangRhino.ant3d.modules.manual.nameVi',
      icon: BookOpen,
      descriptionKey: 'productPages.orangRhino.ant3d.modules.manual.description',
      features: []
    }
  ];

  // Gallery videos
  const galleryVideos = [
    // Ant3D videos
    {
      id: 6,
      title: 'Ant3D Video 1',
      videoUrl: 'https://www.youtube.com/watch?v=_bdZEHVF-8M',
      product: 'ant3d'
    },
    {
      id: 7,
      title: 'Ant3D Video 2',
      videoUrl: 'https://www.youtube.com/watch?v=zPl6PeT78ok',
      product: 'ant3d'
    },
    {
      id: 8,
      title: 'Ant3D Video 3',
      videoUrl: 'https://www.youtube.com/watch?v=Gbm6LLCsM5c',
      product: 'ant3d'
    },
    {
      id: 9,
      title: 'Ant3D Video 4',
      videoUrl: 'https://www.youtube.com/watch?v=iOQGSlotrE4',
      product: 'ant3d'
    },
    {
      id: 10,
      title: 'Ant3D Video 5',
      videoUrl: 'https://www.youtube.com/watch?v=1ajo8GzrYVY',
      product: 'ant3d'
    },
    // Orang videos
    {
      id: 4,
      title: 'Orang-Rhino Demo',
      videoUrl: 'https://www.youtube.com/watch?v=Wzgo0FFX2Hg&pp=0gcJCZEKAYcqIYzv',
      product: 'orang'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Giới thiệu chung */}
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col">
            {/* Text Content - Top */}
            <div className="text-center mb-10 max-w-4xl mx-auto">
              <div className="inline-block px-5 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 text-orange-600 border border-orange-200 shadow-sm">
                {t('productPages.orangRhino.hero.badge')}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-800">
                {t('productPages.orangRhino.hero.title')}
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                {t('productPages.orangRhino.hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-500 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  {t('productPages.orangRhino.hero.contactButton')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-orange-300 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                >
                  <Download className="w-5 h-5 mr-2" />
                  {t('productPages.orangRhino.hero.downloadButton')}
                </Link>
              </div>
            </div>
            
            {/* Main Banner Video */}
            <div className="relative max-w-5xl mx-auto w-full mt-6">
              <div className="relative w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-xl border-2 border-white/50">
                <iframe
                  src="https://www.youtube.com/embed/AL0di7yN3MA?rel=0&autoplay=1&mute=1&loop=1&playlist=AL0di7yN3MA&controls=0&modestbranding=1"
                  title="Orang-Rhino Main Banner Video"
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs Section */}
      <section className="py-8 bg-white/60 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-3">
            <button
              onClick={() => setSelectedProduct('orang')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedProduct === 'orang'
                  ? 'bg-orange-400 text-white shadow-md scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {(() => {
                const title = t('productPages.orangRhino.hero.title');
                const parts = title.split(' & ');
                return parts[0] || 'Orang-Rhino';
              })()}
            </button>
            <button
              onClick={() => setSelectedProduct('ant3d')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedProduct === 'ant3d'
                  ? 'bg-orange-400 text-white shadow-md scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {(() => {
                const title = t('productPages.orangRhino.hero.title');
                const parts = title.split(' & ');
                return parts[1] || 'Ant3D';
              })()}
            </button>
          </div>
        </div>
      </section>

      {/* Orang-Rhino Product Section */}
      {selectedProduct === 'orang' && (
        <>
          {/* Overview Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  {t('productPages.orangRhino.orang.title')}
                </h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
                  {t('productPages.orangRhino.orang.description1')}
                </p>
                <p className="text-base text-gray-700 max-w-4xl mx-auto">
                  {t('productPages.orangRhino.orang.description2')} <span className="font-bold text-orange-400">60%</span> {t('productPages.orangRhino.orang.description3')}
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
                <div className="bg-gradient-to-br from-orange-50/80 to-amber-50/80 rounded-2xl p-6 border border-orange-100/50 hover:shadow-md transition-all">
                  <div className="text-orange-400 mb-3">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{t('productPages.orangRhino.orang.benefits.timeReduction.title')}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{t('productPages.orangRhino.orang.benefits.timeReduction.description')}</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50/80 to-amber-50/80 rounded-2xl p-6 border border-orange-100/50 hover:shadow-md transition-all">
                  <div className="text-orange-400 mb-3">
                    <Package className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{t('productPages.orangRhino.orang.benefits.personalized.title')}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{t('productPages.orangRhino.orang.benefits.personalized.description')}</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50/80 to-amber-50/80 rounded-2xl p-6 border border-orange-100/50 hover:shadow-md transition-all">
                  <div className="text-orange-400 mb-3">
                    <Gauge className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{t('productPages.orangRhino.orang.benefits.moldTime.title')}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{t('productPages.orangRhino.orang.benefits.moldTime.description')}</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50/80 to-amber-50/80 rounded-2xl p-6 border border-orange-100/50 hover:shadow-md transition-all">
                  <div className="text-orange-400 mb-3">
                    <Settings className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{t('productPages.orangRhino.orang.benefits.modernTech.title')}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{t('productPages.orangRhino.orang.benefits.modernTech.description')}</p>
                </div>
              </div>

              {/* Video Section */}
              <div className="mb-12">
                <div className="relative w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/AL0di7yN3MA?rel=0&autoplay=1&mute=1&loop=1&playlist=AL0di7yN3MA&controls=0&modestbranding=1"
                    title="Orang-Rhino Overview Video"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Functional Modules Section */}
          <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                  {t('productPages.orangRhino.orang.modules.title')}
                </h2>
                <p className="text-lg text-gray-600">
                  {t('productPages.orangRhino.orang.modules.subtitle')}
                </p>
              </div>

              {/* Module Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                <button
                  onClick={() => setSelectedModule('overview')}
                  className={`px-5 py-2.5 rounded-xl font-semibold transition-all text-sm ${
                    selectedModule === 'overview'
                      ? 'bg-orange-400 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {t('productPages.orangRhino.orang.modules.overview')}
                </button>
                {orangModules.map((module) => {
                  const IconComponent = module.icon;
                  return (
                    <button
                      key={module.id}
                      onClick={() => setSelectedModule(module.id)}
                      className={`px-5 py-2.5 rounded-xl font-semibold transition-all flex items-center gap-2 text-sm ${
                        selectedModule === module.id
                          ? 'bg-orange-400 text-white shadow-md'
                          : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      {t(module.nameKey)}
                    </button>
                  );
                })}
              </div>

              {/* Module Content */}
              {selectedModule === 'overview' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {orangModules.map((module) => {
                    const IconComponent = module.icon;
                    return (
                      <div
                        key={module.id}
                        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer hover:border-orange-200"
                        onClick={() => setSelectedModule(module.id)}
                      >
                        <div className="mb-4 flex items-center gap-3">
                          <div className="text-orange-400">
                            <IconComponent className="w-9 h-9" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-800">{t(module.nameKey)}</h3>
                            <p className="text-xs text-gray-500">{t(module.nameViKey)}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{t(module.descriptionKey)}</p>
                      </div>
                    );
                  })}
                </div>
              )}

              {selectedModule !== 'overview' && orangModules.map((module) => {
                if (selectedModule !== module.id) return null;
                const IconComponent = module.icon;
                return (
                  <div key={module.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-orange-400">
                        <IconComponent className="w-11 h-11" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{t(module.nameKey)}</h3>
                        <p className="text-base text-gray-500">{t(module.nameViKey)}</p>
                      </div>
                    </div>
                    <p className="text-base text-gray-700 mb-6 leading-relaxed">{t(module.descriptionKey)}</p>
                    {module.features && module.features.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {module.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-gradient-to-br from-orange-50/60 to-amber-50/60 rounded-xl border border-orange-100/50"
                        >
                          <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700 text-sm leading-relaxed">{feature}</p>
                        </div>
                      ))}
                    </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </>
      )}

      {/* Ant3D Product Section */}
      {selectedProduct === 'ant3d' && (
        <>
          {/* Overview Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  {t('productPages.orangRhino.ant3d.title')}
                </h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
                  {t('productPages.orangRhino.ant3d.description')}
                </p>
                <p className="text-base text-gray-700 max-w-4xl mx-auto">
                  {t('productPages.orangRhino.ant3d.description2')}
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
                {ant3dFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-orange-50/80 to-amber-50/80 rounded-2xl p-6 border border-orange-100/50 hover:shadow-md transition-all"
                    >
                      <div className="text-orange-400 mb-3">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {t(feature.titleKey)}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {t(feature.descriptionKey)}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Video Section */}
              <div className="mb-12">
                <div className="relative w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/p__vUPtovtc?rel=0&autoplay=1&mute=1&loop=1&playlist=p__vUPtovtc&controls=0&modestbranding=1"
                    title="Ant3D Video"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Functional Modules Section */}
          <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                  {t('productPages.orangRhino.ant3d.modules.title')}
                </h2>
                <p className="text-lg text-gray-600">
                  {t('productPages.orangRhino.ant3d.modules.subtitle')}
                </p>
              </div>

              {/* Module Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                <button
                  onClick={() => setSelectedModule('overview')}
                  className={`px-5 py-2.5 rounded-xl font-semibold transition-all text-sm ${
                    selectedModule === 'overview'
                      ? 'bg-orange-400 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {t('productPages.orangRhino.ant3d.modules.overview')}
                </button>
                {ant3dModules.map((module) => {
                  const IconComponent = module.icon;
                  return (
                    <button
                      key={module.id}
                      onClick={() => setSelectedModule(module.id)}
                      className={`px-5 py-2.5 rounded-xl font-semibold transition-all flex items-center gap-2 text-sm ${
                        selectedModule === module.id
                          ? 'bg-orange-400 text-white shadow-md'
                          : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      {t(module.nameKey) || module.nameKey.split('.').pop()}
                    </button>
                  );
                })}
              </div>

              {/* Module Content */}
              {selectedModule === 'overview' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {ant3dModules.map((module) => {
                    const IconComponent = module.icon;
                    return (
                      <div
                        key={module.id}
                        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer hover:border-orange-200"
                        onClick={() => setSelectedModule(module.id)}
                      >
                        <div className="mb-4 flex items-center gap-3">
                          <div className="text-orange-400">
                            <IconComponent className="w-9 h-9" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-800">{t(module.nameKey) || module.nameKey.split('.').pop()}</h3>
                            <p className="text-xs text-gray-500">{t(module.nameViKey) || module.nameViKey.split('.').pop()}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{t(module.descriptionKey) || module.descriptionKey.split('.').pop()}</p>
                      </div>
                    );
                  })}
                </div>
              )}

              {selectedModule !== 'overview' && ant3dModules.map((module) => {
                if (selectedModule !== module.id) return null;
                const IconComponent = module.icon;
                
                // Special rendering for manual module
                if (module.id === 'manual') {
                  return (
                    <div key={module.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="text-orange-400">
                          <IconComponent className="w-11 h-11" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">Hướng dẫn sử dụng Ant3D</h3>
                          <p className="text-base text-gray-500">Ant3D Digital Biting Software Instruction Manual</p>
                        </div>
                      </div>

                      {/* 1. Introduction Section */}
                      <section className="mb-10">
                        <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <Info className="w-6 h-6 text-orange-400" />
                          1. Giới thiệu phần mềm
                        </h4>
                        <div className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 rounded-xl p-6 border border-orange-100/50 mb-4">
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            Ant3D là công cụ xử lý kỹ thuật số chuyên nghiệp được phát triển đặc biệt cho quy trình in 3D kim loại, 
                            chủ yếu được sử dụng để tăng cường kết cấu và tối ưu hóa cấu trúc của mô hình 3D trước khi in, 
                            cải thiện hiệu ứng bề mặt và hiệu suất in của sản phẩm.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            <div className="bg-white/80 rounded-lg p-4">
                              <h5 className="font-semibold text-gray-800 mb-2">Chức năng kỹ thuật số</h5>
                              <p className="text-sm text-gray-600">Hỗ trợ ánh xạ chính xác các mẫu kỹ thuật số như grayscale textures, bite drafts lên bề mặt mô hình 3D</p>
                            </div>
                            <div className="bg-white/80 rounded-lg p-4">
                              <h5 className="font-semibold text-gray-800 mb-2">Thêm lỗ kim loại</h5>
                              <p className="text-sm text-gray-600">Cho phép người dùng nhanh chóng sắp xếp các lỗ thoát khí trên bề mặt mô hình</p>
                            </div>
                            <div className="bg-white/80 rounded-lg p-4">
                              <h5 className="font-semibold text-gray-800 mb-2">Xử lý nhẹ</h5>
                              <p className="text-sm text-gray-600">Giảm hiệu quả tiêu thụ vật liệu tổng thể thông qua tối ưu hóa hình học</p>
                            </div>
                          </div>
                        </div>
                      </section>

                      {/* 2. Operating Environment & Installation */}
                      <section className="mb-10">
                        <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <Monitor className="w-6 h-6 text-orange-400" />
                          2. Môi trường hoạt động và hướng dẫn cài đặt
                        </h4>
                        <div className="space-y-4">
                          <div className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 rounded-xl p-6 border border-blue-100/50">
                            <h5 className="font-semibold text-gray-800 mb-3">Môi trường hoạt động</h5>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span><strong>RHINO 7</strong> (SR16)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span><strong>RHINO 8</strong> (SR17)</span>
                              </li>
                            </ul>
                          </div>
                          <div className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 rounded-xl p-6 border border-green-100/50">
                            <h5 className="font-semibold text-gray-800 mb-3">Cấu hình khuyến nghị</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-gray-600 mb-1"><strong>OS:</strong> Windows 10/11</p>
                                <p className="text-gray-600 mb-1"><strong>Processor:</strong> INTEL CORE i7-14700K hoặc AMD RYZEN 7 9700X</p>
                                <p className="text-gray-600 mb-1"><strong>RAM:</strong> 64GB RAM</p>
                                <p className="text-gray-600"><strong>Graphics:</strong> NVIDIA GEFORCE GTX 5060ti 16GB</p>
                              </div>
                              <div>
                                <p className="text-gray-600 mb-1"><strong>Cấu hình tối thiểu:</strong></p>
                                <p className="text-gray-600 mb-1">OS: Windows 10</p>
                                <p className="text-gray-600 mb-1">Processor: INTEL CORE i5-12600KF hoặc AMD RYZEN 5 7500F</p>
                                <p className="text-gray-600 mb-1">Memory: 32GB RAM</p>
                                <p className="text-gray-600">Graphics: NVIDIA GEFORCE GTX 3060</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 rounded-xl p-6 border border-purple-100/50">
                            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                              <InstallIcon className="w-5 h-5" />
                              Hướng dẫn cài đặt
                            </h5>
                            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                              <li>Đóng tất cả phần mềm Rhino</li>
                              <li>Chạy gói cài đặt Ant3D</li>
                              <li>Hoàn tất cài đặt</li>
                            </ol>
                          </div>
                        </div>
                      </section>

                      {/* 3. Software Interface and Functions */}
                      <section className="mb-10">
                        <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <Settings className="w-6 h-6 text-orange-400" />
                          3. Giao diện phần mềm và mô tả chức năng
                        </h4>
                        
                        {/* Attach Texture to Mesh */}
                        <div className="mb-6 bg-gradient-to-br from-orange-50/60 to-amber-50/60 rounded-xl p-6 border border-orange-100/50">
                          <h5 className="font-semibold text-lg text-gray-800 mb-3">Gắn kết cấu lên mesh</h5>
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            Chức năng này được sử dụng để gắn chính xác các kết cấu kỹ thuật số như grayscale maps và black-and-white drafts 
                            lên bề mặt của mô hình mesh tam giác để tạo hiệu ứng biting trực quan.
                          </p>
                          <div className="bg-white/80 rounded-lg p-4 mb-4">
                            <h6 className="font-semibold text-gray-800 mb-2">Các phương pháp mở rộng:</h6>
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="bg-orange-100/50">
                                    <th className="px-4 py-2 text-left">Phương pháp</th>
                                    <th className="px-4 py-2 text-left">Mô tả</th>
                                    <th className="px-4 py-2 text-left">Đặc điểm</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="px-4 py-2 font-medium">UV unfolding</td>
                                    <td className="px-4 py-2">Gọi phương pháp UV unwrap tích hợp của Rhino</td>
                                    <td className="px-4 py-2">Phù hợp với mô hình có độ cong nhỏ</td>
                                  </tr>
                                  <tr className="bg-white/50">
                                    <td className="px-4 py-2 font-medium">Projection unfolds</td>
                                    <td className="px-4 py-2">"Làm phẳng" mô hình trực tiếp lên mặt phẳng 2D theo hướng view</td>
                                    <td className="px-4 py-2">Dễ vận hành, phù hợp với mô hình phẳng hoặc vi bề mặt</td>
                                  </tr>
                                  <tr>
                                    <td className="px-4 py-2 font-medium">SQU expands</td>
                                    <td className="px-4 py-2">Sử dụng thuật toán SQU để tự động mở rộng mô hình</td>
                                    <td className="px-4 py-2">Kết quả mở rộng đều đặn và có thể kiểm soát</td>
                                  </tr>
                                  <tr className="bg-white/50">
                                    <td className="px-4 py-2 font-medium">Default (Enter)</td>
                                    <td className="px-4 py-2">Sử dụng trực tiếp thông tin UV mà mô hình đã có</td>
                                    <td className="px-4 py-2">Nhanh và hiệu quả</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        {/* Edit Textures */}
                        <div className="mb-6 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 rounded-xl p-6 border border-blue-100/50">
                          <h5 className="font-semibold text-lg text-gray-800 mb-3">Chỉnh sửa kết cấu</h5>
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            Cửa sổ "Edit Texture" được sử dụng để điều chỉnh vị trí, tỷ lệ, góc quay và các tham số khác của texture map đã gắn.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white/80 rounded-lg p-4">
                              <h6 className="font-semibold text-gray-800 mb-2">Vị trí (Position)</h6>
                              <p className="text-sm text-gray-600">X/Y: Điều khiển độ lệch vị trí của texture trong hệ tọa độ 2D</p>
                            </div>
                            <div className="bg-white/80 rounded-lg p-4">
                              <h6 className="font-semibold text-gray-800 mb-2">Tỷ lệ (Scale)</h6>
                              <p className="text-sm text-gray-600">X/Y: Điều khiển tỷ lệ của pattern texture theo hướng X và Y</p>
                            </div>
                            <div className="bg-white/80 rounded-lg p-4">
                              <h6 className="font-semibold text-gray-800 mb-2">Xoay (Rotate)</h6>
                              <p className="text-sm text-gray-600">Góc: Nhập giá trị góc theo độ để điều khiển hướng xoay tổng thể</p>
                            </div>
                            <div className="bg-white/80 rounded-lg p-4">
                              <h6 className="font-semibold text-gray-800 mb-2">Bước (Step length)</h6>
                              <p className="text-sm text-gray-600">Điều khiển bước thay đổi của mỗi nút điều chỉnh tinh</p>
                            </div>
                          </div>
                        </div>

                        {/* Mold Air Hole */}
                        <div className="mb-6 bg-gradient-to-br from-green-50/60 to-emerald-50/60 rounded-xl p-6 border border-green-100/50">
                          <h5 className="font-semibold text-lg text-gray-800 mb-3">Lỗ khí khuôn</h5>
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            Chức năng "Mold Air Hole" được sử dụng để tự động hoặc thủ công tạo các lỗ trong khu vực được chỉ định của mô hình, 
                            được sử dụng rộng rãi để thoát khí, tản nhiệt hoặc hỗ trợ định hình vật liệu.
                          </p>
                          <div className="bg-white/80 rounded-lg p-4 mb-4">
                            <h6 className="font-semibold text-gray-800 mb-2">Cấu trúc lỗ khí:</h6>
                            <div className="space-y-2 text-sm text-gray-700">
                              <div className="flex items-start gap-2">
                                <span className="font-medium">L1:</span>
                                <span>Đường kính, Chiều dài, Độ sâu chèn, Hướng (pháp tuyến hoặc mặt phẳng tham chiếu)</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <span className="font-medium">L2:</span>
                                <span>Hợp nhất, Sắp xếp lại, Chiều dài</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <span className="font-medium">L3:</span>
                                <span>Đường kính, Hướng, Chiều dài (mở rộng đến bề mặt mục tiêu)</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Lightweight Features */}
                        <div className="mb-6 bg-gradient-to-br from-purple-50/60 to-pink-50/60 rounded-xl p-6 border border-purple-100/50">
                          <h5 className="font-semibold text-lg text-gray-800 mb-3">Tính năng nhẹ</h5>
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            Chức năng Lightweight giảm trọng lượng bằng cách tạo cấu trúc khung lục giác tổ ong bên trong mô hình 
                            và thực hiện phép toán Boolean với mô hình gốc để giảm trọng lượng trong khi vẫn giữ đủ độ bền.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white/80 rounded-lg p-4">
                              <h6 className="font-semibold text-gray-800 mb-2">Cài đặt toàn cục</h6>
                              <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Đường kính lỗ</li>
                                <li>• Độ dày tường</li>
                                <li>• Độ dày đáy</li>
                              </ul>
                            </div>
                            <div className="bg-white/80 rounded-lg p-4">
                              <h6 className="font-semibold text-gray-800 mb-2">Cài đặt tường bên</h6>
                              <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Cắt tường bên</li>
                                <li>• Chiều rộng</li>
                                <li>• Chiều cao</li>
                                <li>• Độ dày tường</li>
                              </ul>
                            </div>
                            <div className="bg-white/80 rounded-lg p-4">
                              <h6 className="font-semibold text-gray-800 mb-2">Tùy chọn xuất</h6>
                              <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Xuất Mesh Face</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Bridging Function */}
                        <div className="mb-6 bg-gradient-to-br from-indigo-50/60 to-violet-50/60 rounded-xl p-6 border border-indigo-100/50">
                          <h5 className="font-semibold text-lg text-gray-800 mb-3">Chức năng cầu nối</h5>
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            Tính năng này cung cấp cầu nối trao đổi dữ liệu hai chiều giữa Rhino và hai nền tảng bên ngoài: Rizom và Materialise.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white/80 rounded-lg p-4">
                              <h6 className="font-semibold text-gray-800 mb-2">Rhino và Rizom</h6>
                              <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Xuất sang Rizom</li>
                                <li>• Nhập từ Rizom</li>
                                <li>• Đặt lại Rizom</li>
                                <li>• Đường dẫn cài đặt Rizom</li>
                              </ul>
                            </div>
                            <div className="bg-white/80 rounded-lg p-4">
                              <h6 className="font-semibold text-gray-800 mb-2">Rhino và Materialise</h6>
                              <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Xuất sang Materialise</li>
                                <li>• Nhập từ Materialise</li>
                                <li>• Đặt lại Materialise</li>
                                <li>• Đường dẫn cài đặt Materialise</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </section>

                      {/* 4. Handling Abnormal Situations */}
                      <section className="mb-10">
                        <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <AlertTriangle className="w-6 h-6 text-orange-400" />
                          4. Xử lý các tình huống bất thường
                        </h4>
                        <div className="space-y-4">
                          <div className="bg-gradient-to-br from-red-50/60 to-rose-50/60 rounded-xl p-6 border border-red-100/50">
                            <h5 className="font-semibold text-gray-800 mb-3">Lưu ý khi xuất file OBJ từ Rhino</h5>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                <span>Mesh export nên ở trạng thái "Fusion": Tránh lỗi texture mapping hoặc xử lý hậu kỳ do mesh bị ngắt kết nối</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                <span>Tắt tùy chọn "Use Rhino's X-axis as the Y-axis of OBJ" để tránh mô hình bị định hướng sai hoặc xoay trong phần mềm khác</span>
                              </li>
                            </ul>
                          </div>
                          <div className="bg-gradient-to-br from-yellow-50/60 to-amber-50/60 rounded-xl p-6 border border-yellow-100/50">
                            <h5 className="font-semibold text-gray-800 mb-3">Mô hình texture bị lệch hoặc "bay ra"</h5>
                            <p className="text-gray-700 mb-2">Nếu phát hiện mô hình có cạnh flash và toàn bộ "bay ra", vui lòng kiểm tra:</p>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                <span>Xem có vỏ thừa hoặc bộ phận lỏng lẻo không sử dụng trong mô hình không</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                <span>Xem mô hình có mặt cô lập không</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                <span>Xem mô hình gốc có thực hiện phép toán Boolean không chuẩn không, dẫn đến bất thường về topology</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                <span>Xem quá trình mapping có bỏ sót mesh chính hoặc thông tin map không được lưu đúng không</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </section>
                    </div>
                  );
                }
                
                // Default rendering for other modules
                return (
                  <div key={module.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-orange-400">
                        <IconComponent className="w-11 h-11" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{t(module.nameKey) || module.nameKey.split('.').pop()}</h3>
                        <p className="text-base text-gray-500">{t(module.nameViKey) || module.nameViKey.split('.').pop()}</p>
                      </div>
                    </div>
                    <p className="text-base text-gray-700 mb-6 leading-relaxed">{t(module.descriptionKey) || module.descriptionKey.split('.').pop()}</p>
                    {module.features && module.features.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {module.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-gradient-to-br from-orange-50/60 to-amber-50/60 rounded-xl border border-orange-100/50"
                        >
                          <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700 text-sm leading-relaxed">{feature}</p>
                        </div>
                      ))}
                    </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </>
      )}

      {/* Gallery Showcase Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
              {t('productPages.orangRhino.gallery.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('productPages.orangRhino.gallery.subtitle')}
            </p>
          </div>
          
          {/* Video Gallery - Filtered by selected product */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {galleryVideos
              .filter((video) => video.product === selectedProduct || video.product === 'both')
              .map((video) => {
                const ytId = getYouTubeId(video.videoUrl);
                const isYouTube = Boolean(ytId) && (video.videoUrl.includes('youtube.com') || video.videoUrl.includes('youtu.be'));

                return (
                  <div
                    key={video.id}
                    className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden group cursor-pointer border-2 border-gray-200 hover:border-orange-300 transition-all shadow-sm hover:shadow-md"
                    onClick={() => setSelectedVideo(isYouTube ? `yt:${ytId}` : video.videoUrl)}
                  >
                    {isYouTube ? (
                      <img
                        src={`https://img.youtube.com/vi/${ytId}/hqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <video
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                      >
                        <source src={video.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all">
                        <Play className="w-8 h-8 text-orange-500 ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Request Demo/Contact Section */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {selectedProduct === 'orang' 
                  ? t('productPages.orangRhino.gallery.requestDemo.titleOrang')
                  : t('productPages.orangRhino.gallery.requestDemo.titleAnt3d')}
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                {t('productPages.orangRhino.gallery.requestDemo.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-500 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  {t('productPages.orangRhino.gallery.requestDemo.button')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-orange-300 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t('productPages.orangRhino.gallery.requestDemo.contactButton')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all"
            >
              <X className="w-6 h-6" />
            </button>
            {selectedVideo.startsWith('yt:') ? (
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.slice(3)}?rel=0&autoplay=1&mute=1&loop=1&playlist=${selectedVideo.slice(3)}&controls=0&modestbranding=1`}
                title="Video"
                className="w-full h-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                className="w-full h-full object-contain"
                controls
                autoPlay
                playsInline
              >
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-100 via-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
            {t('productPages.orangRhino.cta.title')}
          </h2>
          <h3 className="text-2xl lg:text-3xl font-bold text-orange-500 mb-6">
            {t('productPages.orangRhino.cta.subtitle')}
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('productPages.orangRhino.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-500 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-base"
            >
              {t('productPages.orangRhino.hero.contactButton')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-orange-300 text-orange-600 font-semibold rounded-lg hover:bg-white transition-all duration-300 text-base bg-white/80 backdrop-blur-sm"
            >
              <Download className="w-5 h-5 mr-2" />
              {t('productPages.orangRhino.hero.downloadButton')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrangRhinoProduct;
