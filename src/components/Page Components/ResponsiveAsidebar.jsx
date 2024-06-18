import React from "react";
import { links } from "../../Data/links";
import { NavLink, useLocation } from "react-router-dom";
// import logo from '/Coinnomad Frame.svg';
import { HiOutlineXMark } from "react-icons/hi2";
// import { RxHamburgerMenu } from 'react-icons/rx';

const ResponsiveAsidebar = ({ menuClicked, setMenuClicked }) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      {menuClicked ? (
        <aside
          id="sidebar"
          className={`lg:hidden flex flex-col fixed h-full bg-[#F7F7F7] z-50 transition-all duration-300 ease-in-out transform left-0 w-[375px] md:w-[744px]`}
        >
          {/* <Link to={'/dashboard'} className={`flex justify-between items-center py-[40px] px-[24px] h-[120px] gap-[24px]`}>
                            <img className='w-[159.846px] h-[34.615px] object-cover' src={logo} alt='Coinomad Logo' />
                        </Link> */}
          <HiOutlineXMark
            onClick={() => setMenuClicked(false)}
            className="h-[70px] md:h-[90px] ml-[24px] text-[1.35rem] md:text-[1.75rem] cursor-pointer"
          />

          <ul className="inline-flex items-start flex-col w-full">
            {links.map((link, index) => (
              <NavLink
                key={index}
                to={link.route}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#2F4EED] rounded-r-sm font-semibold leading-4 flex pl-[24px] pr-[0px] py-[12px] justify-between items-center w-full relative whitespace-nowrap"
                    : "text-[#6E6E6E] border-none font-semibold leading-4 flex pl-[24px] pr-[0px] py-[12px] justify-between items-center w-full relative whitespace-nowrap"
                }
              >
                <div className="gap-[16px] flex items-center">
                  {link.icon}
                  <span className="text-[.875rem]">{link.name}</span>
                </div>
                <div
                  className={`absolute rounded-full bg-[#2F4EED] w-[4px] h-[32px] right-0 top-auto ${
                    pathname === link.route ? "flex" : "hidden"
                  }`}
                ></div>
              </NavLink>
            ))}
          </ul>
        </aside>
      ) : (
        <aside
          id="sidebar"
          className={`lg:hidden flex flex-col fixed h-full bg-[#F7F7F7] z-50 transition-all duration-300 ease-in-out transform left-[-100%] w-[375px] md:w-[744px]`}
        >
          {/* <Link to={'/dashboard'} className={`flex justify-between items-center py-[40px] px-[24px] h-[120px] gap-[24px]`}>
                            <img className='w-[159.846px] h-[34.615px] object-cover' src={logo} alt='Coinomad Logo' />
                        </Link> */}
          <HiOutlineXMark
            onClick={() => setMenuClicked(false)}
            className="h-[70px] md:h-[90px] ml-[24px] text-[1.35rem] md:text-[1.75rem] cursor-pointer"
          />

          <ul className="inline-flex items-start flex-col w-full">
            {links.map((link, index) => (
              <NavLink
                key={index}
                to={link.route}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#2F4EED] rounded-r-sm font-semibold leading-4 flex pl-[24px] pr-[0px] py-[12px] justify-between items-center w-full relative whitespace-nowrap"
                    : "text-[#6E6E6E] border-none font-semibold leading-4 flex pl-[24px] pr-[0px] py-[12px] justify-between items-center w-full relative whitespace-nowrap"
                }
              >
                <div className="gap-[16px] flex items-center">
                  {link.icon}
                  <span className="text-[.875rem]">{link.name}</span>
                </div>
                <div
                  className={`absolute rounded-full bg-[#2F4EED] w-[4px] h-[32px] right-0 top-auto ${
                    pathname === link.route ? "flex" : "hidden"
                  }`}
                ></div>
              </NavLink>
            ))}
          </ul>
        </aside>
      )}
    </>
  );
};

export default ResponsiveAsidebar;
