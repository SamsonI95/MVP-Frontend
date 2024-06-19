import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
// import Asidebar from "./Page Components/Asidebar";
// import ResponsiveAsidebar from "./Page Components/ResponsiveAsidebar";
// import DashboardHeader from "./Page Components/DashboardHeader";
// import ResponsiveDashboardHeader from "./Page Components/ResponsiveDashboardHeader";
// import { useState } from "react";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return (
        auth?.user ? <Outlet/> : <Navigate to="/sign-in" state={{ from: location }} replace />
    );
}

export default RequireAuth;
