import React, {createContext, useState, useEffect, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserType {
  id: string;
  name: string;
  email: string;
  [key: string]: any; // Optional: Add more fields based on your user structure
}

interface AuthContextType {
  user: UserType | null;
  login: (userData: UserType) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const res = await AsyncStorage.getItem('userDetails');
      if (res) {
        setUser(JSON.parse(res));
      } else {
        setUser(null);
      }
    } catch (e) {
      console.error('Failed to load user data', e);
    } finally {
      setLoading(false);
    }
  };

  const login = async (userData: UserType) => {
    try {
      await AsyncStorage.setItem('userDetails', JSON.stringify(userData));
      setUser(userData);
    } catch (e) {
      console.error('Failed to save user data', e);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userDetails');
      setUser(null);
    } catch (e) {
      console.error('Failed to remove user data', e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
