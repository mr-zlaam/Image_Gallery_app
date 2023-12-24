import { useContext } from "react";
import "./Loader.css";
import { ThemeContext } from "../1Context/Context";
const Loader = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      <div className="loader">
        <div
          className={` ${
            isDarkMode ? "loader-square-dark" : "loader-square-light"
          }`}
        ></div>
        <div
          className={`${
            isDarkMode
              ? "loader-square-dark loader-square"
              : "loader-square-light loader-square"
          }`}
        ></div>
        <div
          className={`${
            isDarkMode
              ? "loader-square-dark loader-square"
              : "loader-square-light loader-square"
          }`}
        ></div>
        <div
          className={`${
            isDarkMode
              ? "loader-square-dark loader-square"
              : "loader-square-light loader-square"
          }`}
        ></div>
        <div
          className={`${
            isDarkMode
              ? "loader-square-dark loader-square"
              : "loader-square-light loader-square"
          }`}
        ></div>
        <div
          className={`${
            isDarkMode
              ? "loader-square-dark loader-square"
              : "loader-square-light loader-square"
          }`}
        ></div>
        <div
          className={`${
            isDarkMode
              ? "loader-square-dark loader-square"
              : "loader-square-light loader-square"
          }`}
        ></div>
      </div>
    </>
  );
};

export default Loader;
