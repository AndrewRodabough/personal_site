import React, { useState, useEffect, ReactNode } from 'react';
import './navbar.css';

type NavItem = {
    label: string;
    href: string;
};

type NavBarProps = {
    items?: NavItem[];
    title?: ReactNode;
};

const defaultItems: NavItem[] = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
];

const NavBar: React.FC<NavBarProps> = ({
    items = defaultItems,
    title = <h1>Andrew Rodabough</h1>,
}) => {
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
                        <a href="/" className="navbar-title">
                            {title}
                        </a>
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
                                    {items.map(item => (
                                        <li key={item.href}>
                                            <a href={item.href}>{item.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        )}
                    </div>
                </div>
                <div className={`navbarvertical ${isMenuOpen && isHamburger ? 'open' : ''}`}>
                    <nav className="vertical-menu">
                        <ul>
                            {items.map(item => (
                                <li key={item.href}>
                                    <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default NavBar;