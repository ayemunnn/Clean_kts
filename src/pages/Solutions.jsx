import React from 'react';
import {
    Shield,
    Cloud,
    Zap,
    Database,
    Cpu,
    Layers,
    ArrowRight,
    Server,
    FileText,
    Activity
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SolutionsHero = () => (
    <section className="solutions-hero section-padding">
        <div className="container text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="heading-xl">Solutions built for reliability, security, and growth.</h1>
                <p className="text-lg mb-3 mx-auto max-w-700">
                    Choose a solution area to explore deliverables, approach, and outcomes.
                </p>
                <div className="cta-row-center">
                    <Link to="/contact" className="btn btn-primary">Book a Consultation</Link>
                    <Link to="/managed-services" className="btn btn-secondary">Managed Services</Link>
                </div>
            </motion.div>
        </div>
    </section>
);

const SolutionsGrid = () => {
    const solutions = [
        {
            title: "IT Infrastructure & Security",
            icon: <Shield size={28} />,
            summary: "Comprehensive infrastructure design with embedded security at every layer.",
            tags: ["Security", "Network", "Monitoring"],
            link: "/kts-it-infrastructure-security-solutions"
        },
        {
            title: "Cloud Migration",
            icon: <Cloud size={28} />,
            summary: "Seamless transition of your workloads with zero-downtime strategies.",
            tags: ["Migration", "Modernization", "Cutover"],
            link: "/kts-cloud-migration-solution"
        },
        {
            title: "Business Continuity",
            icon: <Zap size={28} />,
            summary: "Ensure operational resilience with robust backup and rapid disaster recovery.",
            tags: ["Backup", "DR", "Resilience"],
            link: "/kloud-tech-business-continuity-solution"
        },
        {
            title: "Data Center Solutions",
            icon: <Server size={28} />,
            summary: "Optimized server and storage solutions for high-performance computing needs.",
            tags: ["Data Center", "Compute", "Storage"],
            link: "/kts-data-center-solution"
        },
        {
            title: "Cloud Services",
            icon: <Layers size={28} />,
            summary: "Leverage Azure and Microsoft 365 for scalable enterprise productivity.",
            tags: ["Cloud", "Managed Cloud", "Azure/M365"],
            link: "/kts-cloud-services"
        },
        {
            title: "Data Extraction & Automation",
            icon: <Database size={28} />,
            summary: "Unlock efficiency with AI-driven document processing and workflow automation.",
            tags: ["OCR", "Automation", "Document Processing"],
            link: "/kts-data-extraction-automation"
        }
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container">
                <div className="solutions-hub-grid">
                    {solutions.map((sol, i) => (
                        <motion.div
                            key={i}
                            className="solution-hub-card"
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="sol-icon-box">{sol.icon}</div>
                            <h3>{sol.title}</h3>
                            <p>{sol.summary}</p>
                            <div className="tag-chips">
                                {sol.tags.map((tag, j) => (
                                    <span key={j} className="tag-chip">{tag}</span>
                                ))}
                            </div>
                            <Link to={sol.link} className="btn-know-more">
                                Know more <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const DiscoveryStrip = () => (
    <section className="section-padding">
        <div className="container">
            <div className="discovery-box">
                <div className="discovery-content">
                    <span className="eyebrow">Interactive Guide</span>
                    <h2>Not sure what you need?</h2>
                    <p>Answer a few questions and we'll recommend a path based on your specific goals.</p>
                    <Link to="/contact" className="btn btn-primary mt-2">Talk to an Architect</Link>
                </div>
                <div className="discovery-form-ui">
                    <div className="form-ui-step">
                        <label>Company Size</label>
                        <div className="ui-select">Select range...</div>
                    </div>
                    <div className="form-ui-step">
                        <label>Primary Goal</label>
                        <div className="ui-select">Select goal...</div>
                    </div>
                    <div className="form-ui-step">
                        <label>Timeline</label>
                        <div className="ui-select">Select timeline...</div>
                    </div>
                    <div className="form-ui-progress">
                        <div className="progress-bar-inner" style={{ width: '33%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const FinalCTA = () => (
    <section className="section-padding py-0">
        <div className="container">
            <div className="final-cta-box-alt">
                <h2>Move faster with the right cloud foundation.</h2>
                <div className="cta-row-center mt-3">
                    <Link to="/contact" className="btn btn-primary-light">Book a Consultation</Link>
                    <Link to="/contact" className="btn btn-outline-white">Contact Sales</Link>
                </div>
            </div>
        </div>
    </section>
);

const Solutions = () => {
    return (
        <div className="solutions-hub-page">
            <SolutionsHero />
            <SolutionsGrid />
            <DiscoveryStrip />
            <FinalCTA />
            <div className="section-padding"></div>
        </div>
    );
};

export default Solutions;
