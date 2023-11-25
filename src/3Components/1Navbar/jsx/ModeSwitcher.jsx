import { useContext } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { ThemeContext } from "../../../1Context/Context";
const ModeSwitcher = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const DarkMode = () => {
    setIsDarkMode(false);
  };
  const LightMode = () => {
    setIsDarkMode(true);
  };

  return (
    <>
      {isDarkMode ? (
        <div onClick={DarkMode} className="theme_toggler">
          <BsSunFill className="icon_sun cursor-pointer toggler_icon  " />
        </div>
      ) : (
        <div onClick={LightMode} className="theme_toggler">
          <BsFillMoonFill className="icon_moon cursor-pointer toggler_icon  " />
        </div>
      )}
    </>
  );
};
export default ModeSwitcher;
