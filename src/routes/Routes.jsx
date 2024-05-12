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
import RoomsDetails from "../pages/RoomsDetails.jsx";
import Booking from "../pages/Booking.jsx";
import Review from "../pages/Review.jsx";
import BookingUpdate from "../pages/BookingUpdate.jsx";

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
        element: <Rooms />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/rooms`)
      },
      {
        path: "/roomsDetails/:id",
        element: <PrivateRoutes><RoomsDetails /></PrivateRoutes>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/rooms/${params.id}`)
      },
      {
        path: "/review/:id",
        element: <PrivateRoutes><Review /></PrivateRoutes>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/rooms/${params.id}`)
      },
      {
        path: "/bookingUpdate/:id",
        element: <PrivateRoutes><BookingUpdate /></PrivateRoutes>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/bookings/${params.id}`)
      },
      {
        path: "/myBookings",
        element: <PrivateRoutes><MyBookings /></PrivateRoutes>
      },
      {
        path: "/booking/:id",
        element: <PrivateRoutes><Booking /></PrivateRoutes>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/rooms/${params.id}`)
      },
    ], 
  },
]);

export default router