import React, { useContext, useEffect, useState } from "react";
import "./Images.css";
import { auth, storage, db } from "../../0Firebase/Firebaseconfig";
import { BsTrash3 } from "react-icons/bs";
import {
  getDownloadURL,
  listAll,
  ref,
  getMetadata,
  deleteObject,
} from "firebase/storage";
import "ldrs/cardio";
import { ThemeContext } from "../../1Context/Context";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";

const Images = () => {
  const { setIsSelectedImg, isModalOpen, setIsModalOpen } =
    useContext(ThemeContext);
  const [imgData, setImgData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const ImageListRef = ref(storage, "webimages/");
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await listAll(ImageListRef);
        const promises = response.items.map(async (item) => {
          const url = await getDownloadURL(item);
          const metadata = await getMetadata(item);
          const name = metadata.name;

          if (
            metadata?.customMetadata?.uploadedBy === auth.currentUser?.email
          ) {
            const imgInfo = {
              name: name,
              url: url,
            };
            return imgInfo;
          }
          return null;
        });

        const imageData = await Promise.all(promises);

        const filteredImageData = imageData.filter(
          (imgInfo) => imgInfo !== null
        );

        setImgData(filteredImageData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(true);
        setTimeout(() => {
          setError("⚠ Please Connect with internet");
          setIsLoading(false);
        }, 5000);
        setIsLoading(false);
      }
    };
    fetchImages();

    const pageName = "Zlaam Gallery | Images";
    document.title = pageName;
  }, []);

  const handleDeleteImage = async (imageName, id) => {
    const imageRef = ref(storage, `webimages/${imageName}`);

    try {
      await deleteObject(imageRef);

      setImgData((prevData) =>
        prevData.filter((imgInfo) => imgInfo.name !== imageName)
      );
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
  };
  const FullImageModal = (imgInfo) => {
    setIsModalOpen(true);
    setIsSelectedImg(imgInfo);
  };

  return (
    <>
      {isLoading ? (
        <div className="h-[80vh] flex justify-center items-center flex-col">
          <Loader />
        </div>
      ) : (
        <div>
          {imgData.length === 0 ? (
            <div className="h-[80vh]  flex justify-center items-center">
              <img
                src="https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Sad-Face-Emoji.png"
                alt=""
                width={30}
                className="select-none "
              />
              <p className="font-semibold text-xl ">No Image Found</p>
            </div>
          ) : (
            <div className="main_img ">
              {error ? (
                <div className="h-[80vh] flex items-center justify-center">
                  <div>{error}</div>
                </div>
              ) : (
                <div
                  className={`image_grid relative ${
                    isModalOpen ? "overflow-hidden " : "overflow-auto"
                  }`}
                >
                  {imgData?.map((imgInfo, index) => (
                    <React.Fragment key={imgInfo.url}>
                      <div className="card">
                        <Link className="card_child relative">
                          <img
                            key={imgInfo.url}
                            src={imgInfo.url}
                            alt={imgInfo.name}
                            width={300}
                            onClick={() => FullImageModal(imgInfo.url)}
                          />
                        </Link>
                        <div className="dlt_div">
                          <button
                            onClick={() => handleDeleteImage(imgInfo.name)}
                            className="signin_signout delete_btn"
                          >
                            <BsTrash3 size={25} />
                          </button>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Images;
