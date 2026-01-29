import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { adminApi } from '../../services/adminApi';
import { Lock } from 'lucide-react';

interface AdminProtectedRouteProps {
  children: React.ReactNode;
}

const AdminProtectedRoute: React.FC<AdminProtectedRouteProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // Check if user is authenticated
        const isAuth = adminApi.isAuthenticated();
        
        if (!isAuth) {
          setIsAuthenticated(false);
          setIsLoading(false);
          return;
        }

        // Verify session with server (if available)
        const isValidSession = await adminApi.verifySession();
        
        if (!isValidSession) {
          // Session expired, logout
          adminApi.logout();
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
        adminApi.logout();
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Đang xác thực...</p>
        </div>
      </div>
    );
  }

  // Redirect to home if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Render protected content
  return <>{children}</>;
};

export default AdminProtectedRoute;
