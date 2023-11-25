import { useContext } from "react";
import "./Home.css";
import { ThemeContext } from "../../1Context/Context";
import { Link } from "react-router-dom";
const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <div className="main_home">
        <div className="home_div">
          <div className="desc_home">
            <h1 className="font-bold cursor-default">
              Explore a world of captivating images. Immerse yourself in
              artistry and photography on
              <Link
                to={"/images"}
                className={`${
                  isDarkMode ? "text-blue-300" : "text-blue-600"
                } cursor-pointer hover:opacity-80 ${
                  isDarkMode ? "blue_description" : "blue_description_light"
                } gallery`}
              >
                {" "}
                Zlaam Gallery
              </Link>
            </h1>
          </div>
          <div className="image_homeControll">
            <div className="home_img_div">
              <img src="./png.jpg" alt="gallery_image" width={400} />
            </div>
          </div>
        </div>
        <div className="home_btn_div">
          <button className="home_btn">
            <Link to={"login"}>GetStarted</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
