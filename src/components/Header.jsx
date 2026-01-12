import React, { useState, useEffect } from 'react';
import { Cloud, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Solutions', path: '/solutions' },
        { name: 'Managed Services', path: '/managed-services' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className={`navbar-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
            <div className="navbar-float-container">
                <div className="navbar-glass-bar">
                    <Link to="/" className="logo">
                        <Cloud className="logo-icon" size={24} />
                        <span>Kloud Tech Solutions</span>
                    </Link>

                    <nav className="desktop-nav">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                                end={link.path === '/'}
                            >
                                {link.name}
                                {location.pathname === link.path || (link.path === '/' && location.pathname === '/') ? (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className="nav-active-pill"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                ) : null}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="header-cta">
                        <Link to="/contact" className="btn btn-primary nav-cta">
                            Book a Consultation
                        </Link>
                    </div>

                    <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-glass-menu"
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="mobile-links">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                                    end={link.path === '/'}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <div className="mobile-cta-wrapper">
                                <Link to="/contact" className="btn btn-primary full-width">
                                    Book a Consultation
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
