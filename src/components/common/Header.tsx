import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, ChevronDown } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLocale } from '../../contexts/LocaleContext';

interface HeaderProps {
  // Không cần props nào cho header đơn giản
}

const Header: React.FC<HeaderProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isDeviceDropdownOpen, setIsDeviceDropdownOpen] = useState(false);
  const location = useLocation();
  const { t } = useLocale();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Danh mục sản phẩm từ dữ liệu
  const productCategories = [
    { name: 'Jevero', href: '/products/jevero' },
    { name: 'Orang-Rhino & Ant3D', href: '/products/orang-rhino' },
    { name: 'RhinoCAM', href: '/products/rhinocam' },
    { name: 'Rhinoceros 8', href: '/products/rhinoceros' },
    { name: 'RizomUV', href: '/products/rizomuv' },
    { 
      name: 'VoxelDance Additive', 
      href: '/products/voxeldance-additive',
      submenu: [
        { name: 'VoxelDance Engineering', href: '/products/voxeldance-engineering' },
        { name: 'VoxelDance Manufacturing', href: '/products/voxeldance-manufacturing' }
      ]
    },
  ];

  // Danh mục thiết bị
  const deviceCategories = [
    { name: 'Scan3D Texu 630W', href: '/products/scan3d-texu-630w' },
    { name: 'Scan3D Texu 3W', href: '/products/scan3d-texu-3w' },
    { name: 'Scan3D Texu T22', href: '/products/scan3d-texu-t22' },
  ];

  const navigation = [
    { name: t('common.header.home'), href: '/', current: isActive('/') },
    { name: t('common.header.products'), href: '/products', current: isActive('/products'), hasDropdown: true, dropdownType: 'products' },
    { name: t('common.header.devices'), href: '/devices', current: isActive('/devices'), hasDropdown: true, dropdownType: 'devices' },
    // { name: t('common.header.about'), href: '/about', current: isActive('/about') },
    { name: t('common.header.contact'), href: '/contact', current: isActive('/contact') },
  ];

  return (
    <header className="bg-white/95 backdrop-blur sticky top-0 z-50 border-b border-blue-200/40 shadow-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-8 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white border-2 border-gray-200 shadow-sm overflow-hidden p-1">
              <img 
                src="/images/logos/logo-crop.jpg" 
                alt="3C CNC SOFT Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            <div className="leading-tight">
              <h1 className="text-2xl font-bold text-gray-900 tracking-wide">3C CNC SOFT</h1>
              <p className="text-xs text-gray-600 font-medium">Optimized Technology Platform</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                                 {item.hasDropdown ? (
                   <div
                     className="relative"
                     onMouseEnter={() => {
                       if (item.dropdownType === 'products') {
                         setIsProductDropdownOpen(true);
                       } else if (item.dropdownType === 'devices') {
                         setIsDeviceDropdownOpen(true);
                       }
                     }}
                     onMouseLeave={() => {
                       if (item.dropdownType === 'products') {
                         setIsProductDropdownOpen(false);
                       } else if (item.dropdownType === 'devices') {
                         setIsDeviceDropdownOpen(false);
                       }
                     }}
                   >
                     <Link
                       to={item.href}
                      className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 h-10 ${
                         item.current
                          ? 'text-blue-600 bg-blue-50 shadow-sm'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/70'
                       }`}
                     >
                       {item.name}
                       <ChevronDown className="ml-1 h-4 w-4" />
                     </Link>
                     
                     {/* Products Dropdown Menu */}
                     {item.dropdownType === 'products' && isProductDropdownOpen && (
                       <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                         {/* Invisible gap to prevent dropdown from closing */}
                         <div className="absolute -top-2 left-0 right-0 h-2"></div>
                        <div className="px-4 py-2 border-b border-gray-100">
                          <h3 className="text-sm font-semibold text-gray-900">{t('common.header.productCategories')}</h3>
                        </div>
                                                 {productCategories.map((category) => (
                           <div key={category.name} className="relative group">
                                                           {category.submenu ? (
                                <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer">
                                  <span>{category.name}</span>
                                  <ChevronDown className="w-3 h-3 text-gray-400 group-hover:text-blue-600" />
                                 
                                 {/* Submenu */}
                                 <div className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                   {category.submenu.map((subItem) => (
                                     <Link
                                       key={subItem.name}
                                       to={subItem.href}
                                       className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                       onClick={() => setIsProductDropdownOpen(false)}
                                     >
                                       <span>{subItem.name}</span>
                                     </Link>
                                   ))}
                                 </div>
                               </div>
                             ) : (
                                                               <Link
                                  to={category.href}
                                  className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                  onClick={() => setIsProductDropdownOpen(false)}
                                >
                                  <span>{category.name}</span>
                                </Link>
                             )}
                           </div>
                         ))}
                        <div className="border-t border-gray-100 mt-2 pt-2">
                          <Link
                            to="/products"
                            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors"
                            onClick={() => setIsProductDropdownOpen(false)}
                          >
                            {t('common.header.viewAllProducts')}
                          </Link>
                        </div>
                      </div>
                    )}

                     {/* Devices Dropdown Menu */}
                     {item.dropdownType === 'devices' && isDeviceDropdownOpen && (
                       <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                         {/* Invisible gap to prevent dropdown from closing */}
                         <div className="absolute -top-2 left-0 right-0 h-2"></div>
                        <div className="px-4 py-2 border-b border-gray-100">
                          <h3 className="text-sm font-semibold text-gray-900">{t('common.header.deviceCategories')}</h3>
                        </div>
                                                 {deviceCategories.map((device) => (
                           <Link
                             key={device.name}
                             to={device.href}
                             className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                             onClick={() => setIsDeviceDropdownOpen(false)}
                           >
                             <span>{device.name}</span>
                           </Link>
                         ))}
                        <div className="border-t border-gray-100 mt-2 pt-2">
                          <Link
                            to="/devices"
                            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors"
                            onClick={() => setIsDeviceDropdownOpen(false)}
                          >
                            {t('common.header.viewAllDevices')}
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                                     <Link
                     to={item.href}
                  className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 h-10 ${
                       item.current
                      ? 'text-blue-600 bg-blue-50 shadow-sm'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/70'
                     }`}
                   >
                     {item.name}
                   </Link>
                )}
              </div>
            ))}
          </nav>

                     {/* Actions */}
          <div className="flex items-center space-x-3 lg:space-x-4">
             {/* Language Switcher */}
             <LanguageSwitcher />
             
             {/* User Menu */}
            <button className="hidden sm:flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-all duration-200">
               <User size={24} />
             </button>

            {/* Admin Link */}
            <Link
              to="/admin"
              className="hidden md:inline-flex items-center px-4 py-2 border border-blue-600 text-sm font-semibold rounded-lg text-blue-600 hover:text-white hover:bg-blue-600 transition-all duration-200"
            >
              {t('common.header.admin')}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

                  {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
                {navigation.map((item) => (
                  <div key={item.name}>
                                         {item.hasDropdown ? (
                       <div className="space-y-1">
                         <button
                           onClick={() => {
                             if (item.dropdownType === 'products') {
                               setIsProductDropdownOpen(!isProductDropdownOpen);
                             } else if (item.dropdownType === 'devices') {
                               setIsDeviceDropdownOpen(!isDeviceDropdownOpen);
                             }
                           }}
                           className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors ${
                             item.current
                               ? 'text-blue-600 bg-blue-50'
                               : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                           }`}
                         >
                           {item.name}
                           <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                             (item.dropdownType === 'products' && isProductDropdownOpen) || 
                             (item.dropdownType === 'devices' && isDeviceDropdownOpen) ? 'rotate-180' : ''
                           }`} />
                         </button>
                         
                         {/* Mobile Products Dropdown Menu */}
                         {item.dropdownType === 'products' && isProductDropdownOpen && (
                           <div className="ml-4 space-y-1 border-l-2 border-gray-200 pl-4 mt-2">
                                                         {productCategories.map((category) => (
                               <div key={category.name}>
                                                                 {category.submenu ? (
                                   <div className="space-y-1">
                                     <div className="flex items-center px-3 py-2 text-sm text-gray-600">
                                       <span>{category.name}</span>
                                     </div>
                                    <div className="ml-4 space-y-1 border-l-2 border-gray-200 pl-4">
                                      {category.submenu.map((subItem) => (
                                        <Link
                                          key={subItem.name}
                                          to={subItem.href}
                                          className="flex items-center px-3 py-2 text-sm text-gray-500 hover:text-blue-600 transition-colors"
                                          onClick={() => {
                                            setIsProductDropdownOpen(false);
                                            setIsMobileMenuOpen(false);
                                          }}
                                        >
                                          <span>{subItem.name}</span>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ) : (
                                                                       <Link
                                         to={category.href}
                                         className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                                         onClick={() => {
                                           setIsProductDropdownOpen(false);
                                           setIsMobileMenuOpen(false);
                                         }}
                                       >
                                         <span>{category.name}</span>
                                       </Link>
                                    )}
                                 </div>
                               ))}
                              <Link
                                to="/products"
                                className="flex items-center justify-center px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                                onClick={() => {
                                  setIsProductDropdownOpen(false);
                                  setIsMobileMenuOpen(false);
                                }}
                              >
                                {t('common.header.viewAllProducts')}
                              </Link>
                            </div>
                          )}

                         {/* Mobile Devices Dropdown Menu */}
                         {item.dropdownType === 'devices' && isDeviceDropdownOpen && (
                           <div className="ml-4 space-y-1 border-l-2 border-gray-200 pl-4 mt-2">
                                                         {deviceCategories.map((device) => (
                               <Link
                                 key={device.name}
                                 to={device.href}
                                 className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                                 onClick={() => {
                                   setIsDeviceDropdownOpen(false);
                                   setIsMobileMenuOpen(false);
                                 }}
                               >
                                 <span>{device.name}</span>
                               </Link>
                             ))}
                              <Link
                                to="/devices"
                                className="flex items-center justify-center px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                                onClick={() => {
                                  setIsDeviceDropdownOpen(false);
                                  setIsMobileMenuOpen(false);
                                }}
                              >
                                {t('common.header.viewAllDevices')}
                              </Link>
                            </div>
                          )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                          item.current
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  to="/admin"
                  className="block px-3 py-2 text-base font-medium text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('common.header.admin')}
                </Link>
              </div>

            
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;