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
            if (window.innerWidth >= 650) {
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
            <div className="navbarcontainer">
            
                <div className="navbarhorizontal">
                    <div className="left">
                        <h1>Andrew Rodabough</h1>
                    </div>
            
                    <div className="right">
                        
                        {isHamburger ? (
                            <button className="hamburger" onClick={toggleMenu}>
                                <svg viewBox="0 0 100 50" width="30" height="22">
                                    <line x1="10" y1="0" x2="90" y2="0"/>
                                    <line x1="10" y1="25" x2="90" y2="25"/>
                                    <line x1="10" y1="50" x2="90" y2="50"/>
                                </svg>
                            </button>
                        ) : (

                            <nav className='horizontal-menu'>
                                <ul>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#projects">Projects</a></li>
                                    <li><a href="#resume">Resume</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </nav>
                        )}
                    </div>

                </div>
                
                {/* Apply the 'open' class based on isMenuOpen state */}
                <div className={`navbarvertical ${isMenuOpen && isHamburger ? 'open' : ''}`}>
                    {/* The content itself is always rendered, but its visibility is controlled by max-height */}
                    <nav className="vertical-menu">
                        <ul>
                            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
                            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                            <li><a href="#resume" onClick={() => setIsMenuOpen(false)}>Resume</a></li>
                            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                        </ul>
                    </nav>
                </div>
                
            </div>
        </header>
    );
};

export default NavBar;