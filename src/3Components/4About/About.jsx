import { useContext, useEffect } from "react";
import { ThemeContext } from "../../1Context/Context";
import "./About.css";
const About = () => {
  const { isDarkMode } = useContext(ThemeContext);
  useEffect(() => {
    const pageName = "Zlaam Gallery | About";
    document.title = pageName;
  }, []);
  return (
    <>
      <div className="h-[85vh] w-full overflow-auto p-5 main_about ">
        <div className="w-full h-full flex justify-center items-center">
          <div className="h-full w-[80%] about_controller">
            <h1 className="text-center font-bold text-4xl h11">
              About Zlaam Gallery
            </h1>
            <p className="py-4 font-semibold text-lg text-justify">
              Welcome to our image gallery, a place where we celebrate the
              beauty and creativity of visual storytelling. We are passionate
              about curating and sharing stunning images from around the world.
              Our mission is to provide a platform for photographers and artists
              to showcase their work and for enthusiasts to discover and
              appreciate the art of photography.
            </p>

            <div className="mt-8">
              <h2 className=" h11 text-3xl font-bold mb-4 text-center">
                Our Story
              </h2>
              <p className=" font-semibold text-justify">
                Our journey began with a shared love for photography and a
                vision to create a space where photographers, both amateur and
                professional, could exhibit their talent. We believe that every
                image has a story to tell, and our goal is to connect people
                through the power of visuals.
              </p>
            </div>

            <div className="mt-8 ">
              <h2 className="h11 font-bold text-3xl mb-4 text-center ">
                Contact Us
              </h2>
              <p className="font-semibold text-justify p-4">
                We'd love to hear from you! Whether you have feedback,
                suggestions, or would like to collaborate, please don't hesitate
                to get in touch with us.
                <br />
                <p className="text-center">
                  <span className="font-bold text-2xl chat">Wanna chat: </span>
                  <a
                    href="https://itszlaam.netlify.app/contact"
                    className={`${
                      isDarkMode ? "text-indigo-300" : "text-indigo-600"
                    } hover:underline font-bold text-xl`}
                  >
                    Contact Us
                  </a>
                </p>
                <br />
                <span className="text-2xl font-bold text-center block">
                  Mail Us:{" "}
                  <a
                    className={` mail ${
                      isDarkMode ? "text-indigo-300" : "text-indigo-600"
                    } hover:underline`}
                    href="mailto:mrzalaam@gmail.com"
                  >
                    mrzalaam@gmail.com
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
