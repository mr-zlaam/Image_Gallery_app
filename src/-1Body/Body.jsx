import { useContext } from "react";
import { ThemeContext } from "../1Context/Context";
import App from "../App";
import "./Body.css";
import Navbar from "../3Components/1Navbar/jsx/Navbar";

const Body = () => {
  const { isDarkMode, isModalOpen } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`${
          isDarkMode ? "dark_mode" : "light_mode"
        } h-[100vh] w-[100%] main_page`}
      >
        {!isModalOpen && (
          <>
            <div className="another_psudo_div" />
            <div className="navbar_controller_main">
              <Navbar />
            </div>
          </>
        )}

        <div>
          <App />
        </div>
      </div>
    </>
  );
};

export default Body;
