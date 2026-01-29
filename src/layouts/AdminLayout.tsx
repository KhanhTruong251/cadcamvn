import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Package,
  Users,
  Settings,
  BarChart3,
  ShoppingCart,
  Menu,
  X,
  Bell,
  Search,
  LogOut,
  Tag,
  FileText,
  MessageSquare,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  Sun,
  Moon
} from 'lucide-react';
import { adminApi, AdminUser } from '../services/adminApi';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const user = adminApi.getCurrentUser();
    setCurrentUser(user);
  }, []);

  const handleLogout = () => {
    adminApi.logout();
    navigate('/');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real app, you'd save this to localStorage and apply dark mode classes
  };

  const navigation = [
    { 
      name: 'Tổng quan', 
      href: '/admin', 
      icon: BarChart3, 
      current: location.pathname === '/admin',
      badge: null
    },
    { 
      name: 'Sản phẩm', 
      href: '/admin/products', 
      icon: Package, 
      current: location.pathname.startsWith('/admin/products'),
      badge: '24'
    },
    { 
      name: 'Danh mục', 
      href: '/admin/categories', 
      icon: Tag, 
      current: location.pathname.startsWith('/admin/categories'),
      badge: null
    },
    { 
      name: 'Đơn hàng', 
      href: '/admin/orders', 
      icon: ShoppingCart, 
      current: location.pathname.startsWith('/admin/orders'),
      badge: '3'
    },
    { 
      name: 'Khách hàng', 
      href: '/admin/customers', 
      icon: Users, 
      current: location.pathname.startsWith('/admin/customers'),
      badge: null
    },
    { 
      name: 'Báo cáo', 
      href: '/admin/reports', 
      icon: FileText, 
      current: location.pathname.startsWith('/admin/reports'),
      badge: null
    },
    { 
      name: 'Tin nhắn', 
      href: '/admin/messages', 
      icon: MessageSquare, 
      current: location.pathname.startsWith('/admin/messages'),
      badge: '7'
    }
  ];

  const secondaryNavigation = [
    { name: 'Trợ giúp', href: '/admin/help', icon: HelpCircle },
    { name: 'Cài đặt', href: '/admin/settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </div>
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out border-r border-gray-200
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:relative lg:flex lg:flex-col
      `}>
        {/* Sidebar header */}
        <div className="flex items-center justify-between h-16 px-6 bg-gradient-to-r from-blue-600 to-blue-700 border-b border-blue-500">
          <Link to="/admin" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">CADCAM Admin</h1>
              <p className="text-xs text-blue-100">Quản trị hệ thống</p>
            </div>
          </Link>
          <button
            className="lg:hidden p-1 text-white hover:bg-blue-500 rounded"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* User info */}
        <div className="p-6 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-white">
                {currentUser?.username?.charAt(0).toUpperCase() || 'A'}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {currentUser?.username || 'Admin User'}
              </p>
              <p className="text-xs text-gray-500 truncate">
                Quản trị viên
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-xs text-green-600">Online</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center justify-between px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    item.current
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon size={18} className={`${
                      item.current ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'
                    }`} />
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-gray-200"></div>

          {/* Secondary navigation */}
          <div className="space-y-1">
            <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Hệ thống
            </p>
            {secondaryNavigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
                >
                  <Icon size={16} className="text-gray-400 group-hover:text-gray-600 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Sidebar footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
              >
                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <span className="text-xs text-gray-500">
                {darkMode ? 'Chế độ sáng' : 'Chế độ tối'}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              title="Đăng xuất"
            >
              <LogOut size={16} />
              <span>Đăng xuất</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top navigation */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 lg:px-6 py-4">
            <div className="flex items-center space-x-4">
              <button
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu size={20} />
              </button>
              
              {/* Breadcrumb */}
              <nav className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
                <Link to="/admin" className="hover:text-blue-600 transition-colors">
                  Admin
                </Link>
                <ChevronRight size={16} className="text-gray-400" />
                <span className="text-gray-900 font-medium">
                  {navigation.find(item => item.current)?.name || 'Tổng quan'}
                </span>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:flex items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-colors"
                  />
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center space-x-2">
                {/* Notifications */}
                <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <Bell size={18} />
                  <span className="absolute -top-1 -right-1 block h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>

                {/* Quick Add */}
                <div className="relative group">
                  <button className="flex items-center space-x-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Package size={16} />
                    <span className="hidden sm:inline">Thêm</span>
                    <ChevronDown size={14} />
                  </button>
                  
                  {/* Dropdown menu - would be implemented with proper state management */}
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <Link to="/admin/products/new" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Package size={16} className="mr-3" />
                      Thêm sản phẩm
                    </Link>
                    <Link to="/admin/categories/new" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Tag size={16} className="mr-3" />
                      Thêm danh mục
                    </Link>
                  </div>
                </div>

                {/* User Profile */}
                <div className="relative group">
                  <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-white">
                        {currentUser?.username?.charAt(0).toUpperCase() || 'A'}
                      </span>
                    </div>
                    <div className="hidden md:block text-left">
                      <p className="text-sm font-medium text-gray-900">
                        {currentUser?.username || 'Admin'}
                      </p>
                      <p className="text-xs text-gray-500">Quản trị viên</p>
                    </div>
                    <ChevronDown size={14} className="text-gray-400" />
                  </button>
                  
                  {/* User dropdown - would be implemented with proper state management */}
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <Link to="/admin/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Users size={16} className="mr-3" />
                      Hồ sơ cá nhân
                    </Link>
                    <Link to="/admin/settings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Settings size={16} className="mr-3" />
                      Cài đặt
                    </Link>
                    <div className="border-t border-gray-200 my-1"></div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <LogOut size={16} className="mr-3" />
                      Đăng xuất
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 px-4 lg:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>&copy; 2025 3C CNC SOFT Admin Panel</span>
              <span>•</span>
              <span>Version 2.1.0</span>
            </div>
            <div className="flex items-center space-x-4 mt-2 sm:mt-0">
              <Link to="/admin/help" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Trợ giúp
              </Link>
              <Link to="/admin/docs" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Tài liệu
              </Link>
              <Link to="/admin/support" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Hỗ trợ
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;