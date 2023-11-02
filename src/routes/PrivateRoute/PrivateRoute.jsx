// import { useContext } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  // const { user, loading } = useContext(AuthContext);
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="container mx-auto flex items-center justify-center h-[70vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
