import React from "react";
import { links } from "../../Data/links";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import logo from '/Coinnomad Frame.svg';
import { HiOutlineXMark } from "react-icons/hi2";
import { IoLogOutOutline, IoMoonSharp } from "react-icons/io5";
import { BsChat } from "react-icons/bs";
import secureLocalStorage from "react-secure-storage";
// import { RxHamburgerMenu } from 'react-icons/rx';

const ResponsiveAsidebar = ({ menuClicked, setMenuClicked }) => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  const handleLogout = () => {
    secureLocalStorage.removeItem('token');
    secureLocalStorage.removeItem('user');

    navigate('/sign-in');
  }

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

          <div className='my-4 flex flex-col self-stretch items-start bg-[#E5E5E5] h-[1px] w-full'>
          </div>

          <ul className='flex items-start flex-col self-stretch w-full'>
            <div className='cursor-pointer text-[#6E6E6E] border-none font-semibold leading-4 flex pl-[24px] pr-[0px] py-[12px] justify-between items-center w-full relative whitespace-nowrap'>
              <div className='gap-[16px] flex items-center'>
                {/* {link.icon} */}
                <IoMoonSharp className='text-[1.35rem]' />
                <span className='text-[.875rem]'>
                  {/* {link.name} */}
                  Dark mode
                </span>
              </div>
            </div>
            
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#2F4EED] rounded-r-sm font-semibold leading-4 flex px-[24px] py-[12px] justify-between items-center w-full relative whitespace-nowrap' : 'text-[#6E6E6E] border-none font-semibold leading-4 flex pl-[24px] pr-[0px] py-[12px] justify-between items-center w-full relative whitespace-nowrap'}>
              <div className='gap-[16px] flex items-center'>
                {/* {link.icon} */}
                <BsChat className='text-[1.35rem]' />
                <span className='text-[.875rem]'>
                  {/* {link.name} */}
                  Support
                </span>
              </div>
              {/* <div className={`absolute rounded-full bg-[#2F4EED] w-[4px] h-[32px] right-0 top-auto ${pathname === link.route ? 'flex' : 'hidden'}`}></div> */}
            </NavLink>

            <div onClick={handleLogout} className='cursor-pointer text-[#6E6E6E] border-none font-semibold leading-4 flex pl-[24px] pr-[0px] py-[12px] justify-between items-center w-full relative whitespace-nowrap'>
              <div className='gap-[16px] flex items-center'>
                {/* {link.icon} */}
                <IoLogOutOutline className='text-[1.35rem] text-[#ED2F2F]' />
                <span className='text-[.875rem]'>
                  Logout
                </span>
              </div>
            </div>
          </ul>
        </aside>
      ) : (
        <aside
          id="sidebar"
          className={`lg:hidden flex flex-col fixed h-full bg-[#F7F7F7] z-50 transition-all duration-300 ease-in-out transform left-[-400%] sm:left-[-100%] w-[375px] md:w-[744px]`}
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


          <div className='my-4 flex flex-col self-stretch items-start bg-[#E5E5E5] h-[1px] w-full'></div>

          <ul className='flex items-start flex-col self-stretch w-full'>
            <div className='cursor-pointer text-[#6E6E6E] border-none font-semibold leading-4 flex pl-[24px] pr-[0px] py-[12px] justify-between items-center w-full relative whitespace-nowrap'>
              <div className='gap-[16px] flex items-center'>
                {/* {link.icon} */}
                <IoMoonSharp className='text-[1.35rem]' />
                <span className='text-[.875rem]'>
                  {/* {link.name} */}
                  Dark mode
                </span>
              </div>
            </div>
            
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#2F4EED] rounded-r-sm font-semibold leading-4 flex px-[24px] py-[12px] justify-between items-center w-full relative whitespace-nowrap' : 'text-[#6E6E6E] border-none font-semibold leading-4 flex pl-[24px] pr-[0px] py-[12px] justify-between items-center w-full relative whitespace-nowrap'}>
              <div className='gap-[16px] flex items-center'>
                {/* {link.icon} */}
                <BsChat className='text-[1.35rem]' />
                <span className='text-[.875rem]'>
                  {/* {link.name} */}
                  Support
                </span>
              </div>
              {/* <div className={`absolute rounded-full bg-[#2F4EED] w-[4px] h-[32px] right-0 top-auto ${pathname === link.route ? 'flex' : 'hidden'}`}></div> */}
            </NavLink>

            <div onClick={handleLogout} className='cursor-pointer text-[#6E6E6E] border-none font-semibold leading-4 flex pl-[24px] pr-[0px] py-[12px] justify-between items-center w-full relative whitespace-nowrap'>
              <div className='gap-[16px] flex items-center'>
                {/* {link.icon} */}
                <IoLogOutOutline className='text-[1.35rem] text-[#ED2F2F]' />
                <span className='text-[.875rem]'>
                  Logout
                </span>
              </div>
            </div>
          </ul>
        </aside>
      )}
    </>
  );
};

export default ResponsiveAsidebar;
