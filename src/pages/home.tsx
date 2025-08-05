import React from 'react';
import '../styles.css';
import Mountians from '../components/mountains';
import NavBar from '../components/navbar/navbar';
import Landing from '../components/landing/landing';
import About from '../components/about/about';
import Projects from '../components/projects/projects';
import Skills from '../components/skills';
import Resume from '../components/resume';
import Contact from '../components/contact';

const HomePage: React.FC = () => {
    return (
        <>
        <NavBar />
        <Mountians />
        <main>
            <Landing />
            <About />        
            <Projects />
            <Skills />
            <Resume />
            <Contact />
        </main>
        
    </>
    );
};

export default HomePage;