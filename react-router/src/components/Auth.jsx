import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  //protected layouts 
  const user = false;
  if (!user) return <Navigate to="/login" replace />;
  return <Outlet />;
};

export default ProtectedLayout;
