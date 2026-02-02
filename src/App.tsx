import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute'; // <-- Bekçiyi çağırdık

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Herkese açık rota: Login */}
        <Route path="/" element={<Login />} />

        {/* 🔒 KORUMALI ROTA: Dashboard */}
        {/* Dashboard'a giden herkes önce PrivateRoute kontrolünden geçer */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Tanımsız bir adres girilirse Login'e at */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;