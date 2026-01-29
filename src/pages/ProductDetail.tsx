import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, 
  Download, 
  Play, 
  CheckCircle,
  FileText,
  MessageCircle,
} from 'lucide-react';
import { Product } from '../types';
import { useLocale } from '../contexts/LocaleContext';
import { formatPrice, formatDate } from '../utils/formatters';

const MOCK_PRODUCT_DETAILS: Product = {
  id: '2',
  name: 'VoxelDance Additive',
  price: 18000000,
  description: 'Phần mềm thiết kế và tối ưu hóa cho công nghệ in 3D kim loại. Hỗ trợ thiết kế lattice structure và topology optimization.',
  image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
  quantity: 30,
  category: 'Phần mềm Additive',
  createdAt: '2024-01-10',
  updatedAt: '2024-01-10',
  status: 'active'
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLocale();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    'Thiết kế lattice structure tiên tiến',
    'Topology optimization tự động',
    'Hỗ trợ in 3D kim loại',
    'Giao diện trực quan',
    'Tích hợp với CAD software',
    'Simulation và analysis',
    'Export đa định dạng',
    'Hỗ trợ kỹ thuật 24/7'
  ];

  const specifications = [
    { label: 'Phiên bản', value: '2024.1' },
    { label: 'Hệ điều hành', value: 'Windows 10/11, macOS' },
    { label: 'RAM tối thiểu', value: '16GB' },
    { label: 'GPU', value: 'NVIDIA GTX 1060 trở lên' },
    { label: 'Dung lượng', value: '2.5GB' },
    { label: 'Ngôn ngữ', value: 'Tiếng Anh, Tiếng Việt' },
    { label: 'Bảo hành', value: '12 tháng' },
    { label: 'Cập nhật', value: 'Miễn phí 1 năm' }
  ];

  const reviews = [
    {
      id: 1,
      user: 'Nguyễn Văn A',
      rating: 5,
      date: '2024-01-15',
      comment: 'Phần mềm rất tốt, giao diện dễ sử dụng và tính năng mạnh mẽ. Hỗ trợ kỹ thuật rất nhiệt tình.'
    },
    {
      id: 2,
      user: 'Trần Thị B',
      rating: 5,
      date: '2024-01-10',
      comment: 'Đã sử dụng được 6 tháng, rất hài lòng với hiệu suất và tính năng của phần mềm.'
    },
    {
      id: 3,
      user: 'Lê Văn C',
      rating: 4,
      date: '2024-01-05',
      comment: 'Phần mềm tốt, nhưng cần cải thiện thêm một số tính năng nhỏ.'
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProduct(MOCK_PRODUCT_DETAILS);
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Đang tải thông tin sản phẩm...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Không tìm thấy sản phẩm</h2>
            <Link 
              to="/products" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Quay lại danh sách sản phẩm
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Trang chủ</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-blue-600">Sản phẩm</Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Action Buttons */}
            <div className="flex space-x-4 mt-6">
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Liên hệ</span>
              </button>
              
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              {/* Category Badge */}
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </span>
              </div>

              {/* Product Name */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">4.8 (128 đánh giá)</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {formatPrice(product.price)}
                </div>
                <div className="text-sm text-gray-500">
                  Còn {product.quantity} sản phẩm trong kho
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Quick Actions */}
              <div className="flex space-x-4 mb-6">
                <button className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Tải demo</span>
                </button>
                <button className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                  <Play className="w-4 h-4" />
                  <span>Xem video</span>
                </button>
                <button className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                  <FileText className="w-4 h-4" />
                  <span>Tài liệu</span>
                </button>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tính năng nổi bật</h3>
                <div className="grid grid-cols-2 gap-2">
                  {features.slice(0, 6).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-blue-900">Cần tư vấn?</p>
                    <p className="text-xs text-blue-700">Liên hệ ngay với chúng tôi để được hỗ trợ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-lg">
            {/* Tab Headers */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-8">
                {[
                  { id: 'overview', name: t('common.tabs.overview'), icon: FileText }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span>{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === 'overview' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Mô tả chi tiết</h3>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">
                      {product.name} là phần mềm thiết kế và tối ưu hóa hàng đầu cho công nghệ in 3D kim loại. 
                      Với các tính năng tiên tiến, phần mềm giúp bạn tạo ra các thiết kế phức tạp và tối ưu hóa 
                      hiệu suất sản phẩm.
                    </p>
                    <p className="mb-4">
                      Phần mềm hỗ trợ đầy đủ các công nghệ in 3D kim loại hiện đại như DMLS, SLM, EBM và 
                      các phương pháp khác. Giao diện trực quan và dễ sử dụng giúp người dùng nhanh chóng 
                      làm quen và tận dụng tối đa các tính năng mạnh mẽ.
                    </p>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Ứng dụng chính:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Thiết kế lattice structure cho giảm trọng lượng</li>
                      <li>Topology optimization tự động</li>
                      <li>Simulation và analysis</li>
                      <li>Export đa định dạng</li>
                      <li>Tích hợp với CAD software</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Thông số kỹ thuật</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between py-3 border-b border-gray-100">
                        <span className="font-medium text-gray-700">{spec.label}</span>
                        <span className="text-gray-900">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Đánh giá từ khách hàng</h3>
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-gray-900">{review.user}</span>
                            <div className="flex items-center">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">{formatDate(review.date)}</span>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sản phẩm liên quan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={`https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&v=${i}`}
                  alt="Related product"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Sản phẩm liên quan {i}</h3>
                  <p className="text-gray-600 text-sm mb-4">Mô tả ngắn về sản phẩm liên quan</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">{formatPrice(15000000)}</span>
                    <Link 
                      to={`/product/${i}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                    >
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
