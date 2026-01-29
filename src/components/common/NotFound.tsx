import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

interface NotFoundProps {
  title?: string;
  message?: string;
  showSearchButton?: boolean;
  showBackButton?: boolean;
}

const NotFound: React.FC<NotFoundProps> = ({
  title = 'Trang không tìm thấy',
  message = 'Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.',
  showSearchButton = true,
  showBackButton = true
}) => {
  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-6xl font-bold text-blue-600 mb-4">404</div>
          <div className="w-32 h-32 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
            <div className="text-4xl">🔍</div>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        
        <p className="text-gray-600 mb-8">
          {message}
        </p>

        {/* Actions */}
        <div className="space-y-3">
          <Link
            to="/"
            className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Về trang chủ
          </Link>

          {showBackButton && (
            <button
              onClick={handleGoBack}
              className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Quay lại
            </button>
          )}

          {showSearchButton && (
            <Link
              to="/products"
              className="w-full flex items-center justify-center px-6 py-3 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <Search className="w-5 h-5 mr-2" />
              Tìm kiếm sản phẩm
            </Link>
          )}
        </div>

        {/* Additional Links */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-3">Có thể bạn quan tâm:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/products" className="text-blue-600 hover:underline">
              Sản phẩm
            </Link>
            <Link to="/about" className="text-blue-600 hover:underline">
              Giới thiệu
            </Link>
            <Link to="/contact" className="text-blue-600 hover:underline">
              Liên hệ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;