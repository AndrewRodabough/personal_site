import React, { useState, useEffect }from 'react';
import './navbar.css';


const NavBar: React.FC = () => {

    const [isHamburger, setIsHamburgerVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (!isHamburger) {
            setIsMenuOpen(false);
        }
    }, [isHamburger]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
       
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsHamburgerVisible(false);
            } else {
                setIsHamburgerVisible(true);
            }
        };

        // Check on mount
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header>
            <div className="navbar">
          

                <div className="left">
                    <h1>Andrew Rodabough</h1>
                </div>
          
                <div className="right">
                    
                    {isHamburger ? (
                        <button className="hamburger" onClick={toggleMenu}>
                            <svg viewBox="0 0 100 70" width="40" height="30">
                                <line x1="10" y1="20" x2="90" y2="20" stroke="#fff" strokeWidth="12" strokeLinecap="round"/>
                                <line x1="10" y1="40" x2="90" y2="40" stroke="#fff" strokeWidth="12" strokeLinecap="round"/>
                                <line x1="10" y1="60" x2="90" y2="60" stroke="#fff" strokeWidth="12" strokeLinecap="round"/>
                            </svg>
                        </button>
                    ) : (

                        <nav>
                            <ul>
                                <li><a href="#about">About</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#resume">Resume</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
            
            
                {isHamburger && isMenuOpen && (
                    <div className='navbar'>
                    <nav className="mobile-menu">
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#resume">Resume</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                                </div>
                )}

        </header>
    );
};

export default NavBar;