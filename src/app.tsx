import React from 'react';
import './styles.css';


const App: React.FC = () => {
  return (
    <>
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

      <div className="sky">
        <span className="star" style={{top: '8%', left: '12%', width: '2px', height: '2px'}}></span>
        <span className="star" style={{top: '15%', left: '30%', width: '3px', height: '3px'}}></span>
        <span className="star" style={{top: '22%', left: '55%', width: '2px', height: '2px'}}></span>
        <span className="star" style={{top: '10%', left: '80%', width: '4px', height: '4px'}}></span>
        <span className="star" style={{top: '5%', left: '65%', width: '2px', height: '2px'}}></span>
        <span className="star" style={{top: '18%', left: '90%', width: '3px', height: '3px'}}></span>
        <span className="star" style={{top: '25%', left: '10%', width: '2px', height: '2px'}}></span>
        <span className="star" style={{top: '30%', left: '40%', width: '1px', height: '1px'}}></span>
        <span className="star" style={{top: '35%', left: '70%', width: '2px', height: '2px'}}></span>
        <span className="star" style={{top: '40%', left: '20%', width: '4px', height: '4px'}}></span>
        <span className="star" style={{top: '42%', left: '80%', width: '2px', height: '2px'}}></span>
        <span className="star" style={{top: '50%', left: '60%', width: '3px', height: '3px'}}></span>
        <span className="star" style={{top: '55%', left: '35%', width: '2px', height: '2px'}}></span>
        <span className="star" style={{top: '60%', left: '15%', width: '3px', height: '3px'}}></span>
        <span className="star" style={{top: '65%', left: '50%', width: '1px', height: '1px'}}></span>
        <span className="star" style={{top: '70%', left: '75%', width: '3px', height: '3px'}}></span>
        <span className="star" style={{top: '75%', left: '25%', width: '2px', height: '2px'}}></span>
        <span className="star" style={{top: '80%', left: '60%', width: '4px', height: '4px'}}></span>
        <span className="star" style={{top: '82%', left: '10%', width: '2px', height: '2px'}}></span>
        <span className="star" style={{top: '85%', left: '90%', width: '3px', height: '3px'}}></span>
        <span className="star" style={{top: '88%', left: '40%', width: '2px', height: '2px'}}></span>
        <span className="star" style={{top: '90%', left: '70%', width: '3px', height: '3px'}}></span>
        <span className="star" style={{top: '92%', left: '55%', width: '2px', height: '2px'}}></span>
        <span className="star" style={{top: '95%', left: '80%', width: '4px', height: '4px'}}></span>
        <span className="star" style={{top: '97%', left: '20%', width: '2px', height: '2px'}}></span>
        <span className="star" style={{top: '12%', left: '60%', width: '3px', height: '3px'}}></span>
        <span className="star" style={{top: '33%', left: '15%', width: '1px', height: '1px'}}></span>
        <span className="star" style={{top: '47%', left: '45%', width: '3px', height: '3px'}}></span>
        <span className="star" style={{top: '67%', left: '85%', width: '2px', height: '2px'}}></span>
        <span className="star" style={{top: '79%', left: '35%', width: '3px', height: '3px'}}></span>
      </div>

      <div className="mountains">
        <div className="mountain leftmt"></div>
        <div className="mountain rightmt"></div>
      </div>

      <main>
        <section className="landing" id="landing">
          <div className="hero">Hello, I'm Andrew</div>
          <div className="hero">I'm a Full Stack Developer</div>
          <div className="scroll-down-arrow">
            <a href="#about" aria-label="Scroll to About">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 13l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </section>

        <section className="temp about" id="about">
          <h1>About Me</h1>
          <p> Hi, I'm Andrew Rodabough, I live in Provo Utah. Currently I am a senior currently
            pursuing a Bachelors in Computer Science at Brigham Young University.
          </p>
          <p>In my free time, I enjoy working on personal projects, contributing to open source, and exploring the latest trends in web development.</p>
        </section>
        
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

        <section className="temp resume" id="resume">
          <h1>Resume</h1>
          <a href="./resume/Resume-AndrewRodabough.pdf" target="_blank" rel="noopener" className="resume-btn">Open Resume (PDF)</a>
        </section>

        <section className="temp contact" id="contact">
          <h1>Contact Me</h1>
          <div className="contacts">
            <div>
              <p>Email: arodabough@hotmail.com</p>
              <p>Phone: +1 (425) 677-5928</p>
            </div>
            <a href="https://www.linkedin.com/in/andrew-rodabough-6b0795346" target="_blank" >
              <button>Linkedin</button>
            </a>
            <a href="https://www.github.com/AndrewRodabough" target="_blank" >
              <button>GitHub</button>
            </a>
          </div>
        </section>
      </main>
      <footer>
      </footer>
    </>
  );
};

export default App;