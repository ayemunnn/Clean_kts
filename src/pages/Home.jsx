import React from 'react';
import {
    ArrowRight,
    Cloud,
    Shield,
    Database,
    Cpu,
    BarChart,
    Lock,
    Layers,
    Zap,
    Users,
    CheckCircle2,
    TrendingDown,
    Activity
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => (
    <section className="hero-section">
        <div className="container hero-grid">
            <motion.div
                className="hero-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="eyebrow-pill">Cloud • DevOps • Security • Data</div>
                <h1 className="heading-xl">Elevate your business with secure, scalable cloud solutions.</h1>
                <p className="text-lg">
                    We design, migrate, and operate cloud environments with security-first architecture, modernization, and cost optimization.
                </p>
                <div className="cta-row">
                    <Link to="/contact" className="btn btn-primary ripple">Get Started</Link>
                    <Link to="/solutions" className="btn btn-secondary">Explore Solutions</Link>
                </div>
                <div className="trust-chips">
                    <span className="chip"><CheckCircle2 size={16} /> ISO-aligned practices</span>
                    <span className="chip"><CheckCircle2 size={16} /> 24/7 monitoring</span>
                    <span className="chip"><CheckCircle2 size={16} /> FinOps optimization</span>
                </div>
            </motion.div>

            <div className="hero-right">
                <div className="hero-mockup animate-float">
                    <div className="mock-header">
                        <div className="dots"><span></span><span></span><span></span></div>
                        <div className="mock-search">Infrastructure Dashboard</div>
                    </div>
                    <div className="mock-body">
                        <div className="kpi-grid">
                            <div className="kpi-tile">
                                <div className="kpi-icon uptime"><Activity size={20} /></div>
                                <div className="kpi-val">99.99%</div>
                                <div className="kpi-label">Uptime</div>
                            </div>
                            <div className="kpi-tile">
                                <div className="kpi-icon savings"><TrendingDown size={20} /></div>
                                <div className="kpi-val">35%</div>
                                <div className="kpi-label">Cost Savings</div>
                            </div>
                            <div className="kpi-tile">
                                <div className="kpi-icon security"><Shield size={20} /></div>
                                <div className="kpi-val">98/100</div>
                                <div className="kpi-label">Security Posture</div>
                            </div>
                            <div className="kpi-tile">
                                <div className="kpi-icon deployments"><Zap size={20} /></div>
                                <div className="kpi-val">2.4k</div>
                                <div className="kpi-label">Deployments</div>
                            </div>
                        </div>
                        <div className="mock-chart">
                            <div className="bar" style={{ height: '60%' }}></div>
                            <div className="bar" style={{ height: '80%' }}></div>
                            <div className="bar" style={{ height: '40%' }}></div>
                            <div className="bar" style={{ height: '90%' }}></div>
                            <div className="bar" style={{ height: '50%' }}></div>
                        </div>
                    </div>
                    <motion.div
                        className="floating-card c1"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Users size={18} />
                        <div>
                            <p>+1.2k</p>
                            <span>Active Users</span>
                        </div>
                    </motion.div>
                    <motion.div
                        className="floating-card c2"
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                        <Lock size={18} />
                        <div>
                            <p>Protected</p>
                            <span>End-to-End Encryption</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
);

const LogosStrip = () => (
    <section className="logos-strip">
        <div className="container">
            <p className="strip-title">Trusted by growing teams</p>
            <div className="logos-grid">
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="logo-placeholder">LOGONAME</div>
                ))}
            </div>
        </div>
    </section>
);

