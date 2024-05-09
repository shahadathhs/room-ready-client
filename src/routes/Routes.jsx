import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layouts/MainLayout.jsx'
import Home from "../home/Home.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Login from './../authentication/Login';
import Register from "../authentication/Register.jsx";

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
    ], 
  },
]);

export default router