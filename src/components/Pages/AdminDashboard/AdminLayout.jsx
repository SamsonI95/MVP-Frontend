import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import Asidebar from "../../Page Components/Asidebar";
import ResponsiveAsidebar from "../../Page Components/ResponsiveAsidebar";
import DashboardHeader from "../../Page Components/DashboardHeader";
import ResponsiveDashboardHeader from "../../Page Components/ResponsiveDashboardHeader";

const AdminLayout = () => {
  const location = useLocation();
  const [header, setHeader] = useState("");

  useEffect(() => {
    const storedUser = secureLocalStorage.getItem("user");
    const user = storedUser ? storedUser : null;
    let newHeader = "";

    switch (location.pathname) {
      case "/dashboard":
        newHeader = `Hey there, ${user ? user.firstName : ""}!`;

        break;
      case "/employees":
        newHeader = "Employees";

        break;
      case "/settings":
        newHeader = "Settings";

        break;
      default:
        newHeader = "";
    }

    setHeader(newHeader);
  }, [location]);

  const [clicked, setClicked] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <main
      className={`${
        clicked
          ? `lg:w-[94%] xl:w-[95%] lg:left-[60px]`
          : `lg:w-[83%] xl:w-[84%] lg:left-[230px] xl:left-[260px]`
      } w-full duration-300 lg:relative`}
    >
      <Asidebar clicked={clicked} setClicked={setClicked} />
      <ResponsiveAsidebar
        menuClicked={menuClicked}
        setMenuClicked={setMenuClicked}
      />
      <DashboardHeader
        menuClicked={menuClicked}
        setMenuClicked={setMenuClicked}
        header={header}
      />
      <ResponsiveDashboardHeader
        menuClicked={menuClicked}
        setMenuClicked={setMenuClicked}
      />
      <Outlet />
    </main>
  );
};

export default AdminLayout;
