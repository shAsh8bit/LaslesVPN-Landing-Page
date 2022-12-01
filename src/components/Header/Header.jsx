import React from "react";
import "./header.css";
import illustration from "../../assets/Illustration-1.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="header-text">
        <h1>Want anything to be easy with LaslesVPN. </h1>
        <p>
          Provide a network for all your needs with ease and fun using LaslesVPN
          discover interesting features from us.
        </p></div>
        <div className="header-button">
          <button>Get Started</button>
        </div>
      </div>
      <img src={illustration} />
    </div>
  );
};

export default Header;
