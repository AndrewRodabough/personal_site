import React from 'react';
import '../styles.css';


const Projects: React.FC = () => {
  return (
    <section className="temp projects" id="projects">
          <h1>Projects</h1>
          <ul className="projects-container">
            <li className="project">
              <div className="project-bg"></div>
              <div className="project-content">
                <div className="project-text">
                  <h2>Assignment Scheduler</h2>
                  <p>Advanced Task Scheduler. This project involved using HTML, CSS, and JavaScript to create a responsive web application.</p>
                </div>
                <div className="project-image">
                  <img className="project-image" src="./images/assignment.png" alt="Assignment Scheduler Screenshot"/>
                </div>
              </div>
            </li>
            <li className="project">
              <div className="project-bg"></div>
              <div className="project-content">
                <div className="project-text">
                  <h2>Project 2</h2>
                  <p>Description of project 2. This project involved using HTML, CSS, and JavaScript to create a responsive web application.</p>
                </div>
                <div className="project-image" style={{background: '#6a778a'}}></div>
              </div>
            </li>
            <li className="project">
              <div className="project-bg"></div>
              <div className="project-content">
                <div className="project-text">
                  <h2>Project 3</h2>
                  <p>Description of project 3. This project involved using HTML, CSS, and JavaScript to create a responsive web application.</p>
                </div>
                <div className="project-image" style={{background: '#6a778a'}}></div>
              </div>
            </li>
          </ul>
        </section>
  );
};

export default Projects;