import React, { useEffect, useState } from "react";
import "./Group.css";
const Group = (props) => {
  const [Btntext, setBtntext] = useState("Join Group");
  const JoinGroup =()=>{
    if(Btntext === "Join Group" || localStorage.getItem("group") === "Join Group"){
      setBtntext("Leave Group");
      localStorage.setItem("group", "Leave Group");
    } else if (Btntext === "Leave Group" || localStorage.getItem("group") === "Leave Group"){
      setBtntext("Join Group");
      localStorage.setItem("group", "Join Group");
    }
    props.toogleFunc();
  }
  useEffect(()=>{
    if(localStorage.getItem("group")){
      setBtntext(localStorage.getItem("group"))
    }
  }, [])
  return (
    <>
      <div className="main_group_container">
            <div className="buttons">
                {/* back btn */}
                <i className="fa-solid fa-arrow-left"></i>
                <button onClick={JoinGroup}>{Btntext}</button>
            </div>
            <div className="group_name">
                <p>Computer Engineering</p>
                <p>142,765 Computer Engineers follow this</p>
            </div>
      </div>
    </>
  );
};

export default Group;
