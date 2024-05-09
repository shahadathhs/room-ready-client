import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layouts/MainLayout.jsx'
import Home from "../home/Home.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ], 
  },
]);

export default router