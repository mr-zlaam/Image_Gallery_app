import { useContext, useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "./UploadFile.css";
import { storage } from "../../0Firebase/Firebaseconfig";
import { ref, uploadBytes } from "firebase/storage";
import { ThemeContext } from "../../1Context/Context";
import { useNavigate } from "react-router-dom";
import "ldrs/helix";

import { v4 } from "uuid";
import Loader from "../../Loader/Loader";
const UploadFile = () => {
  const [imgUpload, setImgUpload] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState("Images Must be in Png/Jpeg format");
  const [successMsg, setSuccessMsg] = useState("");
  const [emptyError, setEmptyError] = useState("");
  const [internetError, setinternetError] = useState("");
  const navigate = useNavigate();

  const { isDarkMode } = useContext(ThemeContext);
  const handleOnchageUploader = (event) => {
    let types = ["image/jpeg", "image/png"];
    let selected = event.target.files[0];

    if (selected && types.includes(selected.type)) {
      setImgUpload(selected);
      setError("");
    } else {
      setImgUpload(null);
    }
  };
  const UploadImgFromFirebase = async () => {
    try {
      if (imgUpload === null) {
        setEmptyError("⚠ Please Select an Image");

        setTimeout(() => {
          setEmptyError("");
        }, 1500);
        return;
      }
      const ImageRef = ref(storage, `webimages/${imgUpload.name + v4()}`);
      setIsloading(true);
      await uploadBytes(ImageRef, imgUpload);
      setIsloading(false);
      setSuccessMsg("✅ Image Uploaded Successfully");
      setImgUpload(null);
      setTimeout(() => {
        navigate("/images");
      }, 1000);
    } catch (error) {
      setIsloading(false);
      setinternetError("⚠ Intrenet is too slow");
    }
  };
  useEffect(() => {
    const pageName = "Zlaam Gallery | Upload";
    document.title = pageName;
  }, []);
  return (
    <>
      <div className="main_uploader_controll">
        {internetError ? (
          <div className="h-screen flex justify-center items-center">
            {internetError}
          </div>
        ) : (
          <div>
            {isloading ? (
              <div className="h-[80vh] flex justify-center items-center flex-col">
                <Loader />
                <span className="text-sm mt-3 font-semibold ">
                  Uploading...
                </span>
              </div>
            ) : (
              <div className="h-[80vh] w-full flex justify-center items-center">
                <input
                  type="file"
                  id="upload"
                  className="hidden"
                  onChange={(event) => {
                    handleOnchageUploader(event);
                  }}
                />
                <div className="upload_label_and_button flex flex-col items-center">
                  {imgUpload === null ? (
                    <label htmlFor="upload">
                      <AiOutlinePlusCircle className={`uploader_label`} />
                    </label>
                  ) : (
                    <button
                      onClick={UploadImgFromFirebase}
                      className="upload_btn"
                    >
                      Upload Image
                    </button>
                  )}
                  <p
                    className={`img_formate_text h-[5vh]  flex items-center font-bold ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {imgUpload && imgUpload.name}
                  </p>
                  <p
                    className={`font-bold text-xl ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    <span className="main_error">{error && error}</span>
                    <span className="msg  items-center  flex">
                      <p className="text-center">{successMsg && successMsg}</p>
                    </span>
                    <span className="msg h-[1.5vh] items-center  flex mt-2 ">
                      <p className="text-center">{emptyError && emptyError}</p>
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default UploadFile;
