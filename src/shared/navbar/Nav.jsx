import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Headroom from "react-headroom";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (event) => {
    if (event.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");

    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);


  

  return (
    <Headroom style={{
      webkitTransition: 'all .5s ease-in-out',
      mozTransition: 'all .5s ease-in-out',
      oTransition: 'all .5s ease-in-out',
      transition: 'all .5s ease-in-out'
    }}>

  
    <div className="flex items-center w-full shadow-md text-center ">
      <div className="navbar bg-gradient-to-r from-cyan-700">
        <div className="navbar-start ">

<div className="drawer lg:hidden">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-circle drawer-button -ml-9"> <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 h-1/3 w-1/2 bg-gradient-to-b  from-cyan-700   ">
      {/* Sidebar content here */}
      <div
          
              className="  text-white mt-2 text-xl font-semibold py-4 text-left  " 
              >
              <div> 
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " underline " : "text-white link link-hover"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </div>
              <div>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "underline" : "text-white link link-hover"
                  }
                  to="/instructors"
                >
                  {" "}
                  Instructors
                </NavLink>
              </div>
              <div>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "underline" : "text-white link link-hover"
                  }
                  to="/allClasses"
                >
                  {" "}
                  Classes
                </NavLink>
              </div>
              <div>
                {user ? (
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "underline" : "text-white link link-hover"
                    }
                    to="/dashboard/welcome"
                  >
                    {" "}
                    Dashboard
                  </NavLink>
                ) : (
                  ""
                )}
              </div>
            </div>
      
    </ul>
  </div>
</div>

{/* large screen lav */}
          {/* <div>
            <Link to="/">
              <img
                className="w-72 md:w-48  md:ml-5"
                src="https://i.ibb.co/5KY6ctJ/mylogo.png"
                alt=""
              />
            </Link>
          </div> */}
          <div>
            <Link to="/" className="text-4xl text-white font-extrabold">
             Your Academy
            </Link>
          </div>
        </div>




        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-xl space-x-6">
            <div>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-black" : "text-white link link-hover"
                }
                to="/"
              >
                Home
              </NavLink>
            </div>
            <div>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-black" : "text-white link link-hover"
                }
                to="/instructors"
              >
                {" "}
                Instructors
              </NavLink>
            </div>
            <div>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-black" : "text-white link link-hover"
                }
                to="/allClasses"
              >
                {" "}
                Classes
              </NavLink>
            </div>
            <div>
              {user ? (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-black" : "text-white link link-hover"
                  }
                  to="/dashboard/welcome"
                >
                  {" "}
                  Dashboard
                </NavLink>
              ) : (
                ""
              )}
            </div>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="md:flex-none">
            {user ? (
              <div className="flex items-center">
                <div
                  className="relative mr-3 w-10 rounded-full tooltip tooltip-left "
                  data-tip={user?.displayName}
                >
                  <img
                    className="rounded-full border-2 border-cyan-600 "
                    referrerPolicy="no-referrer"
                    src={user?.photoURL}
                    alt="user"
                  />
                </div>

                <button onClick={logOut} className="btn-custom-sm mr-5">
                  Log Out
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn-custom-sm  mr-5">
                Login
              </Link>
            )}
          </div>

          <div>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                onClick={handleToggle}
                checked={theme === "light" ? false : true}
                className="tooltip tooltip-left"
                data-tip="Dark Mode"
              />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
    </Headroom>
  );
};

export default Nav;
