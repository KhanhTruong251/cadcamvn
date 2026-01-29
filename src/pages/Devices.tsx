import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Search, 
  Grid, 
  List, 
  ChevronRight
} from 'lucide-react';
import { Product } from '../types';
import { useLocale } from '../contexts/LocaleContext';

const Devices: React.FC = () => {
  const { t } = useLocale();
  const [searchParams, setSearchParams] = useSearchParams();
  const [devices, setDevices] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Đọc category từ URL parameters
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  // Function to get mock data with translations
  const getMockDevices = (): Product[] => [
    {
      id: 'device-1',
      name: 'Scan3D Texu 630W',
      price: 0,
      description: t('devicesPage.device.descriptions.scan3dTexu630w'),
      image: '/images/scan3d/hình chính máy 630W.jpg',
      quantity: 10,
      category: '3D Scanner',
      status: 'active',
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15',
      specialPage: '/products/scan3d-texu-630w'
    },
    {
      id: 'device-2',
      name: 'Scan3D Texu 3W',
      price: 0,
      description: t('devicesPage.device.descriptions.scan3dTexu3w'),
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      quantity: 15,
      category: '3D Scanner',
      status: 'active',
      createdAt: '2024-01-10',
      updatedAt: '2024-01-10',
      specialPage: '/products/scan3d-texu-3w'
    },
    {
      id: 'device-3',
      name: 'Scan3D Texu T22',
      price: 0,
      description: t('devicesPage.device.descriptions.scan3dTexuT22'),
      image: '/images/scan3d/texu_T22.jpg',
      quantity: 8,
      category: '3D Scanner',
      status: 'active',
      createdAt: '2024-01-12',
      updatedAt: '2024-01-12',
      specialPage: '/products/scan3d-texu-t22'
    },
  ];

  const categories = [
    { id: 'all', name: t('devicesPage.filters.allDevices') },
    { id: '3D Scanner', name: '3D Scanner' },
  ];

  // Function to fetch devices from API
  const fetchDevices = async () => {
    try {
      setLoading(true);
      // TODO: Replace with actual API call
      // const response = await deviceApi.getDevices();
      // setDevices(response.data);
      
      // Temporary: Using mock data
      setTimeout(() => {
        setDevices(getMockDevices());
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching devices:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDevices();
  }, [t]);

  const filteredDevices = devices.filter(device => {
    const matchesSearch = device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         device.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || device.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const DeviceCard = ({ device }: { device: Product }) => (
    <Link
      to={device.specialPage || `/product/${device.id}`}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 hover:border-blue-200"
    >
      <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <img 
          src={device.image} 
          alt={device.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg">
            {device.category}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight" style={{ lineHeight: '1.4' }}>
          {device.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1 leading-relaxed">
          {device.description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-sm font-medium text-gray-600">
            {t('devicesPage.device.contact')}
          </span>
          <div className="flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all">
            <span className="text-sm font-semibold">View</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );

  const DeviceListItem = ({ device }: { device: Product }) => (
    <Link
      to={device.specialPage || `/product/${device.id}`}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200"
    >
      <div className="flex items-center gap-6">
        <div className="relative flex-shrink-0">
          <div className="w-28 h-24 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
            <img 
              src={device.image} 
              alt={device.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="absolute top-2 left-2">
            <span className="bg-blue-600 text-white px-2.5 py-1 rounded-lg text-xs font-semibold shadow-md">
              {device.category}
            </span>
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {device.name}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
            {device.description}
          </p>
        </div>
        
        <div className="flex items-center gap-4 flex-shrink-0">
          <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
            {t('devicesPage.device.contact')}
          </span>
          <div className="flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all">
            <span className="text-sm font-semibold">View</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">{t('devicesPage.device.loading')}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('devicesPage.hero.title')}
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              {t('devicesPage.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t('devicesPage.filters.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-colors text-sm"
              />
            </div>

            {/* Category Filter and View Toggle */}
            <div className="flex items-center gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => {
                  const newCategory = e.target.value;
                  setSelectedCategory(newCategory);
                  if (newCategory === 'all') {
                    setSearchParams({});
                  } else {
                    setSearchParams({ category: newCategory });
                  }
                }}
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-colors"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded transition-colors ${
                    viewMode === 'grid' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded transition-colors ${
                    viewMode === 'list' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'
                  }`}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Devices Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {filteredDevices.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-xl border border-gray-200">
              <div className="text-gray-300 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('devicesPage.device.noDevices')}
              </h3>
              <p className="text-gray-500">
                {t('devicesPage.device.noDevicesDescription')}
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-sm text-gray-600">
                  {t('devicesPage.device.showing')} <span className="font-semibold text-gray-900">{filteredDevices.length}</span> {t('devicesPage.device.devices')}
                </p>
              </div>
              
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                  {filteredDevices.map(device => (
                    <DeviceCard key={device.id} device={device} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredDevices.map(device => (
                    <DeviceListItem key={device.id} device={device} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Devices;

