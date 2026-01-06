import React from 'react';
import {
    Mail,
    MapPin,
    Clock,
    CheckCircle2,
    Calendar,
    MessageSquare,
    ArrowRight,
    Send
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContactHero = () => (
    <section className="contact-hero section-padding pb-0">
        <div className="container text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="heading-xl">Contact Us</h1>
                <p className="text-lg mx-auto max-w-700">
                    Tell us what you're building. We'll respond with the right next steps.
                </p>
            </motion.div>
        </div>
    </section>
);

const ContactCards = () => {
    const cards = [
        {
            icon: <Mail size={24} />,
            title: "Email",
            content: "sales@kloudtechsolutions.com",
            link: "mailto:sales@kloudtechsolutions.com"
        },
        {
            icon: <MapPin size={24} />,
            title: "Office",
            content: "Surya Bhavan, First floor, Fergusson College Rd, Shivajinagar, Pune, Maharashtra 411005",
            link: "https://maps.google.com"
        },
        {
            icon: <Clock size={24} />,
            title: "Hours",
            content: "Mon–Fri • 9am–6pm",
            link: null
        }
    ];

    return (
        <section className="section-padding pb-0">
            <div className="container">
                <div className="contact-info-grid">
                    {cards.map((card, i) => (
                        <div key={i} className="contact-info-card">
                            <div className="card-icon">{card.icon}</div>
                            <h3>{card.title}</h3>
                            <p>{card.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ContactFormSection = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="contact-main-grid">
                    {/* Left: Form */}
                    <div className="contact-form-container">
                        <form className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="John Doe" />
                                </div>
                                <div className="form-group">
                                    <label>Work Email</label>
                                    <input type="email" placeholder="john@company.com" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Company</label>
                                    <input type="text" placeholder="Company Name" />
                                </div>
                                <div className="form-group">
                                    <label>Service Interest</label>
                                    <select>
                                        <option value="">Select a service...</option>
                                        <option>Cloud Migration</option>
                                        <option>Managed Services</option>
                                        <option>Security</option>
                                        <option>Business Continuity</option>
                                        <option>Data Center</option>
                                        <option>Data Extraction & Automation</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="5" placeholder="How can we help you?"></textarea>
                            </div>

                            <div className="form-checkbox">
                                <input type="checkbox" id="consent" />
                                <label htmlFor="consent">I agree to be contacted</label>
                            </div>

                            <button type="submit" className="btn btn-primary full-width mt-1">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>

                    {/* Right: Next Steps + Calendar */}
                    <div className="contact-sidebar">
                        <div className="next-steps-card">
                            <h3>What happens next</h3>
                            <div className="next-step-item">
                                <div className="step-count">1</div>
                                <div>
                                    <p><strong>Initial Review</strong></p>
                                    <span>An architect reviews your requirements within 24 hours.</span>
                                </div>
                            </div>
                            <div className="next-step-item">
                                <div className="step-count">2</div>
                                <div>
                                    <p><strong>Discovery Call</strong></p>
                                    <span>We schedule a 15-min call to dive deeper into your goals.</span>
                                </div>
                            </div>
                            <div className="next-step-item">
                                <div className="step-count">3</div>
                                <div>
                                    <p><strong>Tailored Plan</strong></p>
                                    <span>You receive a high-level roadmap and cost estimate.</span>
                                </div>
                            </div>
                        </div>

                        <div className="calendar-mockup">
                            <div className="cal-header">
                                <Calendar size={18} />
                                <span>Book a brief discovery call</span>
                            </div>
                            <div className="cal-body">
                                <div className="cal-month">January 2026</div>
                                <div className="cal-days-grid">
                                    {[...Array(7)].map((_, i) => (
                                        <div key={i} className="cal-day-label">{['S', 'M', 'T', 'W', 'T', 'F', 'S'][i]}</div>
                                    ))}
                                    {[...Array(31)].map((_, i) => (
                                        <div key={i} className={`cal-day ${i === 14 ? 'active' : ''}`}>{i + 1}</div>
                                    ))}
                                </div>
                                <button className="btn btn-secondary full-width mt-2">View Availability</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FooterCTAStrip = () => (
    <section className="section-padding bg-white border-top">
        <div className="container">
            <div className="footer-cta-strip">
                <div className="strip-left">
                    <h2>Need a quick answer?</h2>
                    <p>Our sales team is ready to help you navigate technical decisions.</p>
                </div>
                <div className="strip-right">
                    <Link to="mailto:sales@kloudtechsolutions.com" className="btn btn-primary">Email Sales</Link>
                    <Link to="/solutions" className="btn btn-secondary">View Solutions</Link>
                </div>
            </div>
        </div>
    </section>
);

const Contact = () => {
    return (
        <div className="contact-page">
            <ContactHero />
            <ContactCards />
            <ContactFormSection />
            <FooterCTAStrip />
        </div>
    );
};

export default Contact;
