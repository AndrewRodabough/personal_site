import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
import HomePage from './pages/home';
import Projects from './pages/projects';
import About from './pages/about';
import Billing from './pages/billing';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<div><h1>Under Construction</h1><Projects /></div>} />
                <Route path="/about" element={<div><h1>Under Construction</h1><About /></div>} />
                <Route path="/billing" element={<Billing />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;