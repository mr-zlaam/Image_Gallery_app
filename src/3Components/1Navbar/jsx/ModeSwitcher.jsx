import { useContext, useEffect } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { ThemeContext } from "../../../1Context/Context";

const ModeSwitcher = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("isDarkMode");
    setIsDarkMode(storedDarkMode === "true");
  }, [setIsDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      localStorage.setItem("isDarkMode", newDarkMode);
      return newDarkMode;
    });
  };

  const toggleLightMode = () => {
    setIsDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      console.log(newDarkMode);
      localStorage.setItem("isDarkMode", newDarkMode);
      return newDarkMode;
    });
  };

  return (
    <div className="theme_toggler">
      {isDarkMode ? (
        <BsSunFill
          onClick={toggleLightMode}
          className="icon_sun cursor-pointer toggler_icon"
        />
      ) : (
        <BsFillMoonFill
          onClick={toggleDarkMode}
          className="icon_moon cursor-pointer toggler_icon"
        />
      )}
    </div>
  );
};

export default ModeSwitcher;
