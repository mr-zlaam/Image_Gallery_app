import "./MobileNavbar.css";
import { useContext } from "react";
import { ThemeContext } from "../../../1Context/Context";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import "../css/Navbar.css";
import { useLocation } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
const Navbar = () => {
  const { isDarkMode, setIsModalOpen, isOpenMenu, setIsOpenMenu } =
    useContext(ThemeContext);

  let isLocation = useLocation();
  const isLoginPage = isLocation.pathname === "/login";
  const isSignupPage = isLocation.pathname === "/SignUp";
  if (isLoginPage || isSignupPage) {
    return null;
  }
  const menuclicker = () => {
    setIsOpenMenu(true);
  };
  const modalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="">
        <header
          onClick={modalClose}
          className={`${
            isDarkMode ? "dark_mode" : "light_mode"
          } navbar_header `}
        >
          <nav className=".nav">
            <div className="title">
              <Link to={"/"} className="cursor-pointer title_text">
                Zlaam Gallery
              </Link>
            </div>
            <div className="menu_icon">
              <RiMenu3Line
                size={25}
                onClick={menuclicker}
                className={`${isOpenMenu ? "hidden" : "inline"}`}
              />
            </div>
            <div className="animates">
              <MobileNavbar
                isOpenMenu={isOpenMenu}
                setIsOpenMenu={setIsOpenMenu}
              />
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
