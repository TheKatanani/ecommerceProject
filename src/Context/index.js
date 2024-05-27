import {
  createContext
} from "react";
import { initialState } from "../productReducer";
export const ThemeContext = createContext(null);
export const ProductsDataContext = createContext(initialState);
export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {}
});