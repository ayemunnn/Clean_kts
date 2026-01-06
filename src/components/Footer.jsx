import React from 'react';
import { Cloud, Users, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <div className="logo white">
                        <Cloud size={24} />
                        <span>Kloud Tech Solutions</span>
                    </div>
                    <p>Secure, scalable cloud for modern enterprise.</p>
                    <div className="social-links">
                        <div className="social-icon"><Users size={18} /></div>
                        <div className="social-icon"><Activity size={18} /></div>
                    </div>
                </div>
                <div className="footer-links">
                    <div>
                        <h5>Solutions</h5>
                        <Link to="/kts-cloud-migration-solution">Cloud Migration</Link>
                        <Link to="/security">Cyber Security</Link>
                        <Link to="/data">Data Analytics</Link>
                    </div>
                    <div>
                        <h5>Company</h5>
                        <Link to="/managed-services">Managed Services</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div>
                        <h5>Legal</h5>
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Use</Link>
                    </div>
                </div>
                <div className="footer-contact">
                    <h5>Get in touch</h5>
                    <p>123 Cloud Way, Tech City</p>
                    <p>sales@kloudtechsolutions.com</p>
                </div>
            </div>
            <div className="container footer-bottom">
                <p>&copy; 2026 Kloud Tech Solutions. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