const ExpertiseGrid = () => {
    const cards = [
        { title: "Managed Services", icon: <Layers size={24} />, desc: "Complete lifecycle management of your cloud assets.", link: "/managed-services", size: "large" },
        { title: "IT Infrastructure & Security", icon: <Shield size={24} />, desc: "Hardened infrastructure designed for the modern threat landscape.", link: "/kts-it-infrastructure-security-solutions", size: "small" },
        { title: "Cloud Services", icon: <Cloud size={24} />, desc: "Migration, modernization, and cloud-native development.", link: "/kts-cloud-services", size: "small" },
        { title: "Microsoft 365 & Azure", icon: <Cpu size={24} />, desc: "Fully integrated Microsoft ecosystems for enterprise productivity.", link: "/kts-cloud-services", size: "small" },
        { title: "Data Extraction & Automation", icon: <Database size={24} />, desc: "Automate workflows and unlock insights from your data silos.", link: "/kts-data-extraction-automation", size: "large" },
        { title: "Business Continuity", icon: <Zap size={24} />, desc: "Resilient strategy for seamless transitions during disruptions.", link: "/kloud-tech-business-continuity-solution", size: "small" }
    ];
    return (
        <section id="solutions" className="section-padding expertise-section">
            <div className="container">
                <h2 className="section-title">Our Cloud Expertise</h2>
                <div className="bento-grid">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            className={`bento-card ${card.size}`}
                            whileHover={{ y: -8 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="card-icon">{card.icon}</div>
                            <h3>{card.title}</h3>
                            <p>{card.desc}</p>
                            <Link to={card.link} className="learn-more">Learn more <ArrowRight size={16} /></Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeatureHighlight = () => (
    <section className="feature-highlight">
        <div className="container highlight-box">
            <div className="highlight-left">
                <div className="eyebrow">Business Continuity</div>
                <h2>Resilient operations with backup, disaster recovery, and rapid restoration.</h2>
            </div>
            <div className="highlight-right">
                <div className="metrics-column">
                    <div className="metric-chip"><Zap size={16} /> Faster recovery</div>
                    <div className="metric-chip"><Lock size={16} /> Secure storage</div>
                    <div className="metric-chip"><Layers size={16} /> Remote readiness</div>
                </div>
                <Link to="/kloud-tech-business-continuity-solution" className="btn btn-light">Explore Continuity <ArrowRight size={16} /></Link>
            </div>
        </div>
    </section>
);

const ValueGrid = () => {
    const values = [
        { title: "Accurate Strategic Solutions", icon: <BarChart size={20} />, text: "Data-driven strategies tailored to your needs." },
        { title: "Trusted Guidance", icon: <Users size={20} />, text: "Expert consultation through every cloud stage." },
        { title: "Technology Leadership", icon: <Cpu size={20} />, text: "Stay ahead with cutting-edge tech adoption." },
        { title: "ROI Maximization", icon: <TrendingDown size={20} />, text: "Optimized costs for maximum business value." }
    ];
    return (
        <section className="section-padding value-section">
            <div className="container">
                <h2 className="section-title text-center">Personalized services that maximize ROI</h2>
                <div className="value-grid">
                    {values.map((v, i) => (
                        <div key={i} className="value-card">
                            <div className="v-icon">{v.icon}</div>
                            <h4>{v.title}</h4>
                            <p>{v.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AboutSnippet = () => (
    <section className="section-padding about-section">
        <div className="container about-grid">
            <div className="about-left">
                <h2 className="section-title">Your cloud solution partner</h2>
            </div>
            <div className="about-right">
                <p className="text-lg">
                    At Kloud Tech Solutions, we enhance business acceleration through specialized IT, managed services, cloud, and security expertise. Our mission is to empower organizations with resilient, cost-effective infrastructure that scales as they grow.
                </p>
                <Link to="/contact" className="btn btn-secondary mt-2">Contact Us</Link>
            </div>
        </div>
    </section>
);

const FinalCTA = () => (
    <section className="final-cta-section container">
        <div className="final-cta-box">
            <h2>Ready to modernize your cloud?</h2>
            <p>Talk to an architect and get a tailored plan.</p>
            <div className="cta-row-center">
                <Link to="/contact" className="btn btn-primary-light">Book a Consultation</Link>
                <Link to="/solutions" className="btn btn-outline-white">View Solutions</Link>
            </div>
        </div>
    </section>
);

const Home = () => {
    return (
        <>
            <Hero />
            <LogosStrip />
            <ExpertiseGrid />
            <FeatureHighlight />
            <ValueGrid />
            <AboutSnippet />
            <FinalCTA />
        </>
    );
};

export default Home;
