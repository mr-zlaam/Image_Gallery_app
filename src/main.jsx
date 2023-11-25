import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Body from "./-1Body/Body.jsx";
import ThemeContextProvider from "./1Context/ThemeContextProvider.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>
);
