import React from "react";
import "./box.css";
const Group = ({ img, text1, text2 }) => {
  return (
    <div className="box-content">
      <div className="box-img-content">
        <img src={img} alt="" />
      </div>
      <div className="box-text-content">
        <p className="box-text-content-main">{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
};

export default Group;
