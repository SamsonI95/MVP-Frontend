import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Asidebar from '../../Page Components/Asidebar'
import ResponsiveAsidebar from '../../Page Components/ResponsiveAsidebar';
import DashboardHeader from '../../Page Components/DashboardHeader';
import ResponsiveDashboardHeader from '../../Page Components/ResponsiveDashboardHeader';

const AdminLayout = () => {

  const [clicked, setClicked] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false)
  return (
    <main className={`${clicked ? `lg:w-[95%] xl:w-[89%] lg:left-[60px]` : `lg:w-[80%] xl:w-[78%] lg:left-[260px]`} w-full duration-300 lg:relative`}>
      <Asidebar clicked={clicked} setClicked={setClicked}/>
      <ResponsiveAsidebar menuClicked={menuClicked} setMenuClicked={setMenuClicked}/>
      <DashboardHeader menuClicked={menuClicked} setMenuClicked={setMenuClicked}></DashboardHeader>
      <ResponsiveDashboardHeader menuClicked={menuClicked} setMenuClicked={setMenuClicked}/>
      <Outlet/>
    </main>
  )
}

export default AdminLayout