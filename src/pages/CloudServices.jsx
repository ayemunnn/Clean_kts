import React from 'react';
import {
    Cloud,
    Shield,
    Activity,
    TrendingDown,
    Lock,
    Layers,
    Zap,
    Users,
    Settings,
    BarChart3,
    Cpu,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CloudHero = () => (
    <section className="solution-hero section-padding">
        <div className="container hero-grid">
            <motion.div
                className="hero-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="eyebrow">Scalable Infrastructure</span>
                <h1 className="heading-xl">Cloud Services</h1>
                <p className="text-lg">
                    Architecture, operations, and optimization services across cloud environments—built for secure scale.
                </p>
                <div className="cta-row">
                    <Link to="/contact" className="btn btn-primary">Book a Consultation</Link>
                    <Link to="/managed-services" className="btn btn-secondary">Managed Services</Link>
                </div>
            </motion.div>

            <div className="hero-right">
                <div className="cloud-ops-card animate-float">
                    <div className="ops-header">
                        <div className="dots"><span></span><span></span><span></span></div>
                        <span>Cloud Architecture — Master</span>
                    </div>
                    <div className="cloud-nodes-visual">
                        <div className="node master">
                            <Cloud size={24} />
                            <span>Control Plane</span>
                        </div>
                        <div className="node-branches">
                            <div className="branch-line"></div>
                            <div className="branch-line"></div>
                        </div>
                        <div className="child-nodes">
                            <div className="node mini"><Cpu size={14} /></div>
                            <div className="node mini"><Shield size={14} /></div>
                            <div className="node mini"><Layers size={14} /></div>
                        </div>
                    </div>
                    <div className="cloud-stats-grid">
                        <div className="cloud-stat">
                            <span className="label">Workloads</span>
                            <span className="val">Active</span>
                        </div>
                        <div className="cloud-stat">
                            <span className="label">Compliance</span>
                            <span className="val green">99%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const WhatYouGet = () => {
    const items = [
        { title: "Cloud architecture design", icon: <Layers size={24} />, desc: "Secure, scalable blueprints tailored for your specific application needs." },
        { title: "Identity + governance", icon: <Users size={24} />, desc: "Unified IAM policies and resource guardrails for enterprise consistency." },
        { title: "Monitoring & observability", icon: <Activity size={24} />, desc: "Full-stack visibility with logs, metrics, and distributed tracing." },
        { title: "Cost optimization (FinOps)", icon: <TrendingDown size={24} />, desc: "Continuous right-sizing and spend reporting to maximize ROI." },
        { title: "Security posture improvements", icon: <Shield size={24} />, desc: "Automated threat detection and configuration hardening at scale." },
        { title: "Ongoing support options", icon: <Settings size={24} />, desc: "Flexible support tiers for day-to-day operations and strategic advisory." }
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

const Capabilities = () => {
    const capabilities = [
        { label: "Cloud Ops", icon: <Cloud size={28} /> },
        { label: "Security", icon: <Lock size={28} /> },
        { label: "DevOps", icon: <Zap size={28} /> },
        { label: "Monitoring", icon: <Activity size={28} /> },
        { label: "Cost", icon: <TrendingDown size={28} /> },
        { label: "Governance", icon: <Shield size={28} /> }
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <h2 className="section-title text-center mb-5">Our core capabilities</h2>
                <div className="capabilities-grid">
                    {capabilities.map((cap, i) => (
                        <motion.div
                            key={i}
                            className="capability-item"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="cap-icon-box">{cap.icon}</div>
                            <span className="cap-label">{cap.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FinalCTA = () => (
    <section className="container mb-5">
        <div className="final-cta-box-alt">
            <h2>Let's build your cloud foundation.</h2>
            <p className="mb-3">Expert cloud guidance for organizations that demand secure scale.</p>
            <div className="cta-row-center">
                <Link to="/contact" className="btn btn-primary-light">Talk to an Architect</Link>
            </div>
        </div>
    </section>
);

const CloudServices = () => {
    return (
        <div className="solution-detail-page">
            <CloudHero />
            <WhatYouGet />
            <Capabilities />
            <FinalCTA />
            <div className="section-padding"></div>
        </div>
    );
};

export default CloudServices;
