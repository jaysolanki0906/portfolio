import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <header>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          
        </div>
        <nav className={isOpen ? "nav-links open" : "nav-links"}>
      <div className="OneLine">
        <div className="leftside">
          <div className="wrapper">
            <Link to="/home" className="letter">
              <div className="letter">Home</div>
            </Link>
            <div className="shadow">Home</div>
          </div>
          <div className="wrapper">
            <Link to="/education" className="letter">
              <div className="letter">Education</div>
            </Link>
            <div className="shadow">Education</div>
          </div>
          <div className="wrapper">
            <Link to="/experience" className="letter">
              <div className="letter">Experience</div>
            </Link>
            <div className="shadow">Experience</div>
          </div>
        </div>
        <img src={require("./favicon.png")} alt="Logo" width={"7%"} className="logo-img"/>
        <div className="rightside">
          <div className="wrapper">
            <Link to="/projects" className="letter">
              <div className="letter">Projects</div>
            </Link>
            <div className="shadow">Projects</div>
          </div>
          <div className="wrapper">
            <Link to="/certifications" className="letter">
              <div className="letter">Certifications</div>
            </Link>
            <div className="shadow">Certifications</div>
          </div>
          <div className="wrapper">
            <Link to="/contact" className="letter">
              <div className="letter">Contact Me</div>
            </Link>
            <div className="shadow">Contact Me</div>
          </div>
        </div>
      </div>
      </nav>
    </header>
  );
};

export default Header;
