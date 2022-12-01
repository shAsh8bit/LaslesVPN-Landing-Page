import React from "react";
import "./navbar.css";
import logo from "../../logo.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      
        <div className="navbar-links-logo">
          <img src={logo} />
        </div>
        <div className="navbar-links-container">
          <p>
            <a href="#home">About</a>
          </p>
          <p>
            <a href="#home">Features</a>
          </p>
          <p>
            <a href="#home">Pricing</a>
          </p>
          <p>
            <a href="#home">Testimonials</a>
          </p>
          <p>
            <a href="#home">Help</a>
          </p>
       
      </div>
      <div className="navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
