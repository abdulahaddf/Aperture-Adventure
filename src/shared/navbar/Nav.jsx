import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex items-center sticky top-0 z-10 w-full text-center ">
      <div className="navbar bg-gradient-to-r from-cyan-900">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-sm btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>



            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-cyan-500 rounded-box w-52 "
              
            >



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

          <div>
            <Link to="/">
              <img
                className="w-48 ml-5"
                src="https://i.ibb.co/5KY6ctJ/mylogo.png"
                alt=""
              />
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
                  <img className="rounded-full border-2 border-cyan-600 " src={user?.photoURL} />
                </div>
                <button onClick={handleLogOut} className="btn-custom-sm mr-5">
                  Log Out
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn-custom-sm  mr-5">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
