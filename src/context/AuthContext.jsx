import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = (username, password) => {
    if (username === "user" && password === "password") {
      setIsAuthenticated(true);
      const now = new Date();
      document.cookie = `isAuthenticated=true; expires=${
        now.getTime() + 1000 * 60 * 60 * 24
      }; path=/`;
      navigate("/");
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};
