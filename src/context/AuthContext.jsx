import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username, password) => {
    if (username === "user" && password === "password") {
      setIsAuthenticated(true);
      const now = new Date();
      document.cookie = `isAuthenticated=true; expires=${
        now.getTime() + 1000 * 60 * 60 * 24
      }; path=/`;
      document.location = "/";
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};
