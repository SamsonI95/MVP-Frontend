import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import secureLocalStorage from "react-secure-storage";
// import Asidebar from "./Page Components/Asidebar";
// import ResponsiveAsidebar from "./Page Components/ResponsiveAsidebar";
// import DashboardHeader from "./Page Components/DashboardHeader";
// import ResponsiveDashboardHeader from "./Page Components/ResponsiveDashboardHeader";
// import { useState } from "react";

const RequireAuth = () => {
  const { auth } = useAuth();
  const user = secureLocalStorage.getItem("user");
  console.log("user", user);
  const location = useLocation();

  return user.accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" />
  );
};

export default RequireAuth;
