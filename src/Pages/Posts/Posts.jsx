import React from "react";
import "./Posts.css";
const Posts = (props) => {
  return (
    <>
      <div className="main_posts_conatiner">
        {props.img ? (
          <div className="image_container">
            <img src={props.img} alt="" />
          </div>
        ) : (
          ""
        )}
        <div className="post_info_conatiner">
          <div className="post_type">
            <span>{props.post_type}</span>
          </div>
          <div className="post_title">
            <h6>{props.title}</h6>
            <span>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </div>
          {props.description ? (
            <div className="post_description">
              {props.description?.length > 54
                ? props.description?.slice(0, 55)
                : props.description}
            </div>
          ) : (
            ""
          )}
          {props.location ? (
            <div className="location_container">
              <div className="date_and_location">
                <p>{props.date}</p>
                <p>{props.location}</p>
              </div>
              <div className="website_btn">
                <button style={{color: `${props.color}`}}>{props.visit_to}</button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="user_info_container">
          <div className="user_profile">
            <img src={props.userprofile} alt="" />
            <div className="username_conatiner">
              <p>{props.username}</p>
              <p>{props.user_follower}</p>
            </div>
          </div>
          <div className="share_btn">
            <p>
              <i className="fa-solid fa-share-nodes"></i> Share
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
