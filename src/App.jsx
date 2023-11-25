import "./App.css";

import MyRoutes from "./4Routes/Routes";
import { useContext } from "react";
import Modal from "./3Components/Modal/Modal";
import { ThemeContext } from "./1Context/Context";

const App = () => {
  const { isModalOpen } = useContext(ThemeContext);

  return (
    <>
      {isModalOpen && (
        <>
          <div className="">
            <Modal />
          </div>
        </>
      )}
      <div className="">
        <MyRoutes />
      </div>
    </>
  );
};

export default App;
