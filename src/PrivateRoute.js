import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  return localStorage.getItem("Logged") ? (
    children
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;
