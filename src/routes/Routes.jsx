import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import Login from "../shared/login/login/Login";
import Register from "../shared/login/register/Register";
import ErrorPage from "../shared/components/ErrorPage";
import Dashboard from "../layouts/Dashboard";
import AllUser from "../pages/dashboard/allUser/AllUser";
import SelectedClasses from "../pages/dashboard/forStudent/selectedClasses/SelectedClasses";
import EnrolledClasses from "../pages/dashboard/forStudent/enrolledClasses/EnrolledClasses";
import PaymentsHistory from "../pages/dashboard/forStudent/payments/PaymentsHistory";
import ManageClasses from "../pages/dashboard/forAdmin/manage/ManageClasses";
import ManageUsers from "../pages/dashboard/forAdmin/manage/ManageUsers";
import AddClass from "../pages/dashboard/forInstructor/AddClass";
import MyClasses from "../pages/dashboard/forInstructor/Myclasses";
import AllInstructors from "../pages/home/home/Instructors/AllInstructors";
import AllClasses from "../pages/home/home/PopularClasses/AllClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "instructors",
        element: <AllInstructors></AllInstructors>,
      },
      {
        path: "allClasses",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "users",
        element: <AllUser></AllUser>,
      },
      {
        path: "selected",
        element:<SelectedClasses></SelectedClasses>,
      },
      {
        path: "enrolled",
        element:<EnrolledClasses></EnrolledClasses>,
      },
      {
        path: "payments",
        element:<PaymentsHistory></PaymentsHistory>,
      },        
      // admin Routes
      {
        path: "manageClasses",
        element:<ManageClasses></ManageClasses>,
      },
      {
        path: "manageUsers",
        element:<ManageUsers></ManageUsers>,
      },
      //instructors routes
      {
        path: "addClass",
        element:<AddClass></AddClass>
      },
      {
        path: "myClasses",
        element:<MyClasses></MyClasses>
      },
    ],
  },
]);
