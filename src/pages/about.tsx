import React from 'react';
import { about_text } from '../components/about/about';
import '../styles.css';

const About: React.FC = () => {
    return (
        <>
            <section className="temp about" id="about">
                {about_text()}
            </section>
        </>
    );
};

export default About;