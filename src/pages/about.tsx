import React from 'react';
import { about_text } from '../components/about/about';
import '../components/about/about.css';

const About: React.FC = () => {
    return (
        <main>
            <section className="temp about" id="about">
                {about_text()}
            </section>
        </main>
    );
};

export default About;