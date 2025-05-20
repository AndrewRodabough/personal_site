import React from 'react';
import '../styles.css';


const Landing: React.FC = () => {
  return (
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
  );
};

export default Landing;