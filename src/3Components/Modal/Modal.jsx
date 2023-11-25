import { useContext, useEffect } from "react";
import "./Modal.css";
import { ThemeContext } from "../../1Context/Context";
import { motion } from "framer-motion";
import { Blurhash } from "react-blurhash";
const Modal = () => {
  const {
    isSelectedImg,
    setIsModalOpen,
    isModalOpen,
    isImgLoading,
    setIsImgLoading,
  } = useContext(ThemeContext);
  const closeTheModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsImgLoading(true);
    };
    img.src = isSelectedImg;
  }, [isSelectedImg]);
  return (
    <>
      {isModalOpen && (
        <div onClick={closeTheModal} className="modal_closer_div" />
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="modal_handler_div"
      >
        {!isImgLoading && (
          <Blurhash
            hash="LDHxc_E22z?H00s:nzM{03xv;JNG"
            width={"100%"}
            height={"100%"}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        )}
        {isImgLoading && (
          <motion.img
            initial={{ y: "-100vh" }}
            animate={{ y: "0vh" }}
            src={isSelectedImg}
            alt=""
          />
        )}
      </motion.div>
    </>
  );
};

export default Modal;
