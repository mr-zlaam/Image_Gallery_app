import "../3Components/1Navbar/css/Navbar.css";
import "../3Components/1Navbar/jsx/MobileNavbar.css";
import { useState } from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import AccountModal from "./AccountModal";
const LogoutIcon = () => {
  const [isOpenAccountModal, setIsOpenAccountModal] = useState(false);
  const AccountOpenModal = () => {
    setIsOpenAccountModal(true);
  };
  const AccountCloseModal = () => {
    setIsOpenAccountModal(false);
  };
  return (
    <>
      {isOpenAccountModal && (
        <div className="accountModal_closer" onClick={AccountCloseModal} />
      )}{" "}
      <div className="AccountModalComponet">
        <RiAccountCircleFill
          className="account_icon  cursor-pointer relative "
          size={30}
          onClick={AccountOpenModal}
        />
        {isOpenAccountModal && (
          <>
            <AccountModal AccountCloseModal={AccountCloseModal} />
          </>
        )}
      </div>
    </>
  );
};

export default LogoutIcon;
