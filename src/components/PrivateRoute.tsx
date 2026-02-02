import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  // Eğer kullanıcı giriş yapmışsa sayfayı göster (Outlet), yapmamışsa Login'e at
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;