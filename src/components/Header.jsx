import React, { useState, useEffect } from 'react';
import { Cloud, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <header className={`sticky-header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <Link to="/" className="logo">
                    <Cloud className="logo-icon" size={24} />
                    <span>Kloud Tech Solutions</span>
                </Link>

                <nav className="desktop-nav">
                    <Link to="/">Home</Link>
                    <Link to="/solutions">Solutions</Link>
                    <Link to="/managed-services">Managed Services</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                <div className="header-cta">
                    <Link to="/contact" className="btn btn-primary">Book a Consultation</Link>
                </div>

                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="container mobile-links">
                            <Link to="/">Home</Link>
                            <Link to="/solutions">Solutions</Link>
                            <Link to="/managed-services">Managed Services</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/contact" className="btn btn-primary full-width">Book a Consultation</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
