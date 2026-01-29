import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from '../types';
import { productApi } from '../services/api';
import { ArrowLeft, ShoppingCart, Star, Package, Calendar } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchProduct(id);
    }
  }, [id]);

  const fetchProduct = async (productId: string) => {
    try {
      setLoading(true);
      const data = await productApi.getProduct(productId);
      setProduct(data);
    } catch (err) {
      setError('Không thể tải thông tin sản phẩm');
      console.error('Error fetching product:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('vi-VN');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Đang tải thông tin sản phẩm...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || 'Sản phẩm không tồn tại'}</p>
          <Link 
            to="/"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Quay lại trang chủ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Link 
              to="/"
              className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
            >
              <ArrowLeft size={20} className="mr-2" />
              Quay lại
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Chi Tiết Sản Phẩm</h1>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="p-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/600x400?text=No+Image';
                }}
              />
            </div>

            {/* Product Info */}
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      fill={i < 4 ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <span className="text-gray-600 ml-2">(4.0 - 128 đánh giá)</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <p className="text-4xl font-bold text-blue-600">
                  {formatPrice(product.price)}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Giá đã bao gồm VAT
                </p>
              </div>

              {/* Product Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Package size={20} className="text-gray-400 mr-3" />
                  <span className="text-gray-700">
                    <strong>Số lượng:</strong> {product.quantity} sản phẩm
                  </span>
                </div>
                <div className="flex items-center">
                  <Calendar size={20} className="text-gray-400 mr-3" />
                  <span className="text-gray-700">
                    <strong>Ngày tạo:</strong> {formatDate(product.createdAt || '')}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700">
                    <strong>Danh mục:</strong> {product.category}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Mô tả sản phẩm
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  <ShoppingCart size={20} className="mr-2" />
                  Thêm vào giỏ hàng
                </button>
                <button className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                  Mua ngay
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <strong>Bảo hành:</strong> 12 tháng
                  </div>
                  <div>
                    <strong>Vận chuyển:</strong> Miễn phí
                  </div>
                  <div>
                    <strong>Thanh toán:</strong> COD, Chuyển khoản
                  </div>
                  <div>
                    <strong>Xuất xứ:</strong> Việt Nam
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 