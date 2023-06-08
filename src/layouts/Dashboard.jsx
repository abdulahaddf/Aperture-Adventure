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
import { AiOutlineSelect } from "react-icons/ai";
import Loader from "../shared/components/Loader";

const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);
  if(loading){
    return <Loader></Loader>
  }
  const isAdmin =false;
  const isInstructor = true;
  const cart = [];
  return (
    <div>
      <div className="drawer lg:drawer-open">
      <div className="">
          <label
            htmlFor="my-drawer-2"
            className="btn-custom-sm drawer-button lg:hidden"> Open drawer </label>
          </div>
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
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
                    className="w-48 ml-5"
                    src="https://i.ibb.co/5KY6ctJ/mylogo.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="flex flex-col items-center mt-6 -mx-2">
                <Link to="/dashboard">
                  <img
                    className="object-cover w-20 h-20 mx-2 rounded-2xl"
                    src={user?.photoURL}
                    alt="avatar"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <Link to="/dashboard">
                  <h4 className="mx-2 mt-2 font-medium text-white  hover:underline">
                    {user?.displayName}
                  </h4>
                </Link>
                <Link to="/dashboard">
                  <p className="mx-2 mt-1 text-sm font-medium text-white hover:underline">
                    {user?.email}
                  </p>
                </Link>
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
                      <FaRegFlag></FaRegFlag> My Selected Classes{" "}
                      <span className="badge inline">+{cart?.length || 0}</span>
                    </NavLink>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
