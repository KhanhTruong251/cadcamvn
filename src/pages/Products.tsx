import React, { useState, useEffect, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Search, 
  Grid, 
  List, 
  ChevronRight
} from 'lucide-react';
import { Product } from '../types';
import { useLocale } from '../contexts/LocaleContext';

const Products: React.FC = () => {
  const { t } = useLocale();
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
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
  const getMockProducts = useCallback((): Product[] => [
    {
      id: '1',
      name: 'RhinoCam',
      price: 25000000,
      description: t('productsPage.product.descriptions.rhinocam'),
      image: '/images/rhinocam/rhinocam-logo-f97fcd96.png',
      quantity: 50,
      category: 'Phần mềm Rhino',
      status: 'active',
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15',
      specialPage: '/products/rhinocam'
    },
    {
      id: '3-rhino',
      name: 'Rhinoceros 8',
      price: 22000000,
      description: t('productsPage.product.descriptions.rhinoceros'),
      image: '/images/rhino8/logo.jpg',
      quantity: 40,
      category: 'Phần mềm Rhino',
      status: 'active',
      createdAt: '2024-01-12',
      updatedAt: '2024-01-12',
      specialPage: '/products/rhinoceros'
    },
    {
      id: '3-orang-rhino',
      name: 'Orang-Rhino & Ant3D',
      price: 55000000,
      description: t('productsPage.product.descriptions.orangRhino'),
      image: '/images/orang/orang_logo.png',
      quantity: 15,
      category: 'Phần mềm Rhino',
      status: 'active',
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15',
      specialPage: '/products/orang-rhino'
    },
    {
      id: '9',
      name: 'VoxelDance Manufacturing',
      price: 20000000,
      description: t('common.home.featuredProducts.items.voxeldanceManufacturing.description'),
      image: '/images/voxeldance/logo.jpg',
      quantity: 25,
      category: 'Phần mềm Voxeldance',
      status: 'active',
      createdAt: '2024-01-10',
      updatedAt: '2024-01-10',
      specialPage: '/products/voxeldance-manufacturing'
    },
    {
      id: '10',
      name: 'VoxelDance Engineering',
      price: 22000000,
      description: t('common.home.featuredProducts.items.voxeldanceEngineering.description'),
      image: '/images/voxeldance/logo.jpg',
      quantity: 20,
      category: 'Phần mềm Voxeldance',
      status: 'active',
      createdAt: '2024-01-11',
      updatedAt: '2024-01-11',
      specialPage: '/products/voxeldance-engineering'
    },
    {
      id: '11-jevero',
      name: 'Jevero',
      price: 30000000,
      description: 'Easy pattern making, on top of Rhino. Create and modify patterns with ease and efficiency with powerful parametric tools.',
      image: '/images/jevero/logo.jpg',
      quantity: 30,
      category: 'Phần mềm Jevero',
      status: 'active',
      createdAt: '2024-01-13',
      updatedAt: '2024-01-13',
      specialPage: '/products/jevero'
    },
    {
      id: '11-botcha',
      name: 'Botcha',
      price: 30000000,
      description: 'Virtual prototypes as fast as possible. The ultimate 3D footwear tool with intuitive user interface built on Rhinoceros.',
      image: '/images/jevero/logo.jpg',
      quantity: 30,
      category: 'Phần mềm Jevero',
      status: 'active',
      createdAt: '2024-01-13',
      updatedAt: '2024-01-13',
      specialPage: '/products/botcha'
    },
    {
      id: '12',
      name: 'RizomUV',
      price: 18000000,
      description: t('common.home.featuredProducts.items.rizomuv.description'),
      image: '/images/rizomuv/logo.jpg',
      quantity: 35,
      category: 'Phần mềm RizomUV',
      status: 'active',
      createdAt: '2024-01-14',
      updatedAt: '2024-01-14',
      specialPage: '/products/rizomuv'
    },
  ], [t]);

  const categories = [
    { id: 'all', name: t('productsPage.filters.allProducts') },
    { id: 'Phần mềm Rhino', name: 'Phần mềm Rhino' },
    { id: 'Phần mềm Voxeldance', name: 'Phần mềm Voxeldance' },
    { id: 'Phần mềm Jevero', name: 'Phần mềm Jevero' },
    { id: 'Phần mềm RizomUV', name: 'Phần mềm RizomUV' },
  ];

  // Function to fetch products from API
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      // TODO: Replace with actual API call
      // const response = await productApi.getProducts();
      // setProducts(response.data);
      
      // Temporary: Using mock data
      setTimeout(() => {
        setProducts(getMockProducts());
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  }, [getMockProducts]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const ProductCard = ({ product }: { product: Product }) => (
    <Link
      to={product.specialPage || `/product/${product.id}`}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 hover:border-blue-200"
    >
      <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight" style={{ lineHeight: '1.4' }}>
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-sm font-medium text-gray-600">
            {t('productsPage.product.contact')}
          </span>
          <div className="flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all">
            <span className="text-sm font-semibold">View</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );

  const ProductListItem = ({ product }: { product: Product }) => (
    <Link
      to={product.specialPage || `/product/${product.id}`}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200"
    >
      <div className="flex items-center gap-6">
        <div className="relative flex-shrink-0">
          <div className="w-28 h-24 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="absolute top-2 left-2">
            <span className="bg-blue-600 text-white px-2.5 py-1 rounded-lg text-xs font-semibold shadow-md">
              {product.category}
            </span>
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>
        
        <div className="flex items-center gap-4 flex-shrink-0">
          <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
            {t('productsPage.product.contact')}
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
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">{t('productsPage.product.loading')}</p>
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
              {t('productsPage.hero.title')}
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              {t('productsPage.hero.description')}
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
                placeholder={t('productsPage.filters.searchPlaceholder')}
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

      {/* Products Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-xl border border-gray-200">
              <div className="text-gray-300 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('productsPage.product.noProducts')}
              </h3>
              <p className="text-gray-500">
                {t('productsPage.product.noProductsDescription')}
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-sm text-gray-600">
                  {t('productsPage.product.showing')} <span className="font-semibold text-gray-900">{filteredProducts.length}</span> {t('productsPage.product.products')}
                </p>
              </div>
              
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredProducts.map(product => (
                    <ProductListItem key={product.id} product={product} />
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

export default Products;
