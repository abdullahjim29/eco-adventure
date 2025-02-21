import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/loadingSpinner";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const {pathname} = useLocation()

  if (loading) {
    return <LoadingSpinner/>
  }

  if (user) {
    return children;
  }

  return <Navigate state={pathname} to="/auth/login" />;
};

export default PrivateRoute;
