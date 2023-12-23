// ? *********************eslint-disable react/no-unescaped-entities *************

import { useContext, useState } from "react";
import { ThemeContext } from "../1Context/Context";
import "./SignUpSignIn.css";
import { Link, useNavigate } from "react-router-dom";
import ModeSwitcher from "../3Components/1Navbar/jsx/ModeSwitcher";
import { auth } from "../0Firebase/Firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

import Loader from "../Loader/Loader";
const SignsUp = () => {
  const navigate = useNavigate();
  const { isDarkMode, loading, setLoading } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputFieldError, setInputFieldError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [catchError, setCatchError] = useState("");

  //            ?  onchange funtions

  const emailHandleChange = (event) => {
    setEmail(event.target.value);
    setInputFieldError("");
  };
  const passwordHandleChange = (event) => {
    setPassword(event.target.value);
    setInputFieldError("");
  };

  // *********************************Add user********************
  const Adduser = async () => {
    if ((email, password).length <= 0)
      return setInputFieldError("⚠Please fill the input fields");
    setEmail("");
    setPassword("");
    try {
      setLoading(true);
      const user = await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);
      console.log(user);
      setSuccessMsg("✅ Account Created Successfully");
      setTimeout(() => {
        setSuccessMsg("");
      }, 3000);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      setCatchError("⚠❎ Something Went Wrong");
      console.log(error);
      setTimeout(() => {
        setCatchError("");
      }, 1500);
    }
  };
  return (
    <>
      <div className="w-fit m-auto relative top-10">
        <ModeSwitcher />
      </div>
      <div className="main_form flex justify-center items-center h-[85vh] flex-col">
        <div
          className={` form h-[50vh] ${
            isDarkMode ? "bg-black/30" : "light_mode"
          }  rounded-lg w-[375px] flex flex-col justify-center items-center px-5 ${
            isDarkMode ? "shadow_dark" : "shadow_light"
          }`}
        >
          <h1
            className={`text-2xl p-3 font-bold ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Sign up
          </h1>
          {loading ? (
            <div className="h-[80vh] flex justify-center items-center flex-col">
              <Loader />
              <span className="text-sm mt-3 font-semibold ">
                Creating new User Account...
              </span>
            </div>
          ) : (
            <>
              <input
                value={email}
                onChange={(event) => {
                  emailHandleChange(event);
                }}
                placeholder="Enter Email"
                autoComplete="off"
                type="email"
                className={`${isDarkMode ? "input_dark" : "input_light"}`}
              />
              <input
                value={password}
                onChange={(event) => {
                  passwordHandleChange(event);
                }}
                placeholder="Create Password"
                autoComplete="off"
                type="password"
                className={`${isDarkMode ? "input_dark" : "input_light"}`}
              />
              <button onClick={Adduser} className="signin_signout my-1">
                Sign up
              </button>
              <p className="font-bold  w-full text-sm text-center  ">
                Already have an Account?
                <Link to={"/login"} className="text-blue-400 ">
                  {" "}
                  Sign in
                </Link>
              </p>
            </>
          )}
          <div className="relative  h-[5vh] w-full">
            <p className=" py-2  text-sm font-bold text-center  w-full absolute top-0 h-full">
              {inputFieldError && inputFieldError}
            </p>
            <p className=" py-2  text-sm font-bold text-center  w-full absolute top-0 h-full ">
              {successMsg && successMsg}
            </p>
            <p className=" py-2  text-sm font-bold text-center  w-full absolute top-0 h-full ">
              {catchError && catchError}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignsUp;
