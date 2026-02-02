import { createContext, useState, useContext, type ReactNode } from 'react';
import apiClient from '../services/api'; 

interface User {
  id: number;
  username: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // 🚀 ÇÖZÜM BURADA: Lazy State Initialization
  // useEffect kullanmak yerine, localStorage'ı direkt burada okuyoruz.
  // Bu yöntem "cascading render" hatasını kesin olarak çözer.
  const [user, setUser] = useState<User | null>(() => {
    try {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("LocalStorage error:", error);
      return null;
    }
  });

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      const response = await apiClient.get(`/users?username=${username}&password=${password}`);
      const foundUser = response.data[0];

      if (foundUser) {
        setUser(foundUser);
        localStorage.setItem('user', JSON.stringify(foundUser));
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Giriş hatası:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const values = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};