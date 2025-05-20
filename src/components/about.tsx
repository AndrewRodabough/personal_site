import React from 'react';
import '../styles.css';


const About: React.FC = () => {
  return (
    <section className="temp about" id="about">
        <h1>About Me</h1>
        <p> Hi, I'm Andrew Rodabough, I live in Provo Utah. Currently I am a senior currently
            pursuing a Bachelors in Computer Science at Brigham Young University.
        </p>
        <p>In my free time, I enjoy working on personal projects, contributing to open source, and exploring the latest trends in web development.</p>
        <p>I also enjoy ballroom dancing, art, and Cooking</p>
        <a href="./projects" className="morelink" style={{ marginTop: '1rem', alignSelf: 'center' }}>
          Learn More
        </a>
    </section>
  );
};

export default About;