import { createContext } from "react";

export const MyContext=createContext(null);
export const AuthContext = createContext({
    isAuthenticated: false,
    setIsAuthenticated: () => {}
  });