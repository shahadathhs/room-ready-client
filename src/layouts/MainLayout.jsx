import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar.jsx";
import Footer from "../shared/Footer.jsx";

const MainLayout = () => {
  return (
    <div className="container mx-auto space-y-4 overflow-hidden">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;