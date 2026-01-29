import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  cartCount?: number;
  onCartClick?: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  showHeader = true,
  showFooter = true,
  cartCount = 0,
  onCartClick
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      {showHeader && (
        <Header />
      )}
      
      <main className="flex-1">
        {children}
      </main>
      
      {showFooter && <Footer />}
    </div>
  );
};

export default MainLayout;