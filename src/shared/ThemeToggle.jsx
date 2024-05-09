import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiBoomerangSun } from "react-icons/gi";
import useTheme from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="btn btn-outline shadow-xl btn-sm">
      <label className="swap swap-rotate">
        <input onClick={toggleTheme} type="checkbox" className="theme-controller"  />
        {
          theme === 'light' 
          ?
          <div className="text-lg"><BsFillMoonStarsFill /></div>
          :
          <div className="text-lg"><GiBoomerangSun /></div>
        }
      </label>
    </div>
  );
};

export default ThemeToggle;