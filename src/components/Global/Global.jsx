import React from "react";
import "./global.css";
import map from "../../assets/map.svg"
const Global = () => {
  return (
    <div className="global">
      <div className="plan-text">
        <h1>Huge Global Network of Fast VPN</h1>
        <p>
        See LaslesVPN everywhere to make it easier for you when you move locations.
        </p>
      </div>

      <div className="global-map">
        <img src={map} alt="" />
      </div>
    </div>
  );
};

export default Global;
