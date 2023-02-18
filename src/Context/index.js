import {
  createContext
} from "react";

export const ThemeContext = createContext(null);
export const ProductsDataContext = createContext(null);
export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {}
});