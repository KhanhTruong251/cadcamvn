import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Package, 
  Tag, 
  Users, 
  BarChart3, 
  Settings, 
  FileText,
  ShoppingCart
} from 'lucide-react';

const AdminSidebar: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    {
      name: 'Dashboard',
      icon: <Home className="w-5 h-5" />,
      path: '/admin',
      active: location.pathname === '/admin'
    },
    {
      name: 'Sản phẩm',
      icon: <Package className="w-5 h-5" />,
      path: '/admin/products',
      active: location.pathname.includes('/admin/products')
    },
    {
      name: 'Danh mục',
      icon: <Tag className="w-5 h-5" />,
      path: '/admin/categories',
      active: location.pathname.includes('/admin/categories')
    },
    {
      name: 'Đơn hàng',
      icon: <ShoppingCart className="w-5 h-5" />,
      path: '/admin/orders',
      active: location.pathname.includes('/admin/orders')
    },
    {
      name: 'Người dùng',
      icon: <Users className="w-5 h-5" />,
      path: '/admin/users',
      active: location.pathname.includes('/admin/users')
    },
    {
      name: 'Báo cáo',
      icon: <BarChart3 className="w-5 h-5" />,
      path: '/admin/reports',
      active: location.pathname.includes('/admin/reports')
    },
    {
      name: 'Bài viết',
      icon: <FileText className="w-5 h-5" />,
      path: '/admin/posts',
      active: location.pathname.includes('/admin/posts')
    },
    {
      name: 'Cài đặt',
      icon: <Settings className="w-5 h-5" />,
      path: '/admin/settings',
      active: location.pathname.includes('/admin/settings')
    }
  ];

  return (
    <aside className="hidden lg:flex w-64 bg-white shadow-lg flex-shrink-0 flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Package className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">CADCAM</span>
        </div>
      </div>
      
      <nav className="mt-6 flex-1">
        <div className="px-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                item.active
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      
      <div className="mt-auto p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div>
            <p className="text-sm font-medium text-gray-900">Admin User</p>
            <p className="text-xs text-gray-500">admin@cadcam.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
