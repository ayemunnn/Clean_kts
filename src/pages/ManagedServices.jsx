import React from 'react';
import {
    Shield,
    Cloud,
    Zap,
    Activity,
    Clock,
    CheckCircle2,
    Search,
    Settings,
    BarChart,
    Lock,
    MessageSquare,
    TrendingDown,
    ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ManagedHero = () => (
    <section className="managed-hero section-padding">
        <div className="container hero-grid">
            <motion.div
                className="hero-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="eyebrow">Enterprise Support</span>
                <h1 className="heading-xl">Managed Services that keep your business running.</h1>
                <p className="text-lg">
                    Monitoring, maintenance, and continuous optimization for infrastructure, security, and cloud workloads.
                </p>
                <div className="cta-row">
                    <Link to="/contact" className="btn btn-primary">Get Started Now</Link>
                    <Link to="/solutions" className="btn btn-secondary">View Solutions</Link>
                </div>
            </motion.div>

            <div className="hero-right">
                <div className="cockpit-ui animate-float">
                    <div className="cockpit-header">
                        <div className="dots"><span></span><span></span><span></span></div>
                        <span>Operations Cockpit — Live</span>
                    </div>
                    <div className="cockpit-body">
                        <div className="cockpit-grid">
                            <div className="cockpit-tile">
                                <span className="tile-label">SLA Uptime</span>
                                <span className="tile-value green">99.98%</span>
                            </div>
                            <div className="cockpit-tile">
                                <span className="tile-label">Avg. Response</span>
                                <span className="tile-value">12m</span>
                            </div>
                        </div>
                        <div className="alert-timeline">
                            <div className="alert-item">
                                <div className="alert-line"></div>
                                <div className="alert-dot green"></div>
                                <div className="alert-info">
                                    <p>Security scan complete</p>
                                    <span>2 mins ago</span>
                                </div>
                            </div>
                            <div className="alert-item">
                                <div className="alert-line"></div>
                                <div className="alert-dot blue"></div>
                                <div className="alert-info">
                                    <p>Cloud resource autoscaled</p>
                                    <span>14 mins ago</span>
                                </div>
                            </div>
                            <div className="alert-item">
                                <div className="alert-dot orange"></div>
                                <div className="alert-info">
                                    <p>Backup verification successful</p>
                                    <span>1 hour ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const ServiceCards = () => {
    const services = [
        {
            title: "IT Infrastructure Management",
            icon: <Activity size={24} />,
            bullets: ["Real-time monitoring", "Automated patching", "Systems administration", "Performance tuning"]
        },
        {
            title: "IT Security Management",
            icon: <Lock size={24} />,
            bullets: ["Continuous threat monitoring", "Access & Identity controls", "Compliance guardrails", "Vulnerability management"]
        },
        {
            title: "Microsoft 365 / Azure Support",
            icon: <Cloud size={24} />,
            bullets: ["Tenant governance", "Identity protection", "Productivity support", "License optimization"]
        },
        {
            title: "Cloud Cost Optimization",
            icon: <TrendingDown size={24} />,
            bullets: ["Rightsizing resources", "Spend forecasting", "Budget enforcement", "Anomaly alerts"]
        }
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container">
                <h2 className="section-title text-center mb-4">Proactive management layers</h2>
                <div className="managed-services-grid">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            className="service-card-alt"
                            whileHover={{ y: -8 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="card-icon">{s.icon}</div>
                            <h3>{s.title}</h3>
                            <ul className="service-bullets">
                                {s.bullets.map((b, j) => (
                                    <li key={j}><CheckCircle2 size={14} className="check-icon" /> {b}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const EngagementModel = () => {
    const models = [
        {
            title: "Advisory Sprint",
            bestFor: "Building a roadmap and stabilizing current state.",
            duration: "2–4 Weeks",
            deliverables: ["Cloud Audit", "Stabilization Plan", "Cost Roadmap"],
            type: "Project-based"
        },
        {
            title: "Ongoing Managed Ops",
            bestFor: "Day-to-day operations and scaling businesses.",
            duration: "Monthly",
            deliverables: ["24/7 Monitoring", "Helpdesk Support", "Performance Ops"],
            type: "Subscription",
            popular: true
        },
        {
            title: "Managed Security",
            bestFor: "High-compliance environments and risk reduction.",
            duration: "Monthly",
            deliverables: ["SOC-as-a-Service", "Compliance Reporting", "Threat Hunting"],
            type: "Subscription"
        }
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <h2 className="section-title text-center">Flexible engagement models</h2>
                <div className="engagement-grid">
                    {models.map((m, i) => (
                        <div key={i} className={`engagement-card ${m.popular ? 'popular' : ''}`}>
                            {m.popular && <div className="popular-badge">Most Popular</div>}
                            <div className="eng-header">
                                <h3>{m.title}</h3>
                                <span className="price-label">{m.duration}</span>
                            </div>
                            <p className="best-for"><strong>Best for:</strong> {m.bestFor}</p>
                            <div className="eng-deliverables">
                                {m.deliverables.map((d, j) => (
                                    <div key={j} className="deliverable-item">
                                        <CheckCircle2 size={16} /> {d}
                                    </div>
                                ))}
                            </div>
                            <button className="btn btn-secondary full-width mt-2">Request details</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProcessSection = () => {
    const steps = [
        { title: "Assess", icon: <Search size={20} />, desc: "Complete audit of existing environment." },
        { title: "Stabilize", icon: <Settings size={20} />, desc: "Fix immediate security and performance gaps." },
        { title: "Optimize", icon: <Zap size={20} />, desc: "Rightsize and modernize for efficiency." },
        { title: "Report", icon: <BarChart size={20} />, desc: "Monthly reviews and strategic alignment." }
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container">
                <h2 className="section-title text-center">Our operational lifecycle</h2>
                <div className="process-timeline">
                    {steps.map((s, i) => (
                        <div key={i} className="process-step">
                            <div className="step-number">{i + 1}</div>
                            <div className="step-icon-box">{s.icon}</div>
                            <h4>{s.title}</h4>
                            <p>{s.desc}</p>
                            {i < steps.length - 1 && <div className="step-connector"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SocialProof = () => {
    const testimonials = [
        { name: "Sarah Chen", role: "CTO at CloudScale", text: "KTS reduced our cloud spend by 40% while improving our security posture significantly." },
        { name: "John Miller", role: "Ops Lead at FinTech Global", text: "Their managed security service gives us peace of mind. Truly an extension of our team." }
    ];

    const metrics = [
        { label: "Reduced MTTR", val: "65%" },
        { label: "Improved uptime", val: "99.98%" },
        { label: "Lowered spend", val: "32%" }
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <div className="social-proof-grid">
                    <div className="testimonials">
                        {testimonials.map((t, i) => (
                            <div key={i} className="testimonial-card">
                                <MessageSquare className="quote-icon" size={24} />
                                <p>"{t.text}"</p>
                                <div className="t-author">
                                    <strong>{t.name}</strong>
                                    <span>{t.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="metrics-box-managed">
                        {metrics.map((m, i) => (
                            <div key={i} className="metric-managed">
                                <span className="m-val">{m.val}</span>
                                <span className="m-label">{m.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const FinalCTA = () => (
    <section className="container mb-5">
        <div className="final-cta-box">
            <h2>Get predictable support and measurable outcomes.</h2>
            <Link to="/contact" className="btn btn-primary-light mt-3">Book a Consultation</Link>
        </div>
    </section>
);

const ManagedServices = () => {
    return (
        <div className="managed-services-page">
            <ManagedHero />
            <ServiceCards />
            <ProcessSection />
            <EngagementModel />
            <SocialProof />
            <FinalCTA />
            <div className="section-padding"></div>
        </div>
    );
};

export default ManagedServices;
