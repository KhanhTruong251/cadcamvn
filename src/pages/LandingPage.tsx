import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle, Download,
  Play,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const LandingPage: React.FC = () => {
  




  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold text-gray-900">CADCAM Web</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Tính năng</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">Giới thiệu</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Liên hệ</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Link 
                to="/login" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Đăng nhập
              </Link>
              <Link 
                to="/register" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Đăng ký
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Quản lý sản phẩm
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}CADCAM
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Giải pháp quản lý sản phẩm CADCAM hiện đại, an toàn và hiệu quả. 
              Tối ưu hóa quy trình làm việc của bạn với công nghệ tiên tiến.
            </p>
                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link 
                 to="/products" 
                 className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
               >
                 <span>Xem sản phẩm</span>
                 <ArrowRight className="w-5 h-5" />
               </Link>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Xem demo</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </section>





      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Về chúng tôi
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                CADCAM Web là nền tảng quản lý sản phẩm CADCAM hàng đầu, được phát triển 
                với mục tiêu mang lại trải nghiệm tốt nhất cho người dùng.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Chúng tôi cam kết cung cấp giải pháp toàn diện, an toàn và dễ sử dụng 
                cho các doanh nghiệp trong lĩnh vực CADCAM.
              </p>
              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Tải về</span>
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                  Tìm hiểu thêm
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Tại sao chọn chúng tôi?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Giao diện hiện đại, dễ sử dụng</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Bảo mật dữ liệu cao cấp</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Hỗ trợ kỹ thuật 24/7</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Cập nhật thường xuyên</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

 
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Sẵn sàng bắt đầu?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Tham gia cùng hàng nghìn khách hàng đã tin tưởng và sử dụng 
            nền tảng quản lý sản phẩm CADCAM của chúng tôi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/register" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300"
            >
              Đăng ký miễn phí
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="text-xl font-bold">CADCAM Web</span>
              </div>
              <p className="text-gray-400 mb-6">
                Giải pháp quản lý sản phẩm CADCAM hiện đại, an toàn và hiệu quả.
              </p>
                             <div className="flex space-x-4">
                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                   <Facebook className="w-5 h-5" />
                 </a>
                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                   <Twitter className="w-5 h-5" />
                 </a>
                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                   <Instagram className="w-5 h-5" />
                 </a>
                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                   <Linkedin className="w-5 h-5" />
                 </a>
               </div>
            </div>
            
                         <div>
               <h3 className="text-lg font-semibold mb-6">Sản phẩm</h3>
               <ul className="space-y-3">
                 <li><a href="/products" className="text-gray-400 hover:text-white transition-colors">Tính năng</a></li>
                 <li><a href="/products" className="text-gray-400 hover:text-white transition-colors">Giá cả</a></li>
                 <li><a href="/products" className="text-gray-400 hover:text-white transition-colors">Tích hợp</a></li>
                 <li><a href="/products" className="text-gray-400 hover:text-white transition-colors">API</a></li>
               </ul>
             </div>
             
             <div>
               <h3 className="text-lg font-semibold mb-6">Hỗ trợ</h3>
               <ul className="space-y-3">
                 <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Tài liệu</a></li>
                 <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Hướng dẫn</a></li>
                 <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                 <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Liên hệ</a></li>
               </ul>
             </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Liên hệ</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">info@cadcamweb.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">+84 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">Hà Nội, Việt Nam</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 3C CNC SOFT. Tất cả quyền được bảo lưu.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
