import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layouts/MainLayout.jsx'
import Home from "../home/Home.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Login from './../authentication/Login';
import Register from "../authentication/Register.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import ContactUs from "../pages/ContactUs.jsx";
import Rooms from "../pages/Rooms.jsx";
import MyBookings from "../pages/MyBookings.jsx";
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/aboutUs",
        element: <AboutUs />
      },
      {
        path: "/contactUs",
        element: <ContactUs />
      },
      {
        path: "/rooms",
        element: <Rooms />
      },
      {
        path: "/myBookings",
        element: <PrivateRoutes><MyBookings /></PrivateRoutes>
      },
    ], 
  },
]);

export default router