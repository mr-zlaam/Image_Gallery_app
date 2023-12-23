import { useContext } from "react";
import "./AccountModal.css";
import { RxCross2 } from "react-icons/rx";
import { RiAccountCircleFill, RiLogoutCircleRLine } from "react-icons/ri";
import { ThemeContext } from "../1Context/Context";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../0Firebase/Firebaseconfig";
import { useNavigate } from "react-router-dom";

const AccountModal = ({ AccountCloseModal }) => {
  const navigate = useNavigate();
  const { isDarkMode, userData, setUserData } = useContext(ThemeContext);

  onAuthStateChanged(auth, (currentUser) => {
    setUserData(currentUser);
  });
  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };
  return (
    <>
      <div
        className={`Account_modal relative cursor-default shadow-lg ${
          isDarkMode ? "bg-white" : "bg-gray-600"
        }`}
      >
        <RxCross2
          className={`absolute right-5 top-5 cursor-pointer ${
            !isDarkMode ? "text-white" : "text-black"
          } `}
          size={25}
          onClick={AccountCloseModal}
        />
        <div className="relative top-10">
          <div className="modal text-black text-center mt-4 w-fit m-auto">
            <RiAccountCircleFill
              size={70}
              className={`${!isDarkMode ? "text-white" : "text-black"}`}
            />
          </div>
          <p
            className={`text-center text-3xl font-bold text-black
          ${!isDarkMode ? "text-white" : "text-black"} text_hello_user
          `}
          >
            Hello User!
          </p>
          <p
            className={`text-center text-md font-semibold text-black
          ${!isDarkMode ? "text-white" : "text-black"}
          mail_user`}
          >
            {userData?.email}
          </p>
          <div
            onClick={logout}
            className={
              "w-fit m-auto mt-4 flex items-center gap-3 cursor-pointer"
            }
          >
            <RiLogoutCircleRLine
              size={44}
              className={`
            ${!isDarkMode ? "text-white" : "text-black"} theme_toggler
            `}
            />
            <span
              className={`text-black font-semibold  text-lg
            ${!isDarkMode ? "text-white" : "text-black"}
            `}
            >
              {!userData?.email ? <span>Login</span> : <span>Logout</span>}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountModal;
