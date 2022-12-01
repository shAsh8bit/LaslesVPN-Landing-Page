import React from "react";
import "./box.css";
import user from "../../assets/user.svg";
import location from "../../assets/location.svg";
import server from "../../assets/server.svg";
import Group from "./Group";
const Box = () => {
  return (
    <div className="box-outer-container">
      <div className="box-container">
       <Group img={user} text1={'90+'} text2={"Users"}/>
       <Group img={location} text1={'50+'} text2={"Locations"}/>
       <Group img={server} text1={'30+'} text2={"Servers"}/>
      </div>
    </div>
  );
};

export default Box;
