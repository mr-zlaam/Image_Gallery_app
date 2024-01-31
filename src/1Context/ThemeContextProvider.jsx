import { useState } from "react";
import { ThemeContext } from "./Context";

const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSelectedImg, setIsSelectedImg] = useState(null);
  const [isImgLoading, setIsImgLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [userData, setUserData] = useState({});
  const [uploadedByCurrentUser, setUploadedByCurrentUser] = useState("");
  return (
    <ThemeContext.Provider
      value={{
        uploadedByCurrentUser,
        setUploadedByCurrentUser,
        isDarkMode,
        setIsDarkMode,
        isSelectedImg,
        setIsSelectedImg,
        isModalOpen,
        setIsModalOpen,
        isImgLoading,
        setIsImgLoading,
        loading,
        setLoading,
        isOpenMenu,
        setIsOpenMenu,
        userData,
        setUserData,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
