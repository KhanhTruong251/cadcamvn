import React from 'react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <Link to="/" className="flex items-center">
              <h1 className="text-3xl font-bold text-blue-600">CADCAM</h1>
            </Link>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">{title}</h2>
            {subtitle && (
              <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
            )}
          </div>

          <div className="mt-8">
            {children}
          </div>
        </div>
      </div>

      {/* Right side - Image/Branding */}
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800">
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Chào mừng đến với CADCAM</h2>
              <p className="text-xl opacity-90 max-w-md mx-auto">
                Hệ thống quản lý sản phẩm chuyên nghiệp cho doanh nghiệp hiện đại
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 max-w-sm mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <p className="text-sm">Quản lý hiệu quả</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <p className="text-sm">Tối ưu hóa</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <p className="text-sm">Bảo mật cao</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;