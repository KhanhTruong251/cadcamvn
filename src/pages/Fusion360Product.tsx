import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, CheckCircle, Download, MessageCircle } from 'lucide-react';

const Fusion360Product: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
      </header>

      <section className="bg-gradient-to-br from-amber-600 via-orange-700 to-red-800 text-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 py-16 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Fusion 360</h1>
            <p className="text-amber-100 text-lg mb-8">Giải pháp CAD/CAM/CAE tích hợp, thiết kế sản phẩm đến gia công, mô phỏng, và cộng tác cloud.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-white text-amber-700 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" /> Liên hệ
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-700 transition-colors flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" /> Dùng thử
              </Link>
            </div>
          </div>
          <div className="bg-white/10 rounded-xl p-6">
            <ul className="space-y-3">
              {[
                'Thiết kế tham số & trực tiếp',
                'Gia công 2.5D đến 5 trục',
                'Mô phỏng & phân tích',
                'Cộng tác cloud & quản lý phiên bản'
              ].map((t, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-300 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fusion360Product;


