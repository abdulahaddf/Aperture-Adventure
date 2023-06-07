import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/home/home/Home'
import Login from '../shared/login/login/Login'
import Register from '../shared/login/login/register/Register'



export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
]}
  ])
  