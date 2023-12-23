import "ldrs/helix";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../1Context/Context";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../0Firebase/Firebaseconfig";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const RouteProtector = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  const { setUserData } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserData(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [setUserData]);

  if (loading) {
    <>
      <div className="h-[80vh] flex justify-center items-center flex-col">
        <Loader />
        <span className="text-sm mt-3 font-semibold ">Wait a Moment...</span>
      </div>
    </>;
    return null;
  }

  const login = auth.currentUser?.email;

  if (!login) {
    navigate("/login");
    return null;
  }

  return (
    <>
      <Component />
    </>
  );
};

export default RouteProtector;
