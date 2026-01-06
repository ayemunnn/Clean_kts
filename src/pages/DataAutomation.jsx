import React from 'react';
import {
    Database,
    Zap,
    FileText,
    Search,
    Settings,
    CheckCircle2,
    ArrowRight,
    Maximize,
    Layers,
    BarChart3,
    ClipboardList,
    CreditCard,
    UserCheck,
    Briefcase
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AutomationHero = () => (
    <section className="solution-hero section-padding">
        <div className="container hero-grid">
            <motion.div
                className="hero-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="eyebrow">Intelligent Workflows</span>
                <h1 className="heading-xl">Data Extraction & Automation</h1>
                <p className="text-lg">
                    Automate document processing with intelligent extraction workflows using OCR and validation—reduce manual effort and speed up operations.
                </p>
                <div className="cta-row">
                    <Link to="/contact" className="btn btn-primary">Book a Consultation</Link>
                    <Link to="/solutions" className="btn btn-secondary">See Solutions</Link>
                </div>
            </motion.div>

            <div className="hero-right">
                <div className="automation-ui-card animate-float">
                    <div className="automation-ui-header">
                        <span>OCR Extraction Pipeline</span>
                        <div className="status-pill blue">Running</div>
                    </div>
                    <div className="extraction-visual">
                        <div className="raw-document">
                            <div className="doc-line short"></div>
                            <div className="doc-line"></div>
                            <div className="doc-line highlighted"></div>
                            <div className="doc-line short"></div>
                        </div>
                        <div className="extraction-arrow">
                            <Zap size={20} className="pulse-zap" />
                        </div>
                        <div className="extracted-fields">
                            <div className="field-item">
                                <span className="label">Invoice #</span>
                                <span className="val">INV-2024-001</span>
                            </div>
                            <div className="field-item">
                                <span className="label">Total</span>
                                <span className="val">$1,240.00</span>
                            </div>
                            <div className="field-item">
                                <span className="label">Date</span>
                                <span className="val">Jan 06, 2026</span>
                            </div>
                        </div>
                    </div>
                    <div className="processing-metrics">
                        <div className="metric-mini">
                            <strong>99.4%</strong>
                            <span>Accuracy</span>
                        </div>
                        <div className="metric-mini">
                            <strong>\u003c 2s</strong>
                            <span>Per Page</span>
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
            title: "Document intake & classification",
            icon: <Layers size={24} />,
            desc: "Automatically route and categorize incoming documents from email, cloud, or API."
        },
        {
            title: "OCR extraction pipeline",
            icon: <Maximize size={24} />,
            desc: "High-precision character recognition for typed, handwritten, and complex forms."
        },
        {
            title: "Field validation & QA",
            icon: <CheckCircle2 size={24} />,
            desc: "Automated business rule validation and human-in-the-loop review queues."
        },
        {
            title: "Structured exports",
            icon: <FileText size={24} />,
            desc: "Clean CSV, JSON, or XML outputs mapped directly to your downstream systems."
        },
        {
            title: "Integration-ready design",
            icon: <Zap size={24} />,
            desc: "Connect seamlessly with ERPs, CRMs, and custom databases via secure webhooks."
        },
        {
            title: "Productivity reporting",
            icon: <BarChart3 size={24} />,
            desc: "Detailed visibility into processing volumes, accuracy rates, and time savings."
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

const UseCaseGrid = () => {
    const cases = [
        { title: "Invoices & Receipts", icon: <CreditCard size={32} />, desc: "Automate AP workflows and expense tracking." },
        { title: "Forms & Applications", icon: <ClipboardList size={32} />, desc: "Speed up intake for services and registrations." },
        { title: "IDs & Onboarding", icon: <UserCheck size={32} />, desc: "Accelerate KYC and employee onboarding docs." },
        { title: "Reports & Contracts", icon: <Briefcase size={32} />, desc: "Extract key clauses and financial metrics at scale." }
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <h2 className="section-title text-center">Industry use cases</h2>
                <div className="use-case-grid">
                    {cases.map((c, i) => (
                        <motion.div
                            key={i}
                            className="use-case-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="uc-icon">{c.icon}</div>
                            <h3>{c.title}</h3>
                            <p>{c.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const HowWeWork = () => {
    const steps = [
        { title: "Discover", icon: <Search size={20} />, desc: "Analyze document samples and map current workflows." },
        { title: "Design", icon: <Settings size={20} />, desc: "Architect extraction schemas and validation rules." },
        { title: "Automate", icon: <Zap size={20} />, desc: "Deploy the pipeline and integrate with your systems." },
        { title: "Scale", icon: <BarChart3 size={20} />, desc: "Monitor performance and expand to new document types." }
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container">
                <h2 className="section-title text-center">Our automation lifecycle</h2>
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
            <h2>Bring your document workflow to life.</h2>
            <p className="mb-3">Transform manual data entry into intelligent, automated workflows.</p>
            <div className="cta-row-center">
                <Link to="/contact" className="btn btn-primary-light">Get Started</Link>
            </div>
        </div>
    </section>
);

const DataAutomation = () => {
    return (
        <div className="solution-detail-page">
            <AutomationHero />
            <WhatYouGet />
            <UseCaseGrid />
            <HowWeWork />
            <FinalCTA />
            <div className="section-padding"></div>
        </div>
    );
};

export default DataAutomation;
