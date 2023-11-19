import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Pages/Main/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Appointment from "../Pages/Appointment/Appointment";
import SignUp from "../signup/SignUp";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
      },
        {
          path:'/appointment',
          element:<PrivateRoutes><Appointment></Appointment></PrivateRoutes>
        }

      ]
    },
  ]);