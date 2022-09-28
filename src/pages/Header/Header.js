import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div style={{position:'fixed'}}>
      <nav className="menu">
        <div className="menu-item"><a href="#AboutMe">About me</a></div>
        <div className="menu-item"><a href="#Skills">Skills</a></div>
        <div className="menu-item"><a href="#Archiving">Archiving</a></div>
        <div className="menu-item"><a href="#Projects">Projects</a></div>
        <div className="menu-item"><a href="#Career">Career</a></div>
      </nav>
    </div>
  );
};

export default Header;