import React from 'react';
import {
    Server,
    Database,
    Cpu,
    Activity,
    Shield,
    FileText,
    Search,
    Settings,
    Zap,
    CheckCircle2,
    ArrowRight,
    BarChart3,
    Layers,
    HardDrive
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DataCenterHero = () => (
    <section className="solution-hero section-padding">
        <div className="container hero-grid">
            <motion.div
                className="hero-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="eyebrow">Enterprise Infrastructure</span>
                <h1 className="heading-xl">Data Center Solutions</h1>
                <p className="text-lg">
                    Reliable compute, storage, and architecture support for performance and stability.
                </p>
                <div className="cta-row">
                    <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                    <Link to="/solutions" className="btn btn-secondary">All Solutions</Link>
                </div>
            </motion.div>

            <div className="hero-right">
                <div className="dc-status-card animate-float">
                    <div className="dc-status-header">
                        <span>Cluster Health — Primary</span>
                        <div className="status-pill green">Healthy</div>
                    </div>
                    <div className="dc-metrics-grid">
                        <div className="dc-metric">
                            <span className="label">Compute Usage</span>
                            <div className="progress-mini">
                                <div className="progress-fill" style={{ width: '64%' }}></div>
                            </div>
                            <span className="val">64%</span>
                        </div>
                        <div className="dc-metric">
                            <span className="label">Storage IOPS</span>
                            <div className="progress-mini">
                                <div className="progress-fill" style={{ width: '42%', backgroundColor: 'var(--accent-primary)' }}></div>
                            </div>
                            <span className="val">12.4k</span>
                        </div>
                    </div>
                    <div className="dc-rack-visual">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="rack-unit">
                                <div className="unit-leds">
                                    <div className={`led ${i % 2 === 0 ? 'active' : ''}`}></div>
                                    <div className="led active"></div>
                                    <div className="led"></div>
                                </div>
                                <div className="unit-label">Node-0{i}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const WhatYouGet = () => {
    const items = [
        {
            title: "Capacity planning",
            icon: <BarChart3 size={24} />,
            desc: "Anticipate growth and optimize resource allocation across compute and storage."
        },
        {
            title: "Storage & compute architecture",
            icon: <Cpu size={24} />,
            desc: "High-performance designs tailored for enterprise workloads and latency needs."
        },
        {
            title: "Reliability & redundancy",
            icon: <Layers size={24} />,
            desc: "Eliminate single points of failure with robust failover and high-availability setups."
        },
        {
            title: "Monitoring & maintenance",
            icon: <Activity size={24} />,
            desc: "Global visibility into infrastructure health with proactive patching and tuning."
        },
        {
            title: "Security hardening",
            icon: <Shield size={24} />,
            desc: "Hardening BIOS, OS, and hardware layers to meet strict compliance standards."
        },
        {
            title: "Documentation & runbooks",
            icon: <FileText size={24} />,
            desc: "Clear operational guides ensuring consistent management and rapid recovery."
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
        { title: "Assess", icon: <Search size={20} />, desc: "Evaluate existing hardware and projected resource needs." },
        { title: "Design", icon: <Settings size={20} />, desc: "Architect optimized compute and storage clusters." },
        { title: "Implement", icon: <HardDrive size={20} />, desc: "Physical or virtual deployment with validated configs." },
        { title: "Operate", icon: <Zap size={20} />, desc: "Continuous management and lifecycle optimization." }
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <h2 className="section-title text-center">Implementation lifecycle</h2>
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

const FinalCTA = () => (
    <section className="container mb-5">
        <div className="final-cta-box-alt">
            <h2>Modernize your core infrastructure.</h2>
            <p className="mb-3">Get the stability and performance your enterprise applications demand.</p>
            <div className="cta-row-center">
                <Link to="/contact" className="btn btn-primary-light">Talk to an Architect</Link>
            </div>
        </div>
    </section>
);

const DataCenterSolutions = () => {
    return (
        <div className="solution-detail-page">
            <DataCenterHero />
            <WhatYouGet />
            <HowWeWork />
            <FinalCTA />
            <div className="section-padding"></div>
        </div>
    );
};

export default DataCenterSolutions;
