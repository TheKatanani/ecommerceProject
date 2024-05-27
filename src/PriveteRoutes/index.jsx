import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../Context";

const PrivateRoute = () => {
  const [isAuthenticated, ] = useContext(AuthContext);
    return isAuthenticated ? <Outlet />: <Navigate to='/login' />
  };
  export default PrivateRoute;