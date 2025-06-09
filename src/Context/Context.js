import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    await AsyncStorage.getItem('userDetails')
      .then(res => {
        if (res && res !== null && res !== undefined) {
          setUser(JSON.parse(res));
        } else {
          setUser(null);
          setLoading(false);
        }
      })
      .catch(() => {
        console.error('Failed to load user data', e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const login = async userData => {
    try {
      await AsyncStorage.setItem('userDetails', JSON.stringify(userData));
      setUser(userData); // Set the user state
    } catch (e) {
      console.error('Failed to save user data', e);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userDetails').then(() => {
        setUser(null);
      });
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
