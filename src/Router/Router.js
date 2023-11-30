import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Appointment from "../Pages/Appointment/Appointment";
import SignUp from "../signup/SignUp";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import DashBoard from "../Pages/DashBoard/DashBoard";
import MyAppointment from "../Pages/DashBoard/MyAppointment";
import MyReviews from "../Pages/DashBoard/MyReviews";
import AllUsers from "../Pages/DashBoard/AllUsers";
import AddDoctor from "../Pages/DashBoard/AddDoctor/AddDoctor";
import ShowAllDoctor from "../Pages/DashBoard/ShowAllDoctor";

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
        },
        {
          path: 'dashboard',
          element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
          children: [
            {
              path: 'myAppointment',
              element: <MyAppointment></MyAppointment>
            },
            {
              path: 'myreviews',
              element: <MyReviews></MyReviews>
            },
            {
              path: 'allUsers',
              element: <AllUsers></AllUsers>
            },
            {
              path:'AddNewDoctor',
              element:<AddDoctor></AddDoctor>
            },
            {
              path:'AllDoctors',
              element:<ShowAllDoctor></ShowAllDoctor>
            }
            
          ]
        }
       

      ]
    },
    
  ]);