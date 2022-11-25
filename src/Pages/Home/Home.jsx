import React, { useEffect, useState } from "react";
import Group from "../Group/Group";
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";
import PostCard from "../PostCard/PostCard";
import SignUp from "../SignUp/SignUp";
import "./Home.css";
const Home = () => {
  const [Show, setShow] = useState("main_login_container");
  const [Show_SignUp, setShowSignup] = useState(true);
  const toggleFunc = () => {};
  const ShowLogin = () => {
    setShowSignup(false);
  };
  const ShowSignUp = () => {
    setShowSignup(true);
  };
  const Close = () => {
    setShow("main_login_container");
  };
  useEffect(() => {
    setShow("main_login_container_show");
  }, []);
  return (
    <div id="home">
      <Navbar/>
      <Group toogleFunc={toggleFunc} />
      <PostCard />
      <div className="add_post">
        <i className="fa-solid fa-pen"></i>
      </div>
      {Show_SignUp ? (
        <SignUp toggle={Show} Close={Close} ShowLogin={ShowLogin} />
      ) : (
        <Login toggle={Show} Close={Close} ShowSignUp={ShowSignUp} />
      )}
    </div>
  );
};

export default Home;
