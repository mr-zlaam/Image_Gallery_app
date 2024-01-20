import { useContext, useEffect } from "react";
import "./Home.css";
import { ThemeContext } from "../../1Context/Context";
import { Link } from "react-router-dom";
const Home = () => {
  useEffect(() => {
    const pageName = "Zlaam Gallery | Home";
    document.title = pageName;
  }, []);
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <div className="main_home">
        <div className="home_div">
          <div className="desc_home">
            <h1 className="font-bold cursor-default">
              Explore a world of captivating images. Immerse yourself in
              artistry and photography on{" "}
              <Link to={"/images"} className="cta">
                <span
                  className={` hover-underline-animation ${
                    isDarkMode ? "text-blue-400" : "text-blue-500"
                  }`}
                >
                  Zlaam Gallery
                </span>
              </Link>
            </h1>
          </div>
          <div className="image_homeControll">
            <div className="home_img_div">
              <img
                src="https://live.staticflickr.com/65535/53415630457_ff291bac9c_z.jpg"
                alt="gallery_image"
                width={300}
              />
            </div>
          </div>
        </div>
        <div className="home_btn_div">
          <button className="home_btn ">
            <Link to={"login"}>GetStarted</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
