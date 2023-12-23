import { RxCross2 } from "react-icons/rx";
import "./MobileNavbar.css";
import { useContext } from "react";
import ModeSwitcher from "./ModeSwitcher";
import { BsUpload } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../1Context/Context";
import LogoutIcon from "../../../3.5 SmallComponents/Logout";
const MobileNavbar = ({ setIsOpenMenu, isOpenMenu }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const Close_menu = () => {
    setIsOpenMenu(false);
  };
  const navbar_closer_click = () => {
    setIsOpenMenu(false);
  };
  return (
    <>
      <div
        className={` ${isOpenMenu ? "transparent_div" : "hidden"}`}
        onClick={navbar_closer_click}
      />
      <div
        className={` ${
          isOpenMenu ? "ul_controller_visible" : "ul_controller_hidden"
        }  ${isDarkMode ? "ul_dark" : "ul_light"}`}
      >
        <div className="cross_icon">
          <RxCross2 size={25} onClick={Close_menu} className="cross_icon" />
        </div>
        <ul className={`res_list`}>
          <li>
            <Link onClick={navbar_closer_click} to="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={navbar_closer_click}
              to={"/images"}
              className="links"
            >
              Images
            </Link>
          </li>
          <li>
            <Link onClick={navbar_closer_click} to={"/about"} className="links">
              About
            </Link>
          </li>
          <li>
            <Link onClick={navbar_closer_click} to="/upload " className="">
              <BsUpload className="cursor-pointer upload_icon" />
            </Link>
          </li>
          <span onClick={navbar_closer_click}>
            <ModeSwitcher />
          </span>
          <span className="theme_toggler">
            <LogoutIcon />
          </span>
        </ul>
      </div>
    </>
  );
};

export default MobileNavbar;
