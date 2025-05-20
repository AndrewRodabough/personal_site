import React from 'react';
import '../styles.css';


const NavBar: React.FC = () => {
  return (

      <header>
        <div className="navbar">
          <div className="left">
            <h1>Andrew Rodabough</h1>
          </div>
          <div className="right">
            <nav>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  );
};

export default NavBar;