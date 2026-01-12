import React from 'react';
import {
    Shield,
    Lock,
    Eye,
    Zap,
    Activity,
    Network,
    Users,
    Monitor,
    Layout,
    FileText,
    Search,
    Settings,
    RefreshCcw,
    CheckCircle2,
    AlertTriangle,
    ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SecurityHero = () => (
    <section className="solution-hero">
        <div className="container hero-grid">
            <motion.div
                className="hero-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="eyebrow">Enterprise Security</div>
                <h1 className="heading-xl">IT Infrastructure & Security</h1>
                <p className="text-lg">
                    Secure, monitor, and manage the systems that power your business—network, endpoints, identity, and access.
                </p>
                <div className="cta-row">
                    <Link to="/contact" className="btn btn-primary">Get Started</Link>
                    <Link to="/contact" className="btn btn-secondary">Contact Sales</Link>
                </div>
            </motion.div>

            <div className="hero-right">
                <motion.div
                    className="security-ui-card"
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="security-ui-header">
                        <span>Security Posture</span>
                        <div className="score-badge">98% Secure</div>
                    </div>
                    <div className="posture-gauge">
                        <svg viewBox="0 0 100 60" style={{ width: '100%', height: 'auto' }}>
                            <path
                                d="M 10 50 A 40 40 0 0 1 90 50"
                                fill="none"
                                stroke="#f1f5f9"
                                strokeWidth="10"
                                strokeLinecap="round"
                            />
                            <path
                                d="M 10 50 A 40 40 0 0 1 90 50"
                                fill="none"
                                stroke="var(--accent-primary)"
                                strokeWidth="10"
                                strokeLinecap="round"
                                strokeDasharray="125.6"
                                strokeDashoffset="2.51"
                                style={{ filter: 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.3))' }}
                            />
                        </svg>
                        <div className="gauge-val">98</div>
                    </div>
                    <div className="alerts-box">
                        <h4>Recent Alerts</h4>
                        <div className="alert-strip">
                            <div className="alert-dot green"></div>
                            <span>No unauthorized access attempts</span>
                        </div>
                        <div className="alert-strip">
                            <div className="alert-dot green"></div>
                            <span>All endpoints fully patched</span>
                        </div>
                        <div className="alert-strip">
                            <div className="alert-dot blue"></div>
                            <span>Backup verified: 10 mins ago</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

const BentoGrid = () => {
    const items = [
        {
            title: "Monitoring & Administration",
            icon: <Activity size={24} />,
            desc: "24/7 infrastructure health checks and proactive system maintenance."
        },
        {
            title: "Network Security Management",
            icon: <Network size={24} />,
            desc: "Edge-to-core protection with firewalls, VPNs, and traffic analysis."
        },
        {
            title: "Identity & Access Governance",
            icon: <Users size={24} />,
            desc: "Robust IAM systems ensuring the right people have the right access."
        },
        {
            title: "Endpoint Protection Guidance",
            icon: <Monitor size={24} />,
            desc: "Securing devices and patching vulnerabilities before they're exploited."
        },
        {
            title: "Microsoft 365 Integration",
            icon: <Layout size={24} />,
            desc: "Hardening your collaboration stack and protecting enterprise data."
        },
        {
            title: "Continuous Improvements",
            icon: <FileText size={24} />,
            desc: "Regular reporting and strategic adjustments to stay ahead of threats."
        }
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container">
                <h2 className="section-title text-center mb-4">What you get</h2>
                <div className="migration-bento-grid">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            className="bento-card-mini"
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="bento-icon-box">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const HowWeWork = () => {
    const steps = [
        { title: "Assess", icon: <Search size={20} />, desc: "Surface vulnerabilities and audit current controls." },
        { title: "Secure", icon: <Lock size={20} />, desc: "Deploy hardened infrastructure and security guardrails." },
        { title: "Operate", icon: <Zap size={20} />, desc: "Maintain real-time monitoring and threat mitigation." },
        { title: "Improve", icon: <RefreshCcw size={20} />, desc: "Iterative enhancements based on operational data." }
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <h2 className="section-title text-center">Our security lifecycle</h2>
                <div className="process-timeline-alt">
                    {steps.map((s, i) => (
                        <div key={i} className="process-step-alt">
                            <div className="step-tag">Phase 0{i + 1}</div>
                            <div className="step-icon-circle">{s.icon}</div>
                            <h4>{s.title}</h4>
                            <p>{s.desc}</p>
                            {i < steps.length - 1 && <div className="step-arrow"><ArrowRight size={20} /></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TrustBlock = () => {
    return (
        <section className="section-padding bg-white">
            <div className="container">
                <div className="trust-pillars-grid">
                    <div className="pillar-item">
                        <Eye size={32} className="pillar-icon" />
                        <h3>Visibility</h3>
                        <p>Complete observability over your entire infrastructure stack.</p>
                    </div>
                    <div className="pillar-item">
                        <Shield size={32} className="pillar-icon" />
                        <h3>Protection</h3>
                        <p>Multi-layered defense against modern cyber threats.</p>
                    </div>
                    <div className="pillar-item">
                        <Activity size={32} className="pillar-icon" />
                        <h3>Reliability</h3>
                        <p>Highly available systems built for predictable uptime.</p>
                    </div>
                </div>
                <div className="metrics-strip-alt">
                    <div className="metric-pill"><Zap size={16} /> Faster incident response</div>
                    <div className="metric-pill"><Shield size={16} /> Reduced risk exposure</div>
                    <div className="metric-pill"><Settings size={16} /> Standardized controls</div>
                </div>
            </div>
        </section>
    );
};

const FinalCTA = () => (
    <section className="container mb-5">
        <div className="final-cta-box-alt">
            <h2>Ready to harden your infrastructure?</h2>
            <p className="mb-3">Talk to an architect and get a security posture assessment.</p>
            <div className="cta-row-center">
                <Link to="/contact" className="btn btn-primary-light">Talk to an Architect</Link>
            </div>
        </div>
    </section>
);

const InfrastructureSecurity = () => {
    return (
        <div className="solution-detail-page">
            <SecurityHero />
            <BentoGrid />
            <HowWeWork />
            <TrustBlock />
            <FinalCTA />
            <div className="section-padding"></div>
        </div>
    );
};

export default InfrastructureSecurity;
