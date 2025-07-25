import React from 'react';
import '../styles.css';


const About: React.FC = () => {
  return (
<section className="temp skills" id="skills">
          <h1>Skills</h1>
          
          <h2>Tools & Technologies</h2>
          <ul className="marg skills-list">
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Network Communication</li>
            <li>Node.js</li>
            <li>React.js</li>
            <li>AWS</li>
            <li>Git</li>
            <li>UI / UX</li>
          </ul>
        </section>
  );
};

export default About;