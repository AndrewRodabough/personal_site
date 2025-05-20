import React from 'react';
import './styles.css';
import Mountians from './components/mountains';
import NavBar from './components/navbar';
import Landing from './components/landing';
import About from './components/about';
import Projects from './components/projects/projects';
import Skills from './components/skills';
import Resume from './components/resume';
import Contact from './components/contact';
import Footer from './components/footer';

const App: React.FC = () => {
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

            <Footer />
        </>
    );
};

export default App;