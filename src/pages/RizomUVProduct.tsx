import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle,
  Download,
  ArrowRight,
  Settings,
  Zap,
  Grid,
  Monitor,
  Cpu,
  Globe,
  Code,
  Star,
  Sparkles,
  Wand2,
  BarChart3,
  Lock,
  Eye,
  Ruler,
  ChevronDown,
  HelpCircle
} from 'lucide-react';

const RizomUVProduct: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<'virtual' | 'real'>('virtual');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [selectedHighlight, setSelectedHighlight] = useState<number>(0);
  const [selectedRealHighlight, setSelectedRealHighlight] = useState<number>(0);

  // Virtual Spaces Features
  const virtualSpacesFeatures = [
    {
      icon: Lock,
      title: 'Unwrap with Constraints',
      description: 'Set rules that guide the unwrapping process, ensuring your UV maps are perfectly aligned with your creative vision.',
      color: 'from-purple-500 to-pink-500',
      video: '/videos/rizomuv/Unwrap-With-Constriants.webm'
    },
    {
      icon: Zap,
      title: 'Real-Time Optimize',
      description: 'Instantly adjust and optimize UV maps as you work. Say goodbye to tedious manual adjustments and hello to flawless, efficient texturing.',
      color: 'from-blue-500 to-cyan-500',
      video: '/videos/rizomuv/Real-time-Optimise.webm'
    },
    {
      icon: Cpu,
      title: 'GPU Packing',
      description: 'Group related islands together and lock them in place to maintain their orientation and proximity, ensuring logical and efficient texture space usage.',
      color: 'from-green-500 to-emerald-500',
      video: '/videos/rizomuv/Packing-with-Groups-Shape-Locking.webm'
    },
    {
      icon: Sparkles,
      title: 'Similar',
      description: 'Instantly identify and group UV islands that share similar shapes and sizes, making your texturing process more efficient and organized.',
      color: 'from-orange-500 to-red-500',
      video: '/videos/rizomuv/Similar.webm'
    },
    {
      icon: Settings,
      title: 'Swiss-army Weld',
      description: 'Complete toolkit for welding with distance thresholds, filter selections, weld within or across islands, and automatic unwrap updates after merging.',
      color: 'from-indigo-500 to-purple-500',
      video: '/videos/rizomuv/Weld-with-Welding-Align.webm'
    },
    {
      icon: Wand2,
      title: 'Magic Wand',
      description: 'Quickly select UV islands or polygons based on similarity, making it a breeze to isolate areas for editing or applying specific textures.',
      color: 'from-yellow-500 to-orange-500',
      video: '/videos/rizomuv/Magic-Wand.webm'
    },
    {
      icon: BarChart3,
      title: 'Gradient – Histogram',
      description: 'Visualize and adjust the distribution of your UV map\'s density in real-time, ensuring optimal texture detail and consistency across your model.',
      color: 'from-teal-500 to-blue-500',
      video: null // No video available
    }
  ];

  // Real Space Features
  const realSpaceFeatures = [
    {
      icon: HelpCircle,
      title: 'Why Real Space?',
      description: 'RizomUV Real Space is designed for professionals creating real-world products. It maintains real-world scale and measurements, ensuring your flattened patterns are accurate for physical manufacturing, product design, architecture, and textile applications.',
      color: 'from-indigo-600 to-purple-600',
      video: null,
      image: '/images/rizomuv/One-meter-one-meter-1536x824.png'
    },
    {
      icon: Ruler,
      title: 'Flattening',
      description: 'Create accurate UV maps that maintain real-world scale and measurements for physical products. The flattening process preserves dimensions and ensures patterns are ready for manufacturing.',
      color: 'from-blue-600 to-indigo-600',
      video: '/videos/rizomuv/Flattening.webm',
      image: null
    },
    {
      icon: Eye,
      title: 'Stretch Analysis',
      description: 'Analyze and minimize distortion to ensure your patterns maintain their intended dimensions. Visualize stretch distribution across your flattened mesh to identify and correct areas of distortion.',
      color: 'from-green-600 to-emerald-600',
      video: '/videos/rizomuv/Stretch-Analysis.webm',
      image: null
    },
    {
      icon: Lock,
      title: 'Constraints',
      description: 'Apply constraints to maintain specific measurements and relationships in your flattened patterns. Lock edges, angles, and distances to ensure your patterns meet exact specifications.',
      color: 'from-purple-600 to-pink-600',
      video: '/videos/rizomuv/Constraints.webm',
      image: null
    },
    {
      icon: Grid,
      title: 'Packing',
      description: 'Optimize material usage with intelligent packing algorithms designed for real-world manufacturing. Maximize efficiency while respecting real-world constraints and material limitations.',
      color: 'from-orange-600 to-red-600',
      video: '/videos/rizomuv/Packing.webm',
      image: null
    },
    {
      icon: Download,
      title: 'Exports',
      description: 'Export to industry-standard formats compatible with cutting machines and production systems. Support for DXF, PDF, and other formats used in manufacturing workflows.',
      color: 'from-teal-600 to-cyan-600',
      video: '/videos/rizomuv/Exports.webm',
      image: null
    }
  ];

  // System Requirements
  const systemRequirements = {
    windows: {
      minimum: {
        os: 'Windows 10 / 11 (64 bit)',
        ram: '4 GB RAM',
        graphics: '2 GB VRAM Graphics Card',
        directx: 'DirectX V.11',
        monitor: '1920×1080 Monitor'
      },
      recommended: {
        os: 'Windows 10 / 11 (64 bit)',
        ram: '16 GB RAM',
        graphics: '4 GB VRAM Graphics Card',
        directx: 'DirectX V.11',
        monitor: '1920×1080 Monitor'
      }
    },
    macos: {
      minimum: {
        os: 'macOS Big Sur 11 (or above)',
        ram: '8 GB RAM',
        graphics: '2 GB VRAM Graphics Card',
        monitor: '1920×1080 Monitor'
      },
      recommended: {
        os: 'macOS Big Sur 11 (or above)',
        ram: '16 GB RAM',
        graphics: '8 GB VRAM Graphics Card',
        monitor: '1920×1080 Monitor'
      }
    },
    linux: {
      minimum: {
        ram: '8 GB RAM',
        graphics: '4 GB VRAM Graphics Card',
        monitor: '1920×1080 Monitor'
      },
      recommended: {
        ram: '32 GB RAM',
        graphics: '16 GB VRAM Graphics Card',
        monitor: '1920×1080 Monitor'
      }
    }
  };

  // Testimonials
  const testimonials = [
    {
      name: 'Javier Perez',
      role: 'Lead Material Artist at PlayStation Studios Visual Arts & Instructor at Gnomon',
      quote: 'I was particularly drawn to RizomUV\'s advanced automatic unwrapping options and the ability to precisely control UV layouts.',
      link: 'Javier\'s portfolio'
    },
    {
      name: 'Ernesto Barroso',
      role: 'Associate Environment Artist – Blizzard Entertainment',
      quote: 'It\'s the best software for UVs right now. Its speed with shortcuts and to open islands is awesome. Also it\'s really complete in its field.',
      link: 'Artstation'
    },
    {
      name: 'Kim Gryun',
      role: 'Creative at Apple (as Contractor)',
      quote: 'My workflow as an artist can literally be divided into two eras: before and after discovering Rizom UV.',
      link: ''
    }
  ];

  // FAQ Data for Virtual Spaces
  const virtualSpacesFaqData = [
    {
      question: 'What is RizomUV Virtual Spaces?',
      answer: 'RizomUV Virtual Spaces is a powerful UV mapping software designed for 3D professionals in gaming, VFX, and animation. It provides a comprehensive toolset for creating optimized UV maps, making the UV unwrapping and layout process intuitive and efficient.'
    },
    {
      question: 'Who can benefit most from RizomUV Virtual Spaces?',
      answer: 'RizomUV is a cutting-edge UV mapping software that streamlines the unfolding and packing of UV maps for 3D models. It is designed to enhance efficiency and accuracy when creating UV maps. It is essential for texturing and detailing 3D objects in various industries, including video games, visual effects (VFX), animation, and product design. By leveraging advanced algorithms, RizomUV can dramatically reduce the time spent on UV mapping, offering rapid unwrapping, packing, and optimization capabilities.'
    },
    {
      question: 'What are the key features of RizomUV Virtual Spaces?',
      answer: 'Key features include: Automated Unwrapping - Quickly generates optimized UV maps with minimal manual adjustments. Packing Efficiency - Maximizes UV space with advanced packing algorithms. Distortion Control - Minimizes texture distortion with interactive tools. Seam Optimization - Places seams intelligently to maintain model integrity and visual quality.'
    },
    {
      question: 'What file formats does RizomUV Virtual Spaces support?',
      answer: 'RizomUV Virtual Spaces supports widely-used 3D file formats, including OBJ, FBX, and USD, making it compatible with most industry-standard software and seamless to integrate into your existing workflow.'
    },
    {
      question: 'Is RizomUV Virtual Spaces suitable for very large meshes (e.g. 2 million polygons or more)?',
      answer: 'Yes. RizomUV is built to handle large and dense meshes efficiently, including continuous meshes with several million polygons. Many users routinely unwrap meshes well beyond 2 million polygons, and in some cases over 10 million, depending on the project. Unwrapping and packing performance mainly depends on the mesh topology and cleanliness, the level of UV control and quality required, and the hardware configuration.'
    },
    {
      question: 'Can I switch between Real Space and Virtual Spaces in RizomUV?',
      answer: 'Yes, RizomUV allows you to switch between Real Space and Virtual Spaces, depending on your project\'s needs. This flexibility ensures you can adapt your workflow to both real-world scale projects and virtual environments. This is only possible if you have subscribed to a Real Space license. Users with a Virtual Spaces license cannot switch to Real Space without subscribing to a Real Space license separately.'
    },
    {
      question: 'Can I use RizomUV Virtual Spaces with other 3D software?',
      answer: 'Yes, you can use RizomUV Virtual Spaces with other 3D software! RizomUV is compatible with widely-used formats like OBJ, FBX, and USD, allowing smooth import and export of assets between RizomUV and other 3D applications, such as Blender, Maya, 3ds Max, and Cinema 4D.'
    },
    {
      question: 'Where can I find tutorials or documentation for RizomUV Virtual Spaces?',
      answer: 'At this time, we have not yet published official documentation. However, we offer a variety of resources to help you get started and improve your skills: Tutorials - You can access our comprehensive tutorials. Community - Join our Discord server for support, tips, and discussions with other users.'
    },
    {
      question: 'How can I contact support?',
      answer: 'For any technical issues or questions, you can submit a request via our Support Center.'
    },
    {
      question: 'What type of licenses are available for RizomUV Virtual Spaces?',
      answer: 'We offer several licensing options for RizomUV Virtual Spaces, including: Subscription - Flexible monthly or yearly plans. Perpetual (Indie only) - A one-time purchase for a lifetime license with optional paid upgrades, exclusively available to our Indie clients. We also provide academic licenses for students and institutions.'
    },
    {
      question: 'About the Perpetual Indie licenses',
      answer: 'A perpetual license allows you to run the software indefinitely. You will receive access to new releases for one year from the purchase date. The license itself doesn\'t expire, but support for the perpetual license will end after one year. A perpetual license lets you run the last release available before your support expires. After your perpetual license support expires, you can purchase monthly subscriptions (accumulate 12 consecutive months to obtain a new perpetual license) or buy a new perpetual license.'
    },
    {
      question: 'Are there Perpetual PRO licenses?',
      answer: 'At the moment, only Indie licenses are available as perpetual licenses, while PRO licenses are offered on a subscription basis only.'
    },
    {
      question: 'Can I assign more than one person to one license?',
      answer: 'Definitely not. Each user, whether an individual or a legal entity, must have one (1) valid license for the software. If your goal is to allow multiple people to use RizomUV simultaneously, we recommend using a floating license. A "Floating License" permits shared access to the software among multiple individual users within a single legal entity.'
    }
  ];

  // FAQ Data for Real Space
  const realSpaceFaqData = [
    {
      question: 'What is RizomUV Real Space?',
      answer: 'RizomUV Real Space is a precise mesh flattening tool designed for professionals creating real-world products. It creates accurate UV maps that maintain real-world scale and measurements, perfect for product design, architecture, textile manufacturing, and other industries where physical dimensions matter.'
    },
    {
      question: 'What is the difference between Real Space and Virtual Spaces?',
      answer: 'Real Space maintains real-world scale and measurements, ensuring that flattened patterns match physical dimensions exactly. This is essential for manufacturing, product design, and architecture. Virtual Spaces, on the other hand, is optimized for digital content like games, VFX, and animation where scale can be arbitrary and the focus is on texture quality and efficiency.'
    },
    {
      question: 'Is Real Space suitable for very large meshes (e.g. 2 million polygons or more)?',
      answer: 'Yes. RizomUV Real Space is built to handle large and dense meshes efficiently. The software can process meshes with several million polygons, making it suitable for complex architectural models, detailed product designs, and large-scale manufacturing patterns. Performance depends on mesh topology, the level of precision required, and your hardware configuration.'
    },
    {
      question: 'What file formats does RizomUV Real Space support?',
      answer: 'RizomUV Real Space supports widely-used 3D file formats including OBJ, FBX, and USD. For manufacturing workflows, it also supports export formats like DXF and PDF, which are commonly used with cutting machines and production systems.'
    },
    {
      question: 'Can I switch between Real Space and Virtual Spaces in RizomUV?',
      answer: 'Yes, RizomUV allows you to switch between Real Space and Virtual Spaces depending on your project\'s needs. This flexibility ensures you can adapt your workflow to both real-world scale projects and virtual environments. However, this is only possible if you have subscribed to a Real Space license. Users with a Virtual Spaces license cannot switch to Real Space without subscribing to a Real Space license separately.'
    },
    {
      question: 'How is UV unwrapping optimized for real-world scale?',
      answer: 'RizomUV Real Space uses specialized algorithms that preserve real-world measurements during the flattening process. The system maintains dimensional accuracy, minimizes distortion while respecting physical constraints, and ensures that patterns can be directly used for manufacturing without scaling adjustments.'
    },
    {
      question: 'What industries benefit the most from RizomUV Real Space?',
      answer: 'RizomUV Real Space is ideal for industries that require precise physical measurements: Product Design - Creating accurate patterns for physical products. Architecture - Flattening architectural elements while maintaining scale. Manufacturing - Generating production-ready patterns for cutting machines. Textile & Fashion - Creating accurate fabric patterns with precise measurements. Furniture Design - Developing patterns for upholstery and furniture components.'
    },
    {
      question: 'Can I use RizomUV Real Space with other 3D software?',
      answer: 'Yes, you can use RizomUV Real Space with other 3D software! RizomUV is compatible with widely-used formats like OBJ, FBX, and USD, allowing smooth import and export of assets between RizomUV and other 3D applications such as Blender, Maya, 3ds Max, Cinema 4D, and CAD software.'
    },
    {
      question: 'What type of licenses are available for RizomUV Real Space?',
      answer: 'We offer several licensing options for RizomUV Real Space, including: Subscription - Flexible monthly or yearly plans. Perpetual (Indie only) - A one-time purchase for a lifetime license with optional paid upgrades, exclusively available to our Indie clients. We also provide academic licenses for students and institutions.'
    },
    {
      question: 'Where can I find tutorials or documentation for RizomUV Real Space?',
      answer: 'At this time, we have not yet published official documentation. However, we offer a variety of resources to help you get started and improve your skills: Tutorials - You can access our comprehensive tutorials covering Real Space workflows. Community - Join our Discord server for support, tips, and discussions with other users working on real-world projects.'
    },
    {
      question: 'How can I contact support?',
      answer: 'For any technical issues or questions about RizomUV Real Space, you can submit a request via our Support Center. Our team is ready to help with questions about real-world scale workflows, manufacturing exports, and integration with your production pipeline.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center mb-10 max-w-4xl mx-auto">
            <div className="inline-block px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-white/30 shadow-sm">
              Professional UV Mapping Solution
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              RizomUV
            </h1>
            <p className="text-lg lg:text-xl mb-8 leading-relaxed opacity-90">
              Spend time on your art, not your UVs. Trusted UV mapping tool for indie developers and leading game studios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Try / Buy
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              {/* <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-white/50 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 bg-white/5 backdrop-blur-sm"
              >
                <Download className="w-5 h-5 mr-2" />
                Download
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* Mode Tabs Section */}
      <section className="py-8 bg-white/60 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-3">
            <button
              onClick={() => setSelectedMode('virtual')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                selectedMode === 'virtual'
                  ? 'bg-indigo-600 text-white shadow-md scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <Globe className="w-5 h-5" />
              Virtual Spaces
            </button>
            <button
              onClick={() => setSelectedMode('real')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                selectedMode === 'real'
                  ? 'bg-indigo-600 text-white shadow-md scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <Ruler className="w-5 h-5" />
              Real Space
            </button>
          </div>
        </div>
      </section>

      {/* Virtual Spaces Section */}
      {selectedMode === 'virtual' && (
        <>
          {/* Introduction Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  Virtual Spaces
                </h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Discover RizomUV Virtual Spaces, a trusted UV mapping tool for indie developers and leading game studios. 
                  Continuously enhanced through innovation and community feedback, RizomUV streamlines high-quality visual creation 
                  with precise, user-friendly solutions.
                </p>
              </div>

              {/* Key Features Grid
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {virtualSpacesFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  );
                })}
              </div> */}
            </div>
          </section>

          {/* Virtual Spaces Highlights Section */}
          <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                  Virtual Spaces Highlights
                </h2>
                <p className="text-lg text-gray-600">
                  Explore our key features through interactive video demonstrations
                </p>
              </div>

              {/* Video and Slider Bars Container */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Slider Bars - Left Side */}
                <div className="lg:col-span-1 space-y-2">
                  {virtualSpacesFeatures.map((feature, index) => {
                    const isSelected = selectedHighlight === index;
                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedHighlight(index)}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                          isSelected
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-indigo-300'
                        }`}
                      >
                        {/* Title Only */}
                        <span className={`font-medium text-sm ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                          {feature.title}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Video and Description - Right Side */}
                <div className="lg:col-span-2 space-y-4">
                  {/* Video Container */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="aspect-video bg-black relative">
                      {virtualSpacesFeatures[selectedHighlight].video ? (
                        <video
                          key={selectedHighlight}
                          src={virtualSpacesFeatures[selectedHighlight].video || ''}
                          controls
                          autoPlay
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            console.error('Video load error:', e);
                          }}
                        >
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center text-white">
                            <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
                            <p className="text-lg opacity-75">Video coming soon</p>
                            <p className="text-sm opacity-50 mt-2">{virtualSpacesFeatures[selectedHighlight].title}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {virtualSpacesFeatures[selectedHighlight].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Features & News */}
          <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                  Latest Features & News
                </h2>
                <p className="text-lg text-gray-600">
                  Read articles about RizomUV that range from updates and features, to its use within the 3D space.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'RizomUV 2025 – Release Features',
                    description: 'Discover the latest features and improvements in RizomUV 2025.',
                    image: '/images/rizomuv/rizom2025-1920-1080-768x432.webp',
                    link: 'https://www.rizomuv.com/feature/rizomuv-2025-whats-new/'
                  },
                  {
                    title: 'Interview: Where Passion Meets Pedagogy',
                    description: 'The 3D World of Diego Viegas - insights from a professional artist.',
                    image: '/images/rizomuv/torito-uvs.webp',
                    link: 'https://www.rizomuv.com/feature/where-passion-meets-pedagogy-the-3d-world-of-diego-viegas/'
                  },
                  {
                    title: 'Precision and Personality',
                    description: 'How Reza Mortazavi Reimagines the Objects We Know.',
                    image: '/images/rizomuv/reza-mortazavi-1.jpg',
                    link: 'https://www.rizomuv.com/feature/precision-and-personality-how-reza-mortazavi-reimagines-the-objects-we-know/'
                  },
                  {
                    title: 'From Sketches to Blockbusters',
                    description: 'Marco Gifuni on creature design, workflow mastery, and why he swears by RizomUV.',
                    image: '/images/rizomuv/Design-sans-titre-2.jpg',
                    link: 'https://www.rizomuv.com/feature/from-sketches-to-blockbusters-marco-gifuni-on-creature-design-workflow-mastery-and-why-he-swears-by-rizomuv/'
                  },
                  {
                    title: 'Interview with Gryun Kim – 3D Motion Designer & Art Director',
                    description: 'Exploring the creative process and workflow of a 3D motion designer.',
                    image: '/images/rizomuv/Cupcake_v003_Cupcake_Vol2_Making_v003_2023-05-24_09.43.19.webp',
                    link: 'https://www.rizomuv.com/feature/interview-with-gryun-kim-3d-motion-designer-art-director/'
                  }
                ].map((article, index) => (
                  <a
                    key={index}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group block"
                  >
                    <div className="aspect-video bg-gray-200 relative overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                        {article.title}
                      </h3>
                      {article.description && (
                        <p className="text-gray-600 text-sm">{article.description}</p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                  What Our Users Say
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 rounded-xl p-6 border border-indigo-100/50"
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
                    <div className="border-t border-indigo-200 pt-4">
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      {testimonial.link && (
                        <span className="text-sm text-indigo-600 mt-2 inline-block">
                          {testimonial.link} →
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Bridges Section
          <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                  Streamline Your UV Workflow with Bridges
                </h2>
                <p className="text-lg text-gray-600">
                  Easily transfer your models between RizomUV and your 3D software using one of the bridge plugins below
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {['Blender', 'Maya', '3ds Max', 'Cinema 4D', 'Houdini', 'Unreal Engine'].map((software, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all text-center"
                  >
                    <div className="text-2xl font-bold text-gray-700">{software}</div>
                  </div>
                ))}
              </div>
            </div>
          </section> */}
        </>
      )}

      {/* Real Space Section */}
      {selectedMode === 'real' && (
        <>
          {/* Introduction Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  Real Space
                </h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  RizomUV Real Space is a precise mesh flattening tool designed for professionals creating real-world products. 
                  Create accurate UV maps that maintain real-world scale and measurements, perfect for product design, architecture, and manufacturing.
                </p>
              </div>

              {/* Key Features Grid */}
              {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {realSpaceFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  );
                })}
              </div> */}
            </div>
          </section>

          {/* Real Space Highlights Section */}
          <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                  Real Space Highlights
                </h2>
                <p className="text-lg text-gray-600">
                  Explore our key features through interactive video demonstrations
                </p>
              </div>

              {/* Video and Slider Bars Container */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Slider Bars - Left Side */}
                <div className="lg:col-span-1 space-y-2">
                  {realSpaceFeatures.map((feature, index) => {
                    const isSelected = selectedRealHighlight === index;
                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedRealHighlight(index)}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                          isSelected
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-indigo-300'
                        }`}
                      >
                        {/* Title Only */}
                        <span className={`font-medium text-sm ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                          {feature.title}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Video and Description - Right Side */}
                <div className="lg:col-span-2 space-y-4">
                  {/* Video/Image Container */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="aspect-video bg-black relative">
                      {realSpaceFeatures[selectedRealHighlight].video ? (
                        <video
                          key={selectedRealHighlight}
                          src={realSpaceFeatures[selectedRealHighlight].video || ''}
                          controls
                          autoPlay
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            console.error('Video load error:', e);
                          }}
                        >
                          Your browser does not support the video tag.
                        </video>
                      ) : realSpaceFeatures[selectedRealHighlight].image ? (
                        <img
                          src={realSpaceFeatures[selectedRealHighlight].image || ''}
                          alt={realSpaceFeatures[selectedRealHighlight].title}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            console.error('Image load error:', e);
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center text-white">
                            {(() => {
                              const IconComponent = realSpaceFeatures[selectedRealHighlight].icon;
                              return <IconComponent className="w-16 h-16 mx-auto mb-4 opacity-50" />;
                            })()}
                            <p className="text-lg opacity-75">Video coming soon</p>
                            <p className="text-sm opacity-50 mt-2">{realSpaceFeatures[selectedRealHighlight].title}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {realSpaceFeatures[selectedRealHighlight].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Testimonials Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                  What Our Users Say
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 rounded-xl p-6 border border-indigo-100/50"
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
                    <div className="border-t border-indigo-200 pt-4">
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      {testimonial.link && (
                        <span className="text-sm text-indigo-600 mt-2 inline-block">
                          {testimonial.link} →
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases Section
          <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                  Real-World Applications
                </h2>
                <p className="text-lg text-gray-600">
                  Perfect for professionals working with physical products and real-world measurements
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Product Design',
                    description: 'Create accurate patterns for physical products with precise measurements and minimal distortion.',
                    icon: Package,
                    color: 'from-blue-500 to-indigo-500'
                  },
                  {
                    title: 'Architecture',
                    description: 'Flatten architectural elements while maintaining real-world scale and proportions.',
                    icon: Layers,
                    color: 'from-green-500 to-emerald-500'
                  },
                  {
                    title: 'Manufacturing',
                    description: 'Generate production-ready patterns optimized for cutting machines and material efficiency.',
                    icon: Settings,
                    color: 'from-orange-500 to-red-500'
                  },
                  {
                    title: 'Textile & Fashion',
                    description: 'Create accurate fabric patterns with precise measurements for clothing and accessories.',
                    icon: Grid,
                    color: 'from-purple-500 to-pink-500'
                  }
                ].map((useCase, index) => {
                  const IconComponent = useCase.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all"
                    >
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-6`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{useCase.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section> */}
        </>
      )}

      {/* System Requirements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
              System Requirements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Windows */}
            <div className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 rounded-xl p-6 border border-blue-100/50">
              <div className="flex items-center gap-3 mb-4">
                <Monitor className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">Windows</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Minimum</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• {systemRequirements.windows.minimum.os}</li>
                    <li>• {systemRequirements.windows.minimum.ram}</li>
                    <li>• {systemRequirements.windows.minimum.graphics}</li>
                    <li>• {systemRequirements.windows.minimum.directx}</li>
                    <li>• {systemRequirements.windows.minimum.monitor}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Recommended</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• {systemRequirements.windows.recommended.os}</li>
                    <li>• {systemRequirements.windows.recommended.ram}</li>
                    <li>• {systemRequirements.windows.recommended.graphics}</li>
                    <li>• {systemRequirements.windows.recommended.directx}</li>
                    <li>• {systemRequirements.windows.recommended.monitor}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* macOS */}
            <div className="bg-gradient-to-br from-gray-50/60 to-slate-50/60 rounded-xl p-6 border border-gray-100/50">
              <div className="flex items-center gap-3 mb-4">
                <Monitor className="w-8 h-8 text-gray-600" />
                <h3 className="text-xl font-bold text-gray-800">macOS</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Minimum</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• {systemRequirements.macos.minimum.os}</li>
                    <li>• {systemRequirements.macos.minimum.ram}</li>
                    <li>• {systemRequirements.macos.minimum.graphics}</li>
                    <li>• {systemRequirements.macos.minimum.monitor}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Recommended</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• {systemRequirements.macos.recommended.os}</li>
                    <li>• {systemRequirements.macos.recommended.ram}</li>
                    <li>• {systemRequirements.macos.recommended.graphics}</li>
                    <li>• {systemRequirements.macos.recommended.monitor}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Linux */}
            <div className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 rounded-xl p-6 border border-orange-100/50">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-8 h-8 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-800">Linux</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Minimum</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• {systemRequirements.linux.minimum.ram}</li>
                    <li>• {systemRequirements.linux.minimum.graphics}</li>
                    <li>• {systemRequirements.linux.minimum.monitor}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Recommended</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• {systemRequirements.linux.recommended.ram}</li>
                    <li>• {systemRequirements.linux.recommended.graphics}</li>
                    <li>• {systemRequirements.linux.recommended.monitor}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 mb-4">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about RizomUV
            </p>
          </div>

          <div className="space-y-4">
            {(selectedMode === 'virtual' ? virtualSpacesFaqData : realSpaceFaqData).map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                      openFAQ === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your UV Workflow?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            Join thousands of professionals who trust RizomUV for their UV mapping needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Try / Buy Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white/50 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RizomUVProduct;

