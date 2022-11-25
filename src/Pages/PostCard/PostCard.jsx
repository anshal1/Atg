import React, { useEffect, useState } from "react";
import Posts from "../Posts/Posts";
import "./PostCard.css";
import img1 from "../../img/avenue-815297_1280.jpg";
import img2 from "../../img/ford-2705402_1280.jpg";
import userimg from "../../img/beard-1845166_960_720 (2).jpg";
import userimg2 from "../../img/portrait-3190849_1280.jpg";
import GroupCard from "../GroupCard/GroupCard";
const PostCard = () => {
  const [ShowLocation, setShowLocation] = useState(true);
  const [Btntext, setBtntext] = useState("Join Group");
  const JoinGroup =()=>{
    if(Btntext === "Join Group" || localStorage.getItem("group") === "Join Group"){
      setBtntext("Leave Group");
      localStorage.setItem("group", "Leave Group");
    } else if (Btntext === "Leave Group" || localStorage.getItem("group") === "Leave Group"){
      setBtntext("Join Group");
      localStorage.setItem("group", "Join Group");
    }
  }
  useEffect(()=>{
    if(localStorage.getItem("group")){
      setBtntext(localStorage.getItem("group"))
    }
  }, [])
  return (
    <>
      <div className="main_post_container">
        {/* Post number and dropdown container */}
        <div className="post_dropdown_number">
          <p id="post_no">Posts(368)</p>
          <div className="btn-group">
            <button
              className="btn btn-sm dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="dropdown_bnt"
            >
              Filter: All
            </button>
            <ul className="dropdown-menu">
              <li>Action</li>
              <li>Action</li>
              <li>Action</li>
            </ul>
          </div>
          <div className="all_dropdown_links">
            <div className="links">
              <p className=" links_btn active">All Posts(32)</p>
              <p className="links_btn">Article</p>
              <p className="links_btn">Event</p>
              <p className="links_btn">Education</p>
              <p className="links_btn">Job</p>
            </div>
          </div>
          <div className="post_btn_and_join">
            <button id="addPost">Write a Post  <i className="fa-solid fa-caret-down"></i></button>
            <button id={Btntext === "Join Group"? "Joingroup": "leave"} onClick={JoinGroup}> {Btntext === "Join Group" ? <span><i className="fa-solid fa-user-group"></i> {Btntext}</span>: <span><i class="fa-solid fa-arrow-right-from-bracket"></i> {Btntext}</span>} </button>
          </div>
        </div>
        {/* Post number and dropdown container end */}
        {/* Post Container */}
        <div className="post_container">
          <div className="current_location_info">
            <div className="current_location">
              {ShowLocation ? (
                <p>
                  <i className="fa-solid fa-location-dot"></i> Noida, India
                </p>
              ) : (
                <span>
                  <i className="fa-solid fa-location-dot"></i>{" "}
                  <input
                    type="text"
                    id="location_input"
                    placeholder="Enter your location"
                  ></input>
                </span>
              )}
              <p
                onClick={() => {
                  if (ShowLocation) {
                    setShowLocation(false);
                  } else {
                    setShowLocation(true);
                  }
                }}
              >
                <i className="fa-solid fa-pen"></i>
              </p>
            </div>
            <div className="info_location">
              <span>
                <i className="fa-solid fa-circle-info"></i>
              </span>{" "}
              Your location will help us serve better and extend a personalised
              experience.
            </div>
            <div className="recommended_group">
            <p className="Rec_heading">Recommended Groups</p>
              <GroupCard/>
              <GroupCard/>
              <GroupCard/>
              <GroupCard/>
              <div className="seemore">
                <span>See More...</span>
              </div>
            </div>
          </div>
          <div className="post_holder">
            <Posts
              img={img1}
              post_type={"✍️ Article"}
              title={
                "What if famous brands had regular fonts? Meet RegulaBrands!"
              }
              description={
                "I’ve worked in UX for the better part of a decade. F.."
              }
              userprofile={userimg}
              username={"Sarthak Kamra"}
              user_follower={"1.4k views"}
            />
            <Posts
              img={img1}
              post_type={"🔬️ Education"}
              title={
                "Tax Benefits for Investment under National Pension Scheme launched by Government"
              }
              description={
                "I’ve worked in UX for the better part of a decade. F.."
              }
              userprofile={userimg}
              username={"Sarah West"}
              user_follower={"3.4k views"}
            />
            <Posts
              img={img2}
              post_type={"🔬️ Education"}
              title={"Finance & Investment Elite Social Mixer @Lujiazui"}
              userprofile={userimg2}
              username={"Ronal Jones"}
              user_follower={"800 views"}
              date={"Fri, 12 Oct, 2018"}
              location={"Ahmedabad, India"}
              visit_to={"Visit Website"}
              color={"rgba(229, 97, 53, 1)"}
            />
            <Posts
              post_type={"💼️ Job"}
              title={"Software Developer - II"}
              userprofile={userimg}
              username={"Joseph Gray"}
              user_follower={"1.7k views"}
              date={"Innovaccer Analytic..."}
              location={"Noida, India"}
              visit_to={"Apply on Timesjobs"}
              color={"rgba(2, 184, 117, 1)"}
            />
          </div>
        </div>
        {/* Post container end */}
      </div>
    </>
  );
};

export default PostCard;
