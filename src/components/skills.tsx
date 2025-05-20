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

          <h2>Languages</h2>
          <section className="marg three-column-grid">
            <div>
              <div className="skill">
                <span className="skill-name">C++</span>
                <div className="skill-level">
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="skill">
                <span className="skill-name">C</span>
                <div className="skill-level">
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="skill" style={{marginBottom: 0}}>
                <span className="skill-name">C#</span>
                <div className="skill-level">
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="skill">
                <span className="skill-name">Python</span>
                <div className="skill-level">
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span></span>
                </div>
              </div>
              <div className="skill">
                <span className="skill-name">Java</span>
                <div className="skill-level">
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="skill">
                <span className="skill-name">JavaScript</span>
                <div className="skill-level">
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="skill">
                <span className="skill-name">HTML</span>
                <div className="skill-level">
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span style={{backgroundColor: 'var(--border-color)'}}></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </section>
        </section>
  );
};

export default About;