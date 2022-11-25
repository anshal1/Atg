import React, { useState } from "react";
import "./GroupCard.css";
import img from "../../img/beard-1845166_960_720 (2).jpg";
function GroupCard() {
    const [Btntext, setbtntext] = useState("Follow");
  return (
    <div className="main_groupCard">
      <div className="Rec_group_info">
        <div className="Rec_info_container">
          <div className="group_image">
            <img src={img} alt="" />
          </div>
          <div className="Rec_group_name">
            <p>Leisure</p>
          </div>
        </div>
        <div className="join_group_btn">
          <button onClick={(e)=>{
            if(Btntext === "Follow"){
                setbtntext("Followed");
                e.target.classList = "followed";
            } else {
                setbtntext("Follow");
                e.target.classList = "";
            }
          }}>{Btntext}</button>
        </div>
      </div>
    </div>
  );
}

export default GroupCard;
