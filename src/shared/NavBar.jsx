import ThemeToggle from "./ThemeToggle";
import { FaHamburger } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";


const NavBar = () => {

  const navLinks =
		<>
        <motion.li
        whileHover={{ scale:1.1 }}
        >
          <NavLink 
          className={({ isActive }) => isActive 
          ? 
          'text-indigo-600 font-semibold border-b-2 border-blue-600' 
          : 
          undefined
          }
          to="/">Home</NavLink>
        </motion.li>
        <motion.li
        whileHover={{ scale:1.1 }}
        >
          <NavLink 
          className={({ isActive }) => isActive 
          ? 
          'text-indigo-600 font-semibold border-b-2 border-blue-600' 
          : 
          undefined
          }
          to="/about">About</NavLink>
        </motion.li>
        <motion.li
        whileHover={{ scale:1.1 }}
        >
          <NavLink 
          className={({ isActive }) => isActive 
          ? 
          'text-indigo-600 font-semibold border-b-2 border-blue-600' 
          : 
          undefined
          }
          to="/blog">Blog</NavLink>
        </motion.li>
		</>

  return (
    <div className="navbar bg-base-100 m-1 border-2 rounded-md shadow-md container mx-auto">
      {/* nav left */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-outline btn-sm shadow-md text-lg">
            <FaHamburger />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-28 space-y-3">
            {navLinks}
          </ul>
        </div>
      </div>
      {/* nav center */}
      <div className="navbar-center">
          <motion.div
            whileHover={{ scale: 1.1}}
          >
            <Link to="/" className="btn btn-outline border-0 sm:text-xl">RoomReady</Link>
          </motion.div>
      </div>
      {/* nav end */}
      <div className="navbar-end">
        {/* theme toggle */}
				<ThemeToggle></ThemeToggle>
      </div>
    </div>
  );
};

export default NavBar;