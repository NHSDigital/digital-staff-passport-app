import React, { createContext, useState, useContext } from 'react';
import { router } from 'expo-router';

const AuthContext = createContext({
  isLoggedIn: false,
  toggleLogin: () => {},
});

const AuthProvider = ({ children }: any) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const toggleLogin = () => {
    setLoggedIn(!isLoggedIn);
    router.navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth, AuthProvider };
