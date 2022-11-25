import React from "react";
import "./Navbar.css";
import img from "../../img/portrait-3190849_1280.jpg";
const Navbar = () => {
  return (
    <>
      <div className="main_navbar_container">
        <div className="logo">
          <h2>Logo</h2>
        </div>
        <div className="search_bar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search for your favorite groups in ATG" />
        </div>
        <div className="user_profile_btn">
          <img src={img} alt="" />
          <p className="username">Sarah West</p>
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
