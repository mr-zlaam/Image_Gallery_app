import { useContext } from "react";
import "./Loader.css";
import { ThemeContext } from "../1Context/Context";
const Loader = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      <div class="loader">
        <div
          class={` ${
            isDarkMode ? "loader-square-dark" : "loader-square-light"
          }`}
        ></div>
        <div
          class={`${
            isDarkMode
              ? "loader-square-dark loader-square"
              : "loader-square-light loader-square"
          }`}
        ></div>
        <div
          class={`${
            isDarkMode
              ? "loader-square-dark loader-square"
              : "loader-square-light loader-square"
          }`}
        ></div>
        <div
          class={`${
            isDarkMode
              ? "loader-square-dark loader-square"
              : "loader-square-light loader-square"
          }`}
        ></div>
        <div
          class={`${
            isDarkMode
              ? "loader-square-dark loader-square"
              : "loader-square-light loader-square"
          }`}
        ></div>
        <div
          class={`${
            isDarkMode
              ? "loader-square-dark loader-square"
              : "loader-square-light loader-square"
          }`}
        ></div>
        <div
          class={`${
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
