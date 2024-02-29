/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { ThemeContext } from "../1Context/Context";
import "./SignUpSignIn.css";
import { Link, useNavigate } from "react-router-dom";
import ModeSwitcher from "../3Components/1Navbar/jsx/ModeSwitcher";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../0Firebase/Firebaseconfig";
import Loader from "../Loader/Loader";

//???????????????????????????????????????????????????????????????????????????

const Login = () => {
  const { isDarkMode, loading, setLoading } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputFieldError, setInputFieldError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [catchError, setCatchError] = useState("");

  const navigate = useNavigate();

  // *****************************
  const emailHandleChange = (event) => {
    setEmail(event.target.value);
    setInputFieldError("");
  };
  const passwordHandleChange = (event) => {
    setPassword(event.target.value);
    setInputFieldError("");
  };

  // *************Add user********************
  const LoginIntoApp = async () => {
    if ((email, password).length <= 0)
      return setInputFieldError("⚠Please fill the input fields");
    setEmail("");
    setPassword("");
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      setSuccessMsg("✅ Successfully Signed in");
      setTimeout(() => {
        setSuccessMsg("");
      }, 3000);
      navigate("/images");
    } catch (error) {
      setCatchError("⚠❎ Please Create Account First");

      setLoading(false);
    }
  };
  return (
    <>
      <div className="relative m-auto w-fit top-10 switch">
        <ModeSwitcher />
      </div>
      {loading ? (
        <div className="h-[80vh] flex justify-center items-center flex-col">
          <Loader />
          <span className="mt-3 text-sm font-semibold ">Wait a Moment...</span>
        </div>
      ) : (
        <div className="main_form flex justify-center items-center h-[96vh]  flex-col overflow-auto">
          <div
            className={` form h-[400px] ${
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
              Sign in
            </h1>
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
              placeholder="Enter Password"
              autoComplete="off"
              type="password"
              className={`${isDarkMode ? "input_dark" : "input_light"}`}
            />
            <button onClick={LoginIntoApp} className="my-1 signin_signout">
              Login
            </button>
            <p className="w-full text-sm font-bold text-center ">
              Didn't have an Account?
              <Link to={"/SignUp"} className="text-blue-400 ">
                {" "}
                Sign up
              </Link>
            </p>
            <div className="relative  h-[5vh] w-full">
              <p className="absolute top-0 w-full h-full py-2 text-sm font-bold text-center ">
                {inputFieldError && inputFieldError}
              </p>
              <p className="absolute top-0 w-full h-full py-2 text-sm font-bold text-center ">
                {successMsg && successMsg}
              </p>
              <p className="absolute top-0 w-full h-full py-2 text-sm font-bold text-center ">
                {catchError && catchError}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
