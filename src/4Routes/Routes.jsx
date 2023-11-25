import {} from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../3Components/2Home/Home";
import Images from "../3Components/3Imagess/Images";
import About from "../3Components/4About/About";
import UploadFile from "../3Components/UploadFile/UploadFile";
import Login from "../1Authentication/Login";
import SignsUp from "../1Authentication/SignsUp";
import RouteProtector from "../ProtectedRoutes/ProtectedRoute";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignsUp />} />
        <Route path="/" element={<RouteProtector Component={Home} />} />
        <Route path="/images" element={<RouteProtector Component={Images} />} />
        <Route path="/about" element={<RouteProtector Component={About} />} />
        <Route
          path="/upload"
          element={<RouteProtector Component={UploadFile} />}
        />
      </Routes>
    </>
  );
};

export default MyRoutes;
