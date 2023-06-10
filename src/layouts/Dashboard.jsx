/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import {
  FaWallet,
  FaHome,
  FaUserEdit,
  FaEdit,
  FaGraduationCap,
  FaRegFlag,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineSelect } from "react-icons/ai";
import Loader from "../shared/components/Loader";
import useAdmin from "../hooks/UseAdmin";
import useInstructor from "../hooks/UseInstructor";

const Dashboard = () => {
  const { user, loading,logOut } = useContext(AuthContext);
  if(loading){
    return <Loader></Loader>
  }

 
const [isAdmin] = useAdmin();
console.log(isAdmin);

const[isInstructor] = useInstructor();
console.log(isInstructor);
  return (
    <div>
      <div className="drawer lg:drawer-open">
      <div className="">
          <label
            htmlFor="my-drawer-2"
            className="btn-custom-sm drawer-button mr-10 lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg> </label>
          </div>
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* All routes information will be shown here */}
          <Outlet></Outlet>
         
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="menu p-4 w-80 h-full bg-cyan-600 text-base-content">
            {/* Branding & Profile Info */}
            <div>
              <div className="w-full hidden md:flex py-2 justify-center items-center mx-auto">
                <Link to="/">
                  <img
                    className="w-48 ml-5 "
                    src="https://i.ibb.co/5KY6ctJ/mylogo.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="flex flex-col items-center mt-6 -mx-2">
                <Link to="/dashboard/welcome">
                  <img
                    className="object-cover w-20 h-20 mx-2 rounded-2xl border-2 border-white"
                    src={user?.photoURL}
                    alt="avatar"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <Link to="/dashboard/welcome">
                  <h4 className="mx-2 mt-2 font-medium text-white  hover:underline">
                    {user?.displayName}
                  </h4>
                </Link>
              
                  <p className="mx-2 mt-1 text-sm font-medium text-white hover:underline">
                    {user?.email}
                  </p>
               
              </div>
            </div>
            <br />
            <hr />
            <hr />
            {/* Links based on user */}
            <div className="text-white font-medium text-md">
              {isAdmin ? (
                <>
                  {/* links for admin */}
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-black bg-white"
                          : "text-white link link-hover"
                      }
                      to="/"
                    >
                      <FaHome></FaHome>Home
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-black bg-white"
                          : "text-white link link-hover"
                      }
                      to="/dashboard/manageClasses"
                    >
                      <FaEdit></FaEdit> Manage Classes
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-black bg-white"
                          : "text-white link link-hover"
                      }
                      to="/dashboard/manageUsers"
                    >
                      <FaUserEdit></FaUserEdit> Manage Users
                    </NavLink>
                  </li>
                </>
              ) : isInstructor ? (
                <>
                  {/* links for instructors */}
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-black bg-white"
                          : "text-white link link-hover"
                      }
                      to="/"
                    >
                      <FaHome></FaHome>Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-black bg-white"
                          : "text-white link link-hover"
                      }
                      to="/dashboard/addClass"
                    >
                      <FaEdit></FaEdit>Add a Class
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-black bg-white"
                          : "text-white link link-hover"
                      }
                      to="/dashboard/myClasses"
                    >
                      <FaGraduationCap></FaGraduationCap>My Classes
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  {/* links for normal user */}
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-black bg-white"
                          : "text-white link link-hover"
                      }
                      to="/"
                    >
                      <FaHome></FaHome>Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-black bg-white"
                          : "text-white link link-hover"
                      }
                      to="/dashboard/selected"
                    >
                      <FaRegFlag></FaRegFlag> My Selected Classes </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-black bg-white"
                          : "text-white link link-hover"
                      }
                      to="/dashboard/enrolled"
                    >
                      <AiOutlineSelect></AiOutlineSelect> My Enrolled Classes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-black bg-white"
                          : "text-white link link-hover"
                      }
                      to="/dashboard/payments"
                    >
                      <FaWallet></FaWallet> Payment History
                    </NavLink>
                  </li>
                </>
              )}
            </div>

            <hr /><hr />
              <div className="flex items-center text-white font-semibold mt-5 btn btn-ghost btn-sm w-fit " onClick={logOut}> <FiLogOut></FiLogOut ><h1>Log Out</h1></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
