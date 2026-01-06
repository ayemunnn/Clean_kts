import React from 'react';
import {
    Shield,
    Database,
    Zap,
    Clock,
    RotateCcw,
    Server,
    Cloud,
    TrendingUp,
    Search,
    FileText,
    Settings,
    CheckCircle2,
    ArrowRight,
    Activity
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContinuintyHero = () => (
    <section className="solution-hero section-padding">
        <div className="container hero-grid">
            <motion.div
                className="hero-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="eyebrow">Resilience & Recovery</span>
                <h1 className="heading-xl">Business Continuity</h1>
                <p className="text-lg">
                    Backup and disaster recovery strategies that keep your operations resilient and recoverable.
                </p>
                <div className="cta-row">
                    <Link to="/contact" className="btn btn-primary">Book a Consultation</Link>
                    <Link to="/solutions" className="btn btn-secondary">Explore Solutions</Link>
                </div>
            </motion.div>

            <div className="hero-right">
                <div className="continuity-visual animate-float">
                    <div className="recovery-time-card">
                        <div className="rt-header">
                            <span>Target RTO</span>
                            <div className="status-pill blue">Optimized</div>
                        </div>
                        <div className="rt-value">4 Hours</div>
                        <div className="rt-bar">
                            <div className="rt-fill" style={{ width: '85%' }}></div>
                        </div>
                    </div>
                    <div className="dr-status-list">
                        <div className="dr-stat">
                            <div className="stat-icon green"><CheckCircle2 size={16} /></div>
                            <div className="stat-info">
                                <strong>Off-site Backup</strong>
                                <span>Verified 12m ago</span>
                            </div>
                        </div>
                        <div className="dr-stat">
                            <div className="stat-icon blue"><RotateCcw size={16} /></div>
                            <div className="stat-info">
                                <strong>Restore Test</strong>
                                <span>Successful</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const WhatYouGet = () => {
    const items = [
        {
            title: "Backup architecture & policies",
            icon: <Database size={24} />,
            desc: "Custom backup schedules and retention rules based on data criticality."
        },
        {
            title: "Disaster recovery planning",
            icon: <Zap size={24} />,
            desc: "Clear RPO/RTO guidance to minimize operational impact during outages."
        },
        {
            title: "Restore testing & runbooks",
            icon: <FileText size={24} />,
            desc: "Regular validation and documented procedures for seamless recovery."
        },
        {
            title: "Secure storage & retention",
            icon: <Shield size={24} />,
            desc: "Immutable storage and long-term archival for compliance and security."
        },
        {
            title: "Monitoring & alerting",
            icon: <Activity size={24} />,
            desc: "Real-time visibility into backup health and recovery readiness."
        },
        {
            title: "Ongoing optimization",
            icon: <TrendingUp size={24} />,
            desc: "Regular reviews to adapt your DR strategy to evolving business needs."
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
        { title: "Assess", icon: <Search size={20} />, desc: "Identify critical assets and define RPO/RTO goals." },
        { title: "Plan", icon: <FileText size={20} />, desc: "Architect recovery workflows and backup policies." },
        { title: "Implement", icon: <Settings size={20} />, desc: "Deploy storage infrastructure and automation." },
        { title: "Test", icon: <CheckCircle2 size={20} />, desc: "Validate recovery performance against targets." }
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <h2 className="section-title text-center">Our continuity lifecycle</h2>
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

const VisualSection = () => (
    <section className="section-padding bg-white">
        <div className="container">
            <div className="dr-diagram-container">
                <h3 className="text-center mb-4">Resilient Recovery Architecture</h3>
                <div className="dr-diagram">
                    <div className="diagram-node">
                        <div className="node-icon"><Server size={32} /></div>
                        <span>Primary Site</span>
                    </div>
                    <div className="diagram-path">
                        <div className="path-line"></div>
                        <div className="path-label">Real-time sync</div>
                    </div>
                    <div className="diagram-node active">
                        <div className="node-icon"><Cloud size={32} /></div>
                        <span>Cloud Backup</span>
                    </div>
                    <div className="diagram-path">
                        <div className="path-line dashed"></div>
                        <div className="path-label">Failover</div>
                    </div>
                    <div className="diagram-node">
                        <div className="node-icon"><RotateCcw size={32} /></div>
                        <span>Recovery Site</span>
                    </div>
                </div>
                <div className="metrics-strip-alt mt-5">
                    <div className="metric-pill"><Zap size={16} /> Reduced downtime</div>
                    <div className="metric-pill"><CheckCircle2 size={16} /> Tested recovery</div>
                    <div className="metric-pill"><Shield size={16} /> Secure retention</div>
                </div>
            </div>
        </div>
    </section>
);

const FinalCTA = () => (
    <section className="container mb-5">
        <div className="final-cta-box-alt">
            <h2>Protect your operations today.</h2>
            <p className="mb-3">Get a tailored disaster recovery plan that scales with you.</p>
            <div className="cta-row-center">
                <Link to="/contact" className="btn btn-primary-light">Talk to an Architect</Link>
            </div>
        </div>
    </section>
);

const BusinessContinuity = () => {
    return (
        <div className="solution-detail-page">
            <ContinuintyHero />
            <WhatYouGet />
            <HowWeWork />
            <VisualSection />
            <FinalCTA />
            <div className="section-padding"></div>
        </div>
    );
};

export default BusinessContinuity;
