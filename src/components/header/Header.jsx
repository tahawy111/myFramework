import React from "react";
import "./header.css";
import logo from "../../assets/logo.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" className="logo" />
          <span>Web Slices</span>
        </div>
        <div className="title">Get Your Web Slices From Us</div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/amer-mohammed-b1124b21b/">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://www.instagram.com/tahawei111/">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://www.youtube.com/channel/UCZ8UXBv0rZZygWrDT5Bu1qw/featured">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="https://github.com/tahawy111">
            <img src={github} alt="github" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
