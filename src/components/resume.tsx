import React from 'react';
import '../styles.css';


const Resume: React.FC = () => {
  return (
    <section className="temp resume" id="resume">
        <h1>Resume</h1>
        <a href="/Resume-AndrewRodabough.pdf" target="_blank" rel="noopener" className="resume-btn">Open Resume (PDF)</a>
    </section>
  );
};

export default Resume;