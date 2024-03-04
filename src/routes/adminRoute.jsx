/* import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const adminRoute = (children) => {
  const [user, loading] = useAuth();
  const [isAdmin, isAdminLoading] = UseAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return "loading";
  }
  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default adminRoute; */

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import UseAdmin from "../hooks/useAdmin";

//new try

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [isAdmin, isAdminLoading] = UseAdmin();

  if (loading || isAdminLoading) {
    return loading;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};
export default AdminRoute;
