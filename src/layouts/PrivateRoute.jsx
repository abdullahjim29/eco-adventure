import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/loadingSpinner";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <LoadingSpinner/>
  }

  if (user) {
    return children;
  }

  return <Navigate to="/auth/login" />;
};

export default PrivateRoute;
