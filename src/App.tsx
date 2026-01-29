import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { LocaleProvider } from './contexts/LocaleContext';
import ErrorBoundary from './components/common/ErrorBoundary';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Devices from './pages/Devices';
import ProductDetail from './pages/ProductDetail';
import RhinocerosProduct from './pages/RhinocerosProductPage';
import OrangRhinoProduct from './pages/OrangRhinoProduct';
import ShrinkWrapFeature from './pages/ShrinkWrapFeature';
import RhinoCamProduct from './pages/RhinoCamProduct';
import RhinoCamMill from './pages/RhinoCamMill';
import RhinoCamTurn from './pages/RhinoCamTurn';
import RhinoCamNest from './pages/RhinoCamNest';
import RhinoCamArt from './pages/RhinoCamArt';
import VoxelDanceAdditiveProduct from './pages/VoxelDanceAdditiveProduct';
import VoxelDanceManufacturingProduct from './pages/VoxelDanceManufacturingProduct';
import VoxelDanceEngineeringProduct from './pages/VoxelDanceEngineeringProduct';
import MastercamProduct from './pages/MastercamProduct';
import Fusion360Product from './pages/Fusion360Product';
import SolidWorksProduct from './pages/SolidWorksProduct';
import VoxelDanceTangoProduct from './pages/VoxelDanceTangoProduct';
import PowerMillProduct from './pages/PowerMillProduct';
import CreoProduct from './pages/CreoProduct';
import Scan3DTexu630W from './pages/Scan3DTexu630W';
import Scan3DTexu3W from './pages/Scan3DTexu3W';
import Scan3DTexuT22 from './pages/Scan3DTexuT22';
import JeveroProduct from './pages/JeveroProduct';
import BotchaProduct from './pages/BotchaProduct';
import RizomUVProduct from './pages/RizomUVProduct';
import ProductList from './components/ProductList';
import AdminDashboard from './components/AdminDashboard';
import AdminProtectedRoute from './components/admin/AdminProtectedRoute';
import NotFound from './components/common/NotFound';
import ScrollToTop from './components/common/ScrollToTop';
import './App.css';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <AppProvider>
        <NotificationProvider>
          <LocaleProvider>
            <Router>
              <ScrollToTop />
              <div className="App">
                <Routes>
                  {/* Landing Page */}
                  <Route path="/" element={
                    <MainLayout>
                      <Home />
                    </MainLayout>
                  } />

                  {/* Contact Page */}
                  <Route path="/contact" element={
                    <MainLayout>
                      <Contact />
                    </MainLayout>
                  } />

                  {/* Products Page */}
                  <Route path="/products" element={
                    <MainLayout>
                      <Products />
                    </MainLayout>
                  } />

                  {/* Devices Page */}
                  <Route path="/devices" element={
                    <MainLayout>
                      <Devices />
                    </MainLayout>
                  } />

                  {/* Rhinoceros Product Page */}
                  <Route path="/products/rhinoceros" element={
                    <MainLayout>
                      <RhinocerosProduct />
                    </MainLayout>
                  } />

                  {/* Orang-Rhino Product Page */}
                  <Route path="/products/orang-rhino" element={
                    <MainLayout>
                      <OrangRhinoProduct />
                    </MainLayout>
                  } />

                  {/* Jevero Product Page */}
                  <Route path="/products/jevero" element={
                    <MainLayout>
                      <JeveroProduct />
                    </MainLayout>
                  } />

                  {/* Botcha Product Page */}
                  <Route path="/products/botcha" element={
                    <MainLayout>
                      <BotchaProduct />
                    </MainLayout>
                  } />

                  {/* RizomUV Product Page */}
                  <Route path="/products/rizomuv" element={
                    <MainLayout>
                      <RizomUVProduct />
                    </MainLayout>
                  } />

                  {/* Other Product Pages */}
                  <Route path="/products/rhinocam" element={
                    <MainLayout>
                      <RhinoCamProduct />
                    </MainLayout>
                  } />
                  <Route path="/products/rhinocam/mill" element={
                    <MainLayout>
                      <RhinoCamMill />
                    </MainLayout>
                  } />
                  <Route path="/products/rhinocam/turn" element={
                    <MainLayout>
                      <RhinoCamTurn />
                    </MainLayout>
                  } />
                  <Route path="/products/rhinocam/nest" element={
                    <MainLayout>
                      <RhinoCamNest />
                    </MainLayout>
                  } />
                  <Route path="/products/rhinocam/art" element={
                    <MainLayout>
                      <RhinoCamArt />
                    </MainLayout>
                  } />
                  <Route path="/products/voxeldance-additive" element={
                    <MainLayout>
                      <VoxelDanceAdditiveProduct />
                    </MainLayout>
                  } />
                  <Route path="/products/voxeldance-manufacturing" element={
                    <MainLayout>
                      <VoxelDanceManufacturingProduct />
                    </MainLayout>
                  } />
                  <Route path="/products/voxeldance-engineering" element={
                    <MainLayout>
                      <VoxelDanceEngineeringProduct />
                    </MainLayout>
                  } />
                  <Route path="/products/mastercam" element={
                    <MainLayout>
                      <MastercamProduct />
                    </MainLayout>
                  } />
                  <Route path="/products/fusion-360" element={
                    <MainLayout>
                      <Fusion360Product />
                    </MainLayout>
                  } />
                  <Route path="/products/solidworks" element={
                    <MainLayout>
                      <SolidWorksProduct />
                    </MainLayout>
                  } />
                  <Route path="/products/voxeldance-tango" element={
                    <MainLayout>
                      <VoxelDanceTangoProduct />
                    </MainLayout>
                  } />
                  <Route path="/products/powermill" element={
                    <MainLayout>
                      <PowerMillProduct />
                    </MainLayout>
                  } />
                  <Route path="/products/creo" element={
                    <MainLayout>
                      <CreoProduct />
                    </MainLayout>
                  } />

                  {/* Scan3D Texu 630W Product Page */}
                  <Route path="/products/scan3d-texu-630w" element={
                    <MainLayout>
                      <Scan3DTexu630W />
                    </MainLayout>
                  } />

                  {/* Scan3D Texu 3W Product Page */}
                  <Route path="/products/scan3d-texu-3w" element={
                    <MainLayout>
                      <Scan3DTexu3W />
                    </MainLayout>
                  } />

                  {/* Scan3D Texu T22 Product Page */}
                  <Route path="/products/scan3d-texu-t22" element={
                    <MainLayout>
                      <Scan3DTexuT22 />
                    </MainLayout>
                  } />

                  {/* ShrinkWrap Feature Page */}
                  <Route path="/features/shrinkwrap" element={
                    <MainLayout>
                      <ShrinkWrapFeature />
                    </MainLayout>
                  } />

                  {/* Product Detail Page */}
                  <Route path="/product/:id" element={
                    <MainLayout>
                      <ProductDetail />
                    </MainLayout>
                  } />

                  {/* Legacy ProductList route */}
                  <Route path="/product-list" element={
                    <MainLayout>
                      <ProductList />
                    </MainLayout>
                  } />

                  {/* Admin routes with AdminLayout and Protection */}
                  <Route path="/admin/*" element={
                    <AdminProtectedRoute>
                      <AdminLayout>
                        <Routes>
                          <Route index element={<AdminDashboard />} />
                          <Route path="products" element={<AdminDashboard />} />
                          <Route path="*" element={<NotFound />} />
                        </Routes>
                      </AdminLayout>
                    </AdminProtectedRoute>
                  } />

                  {/* 404 Page */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </Router>
          </LocaleProvider>
        </NotificationProvider>
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App; 