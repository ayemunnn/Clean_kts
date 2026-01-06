import React, { useState } from 'react';
import {
    CheckCircle2,
    ArrowRight,
    Search,
    Layout,
    Database,
    ShieldCheck,
    Zap,
    TrendingUp,
    ChevronDown,
    ChevronUp,
    Clock,
    Settings,
    Shield,
    BarChart3
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const MigrationHero = () => (
    <section className="solution-hero section-padding">
        <div className="container hero-grid">
            <motion.div
                className="hero-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="eyebrow">Cloud Solutions</span>
                <h1 className="heading-xl">Cloud Migration</h1>
                <p className="text-lg">
                    Move workloads to the cloud with minimal downtime, security-first design, and clear modernization steps.
                </p>
                <div className="cta-row">
                    <Link to="/contact" className="btn btn-primary">Book a Consultation</Link>
                    <Link to="/solutions" className="btn btn-secondary">All Solutions</Link>
                </div>
            </motion.div>

            <div className="hero-right">
                <div className="migration-ui-card animate-float">
                    <div className="migration-ui-header">
                        <span>Migration Progress</span>
                        <div className="status-pill">Active</div>
                    </div>
                    <div className="migration-timeline-ui">
                        <div className="timeline-step done">
                            <div className="step-dot"></div>
                            <div className="step-text">
                                <strong>Discovery</strong>
                                <span>Completed</span>
                            </div>
                        </div>
                        <div className="timeline-step active">
                            <div className="step-dot"></div>
                            <div className="step-text">
                                <strong>Landing Zone</strong>
                                <span>In Progress (75%)</span>
                            </div>
                            <div className="mini-progress-bar">
                                <div className="progress-inner" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                        <div className="timeline-step">
                            <div className="step-dot"></div>
                            <div className="step-text">
                                <strong>Execution</strong>
                                <span>Pending</span>
                            </div>
                        </div>
                    </div>
                    <div className="checklist-box">
                        <h4>Readiness Checklist</h4>
                        <div className="checklist-item"><CheckCircle2 size={14} className="green" /> Security baseline defined</div>
                        <div className="checklist-item"><CheckCircle2 size={14} className="green" /> Latency audit complete</div>
                        <div className="checklist-item"><div className="empty-dot"></div> IAM roles mapped</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const BentoGrid = () => {
    const items = [
        {
            title: "Discovery & readiness assessment",
            icon: <Search size={24} />,
            desc: "Deep audit of your current stack to identify dependencies and cloud-readiness."
        },
        {
            title: "Migration strategy & roadmap",
            icon: <Layout size={24} />,
            desc: "Phased approach (Rehost, Refactor, or Replatform) tailored to your business goals."
        },
        {
            title: "Landing zone setup",
            icon: <ShieldCheck size={24} />,
            desc: "Secure foundation with networking, identity, and governance guardrails built-in."
        },
        {
            title: "Data & app migration",
            icon: <Database size={24} />,
            desc: "High-speed data transfer and application migration with minimal operational impact."
        },
        {
            title: "Cutover & validation",
            icon: <Zap size={24} />,
            desc: "Carefully orchestrated transition with rigorous testing and validation protocols."
        },
        {
            title: "Post-migration optimization",
            icon: <TrendingUp size={24} />,
            desc: "Continuous refinement of costs and performance to maximize cloud value."
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

const ProcessSection = () => {
    const steps = [
        { title: "Assess", icon: <Search size={20} />, desc: "Evaluate stack and identify migration paths." },
        { title: "Design", icon: <Settings size={20} />, desc: "Architect the landing zone and migration plan." },
        { title: "Implement", icon: <Zap size={20} />, desc: "Execute migration and validate functionality." },
        { title: "Optimize", icon: <BarChart3 size={20} />, desc: "Fine-tune performance and operational costs." }
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <h2 className="section-title text-center">How we work</h2>
                <div className="process-timeline-alt">
                    {steps.map((s, i) => (
                        <div key={i} className="process-step-alt">
                            <div className="step-tag">Step 0{i + 1}</div>
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

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            q: "Typical timeline for migration?",
            a: "Timelines vary based on scale, but a typical enterprise phase takes 8–12 weeks from assessment to cutover. Smaller projects can be completed in as little as 4 weeks."
        },
        {
            q: "What are the downtime expectations?",
            a: "We aim for near-zero downtime. For most applications, we use staging environments and cutover strategies that involve only a few minutes of scheduled maintenance."
        },
        {
            q: "How do you handle security & compliance?",
            a: "Security is baked into the Landing Zone. We implement automated guardrails, identity controls, and audit logging to ensure your cloud environment stays compliant."
        },
        {
            q: "How is cost controlled during/after migration?",
            a: "We provide rightsizing recommendations before migration and implement budget alerts and performance monitoring immediately after to prevent cloud spend 'sprawl'."
        }
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container max-w-700">
                <h2 className="section-title text-center">Common questions</h2>
                <div className="faq-accordion">
                    {faqs.map((faq, i) => (
                        <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
                            <button
                                className="faq-question"
                                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                            >
                                <span>{faq.q}</span>
                                {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        className="faq-answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p>{faq.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FinalCTABand = () => (
    <section className="container mb-5">
        <div className="final-cta-box-alt">
            <h2>Ready to migrate?</h2>
            <div className="cta-row justify-center mt-3">
                <Link to="/contact" className="btn btn-primary-light">Contact Us</Link>
                <Link to="/managed-services" className="btn btn-secondary-light">View Managed Services</Link>
            </div>
        </div>
    </section>
);

const CloudMigration = () => {
    return (
        <div className="solution-detail-page">
            <MigrationHero />
            <BentoGrid />
            <ProcessSection />
            <FAQSection />
            <FinalCTABand />
            <div className="section-padding"></div>
        </div>
    );
};

export default CloudMigration;
