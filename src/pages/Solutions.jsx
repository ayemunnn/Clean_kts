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
import { motion, AnimatePresence } from 'framer-motion';
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

const GUIDE_CONFIG = {
    options: {
        companySize: [
            "Solo / Startup (1–10)",
            "Small Business (11–50)",
            "Mid-Market (51–250)",
            "Enterprise (251+)"
        ],
        primaryGoal: [
            "Migrate to Cloud",
            "Improve Security / Compliance",
            "Business Continuity / Disaster Recovery",
            "Reduce IT Costs",
            "Enable Remote Work",
            "Improve Performance / Scalability"
        ],
        timeline: [
            "ASAP (0–2 weeks)",
            "Soon (2–6 weeks)",
            "Planned (6–12 weeks)",
            "Exploratory (3+ months)"
        ]
    },
    recommendations: {
        "Migrate to Cloud": {
            primary: { title: "Cloud Migration Strategy", desc: "Expert assessment and execution of your cloud transition.", link: "/kts-cloud-migration-solution" },
            secondary: [
                { title: "Cloud Services", link: "/kts-cloud-services" },
                { title: "IT Infrastructure", link: "/kts-it-infrastructure-security-solutions" }
            ]
        },
        "Improve Security / Compliance": {
            primary: { title: "IT Infrastructure & Security", desc: "Hardened security posture and compliance frameworks.", link: "/kts-it-infrastructure-security-solutions" },
            secondary: [
                { title: "Managed Services", link: "/managed-services" },
                { title: "Business Continuity", link: "/kloud-tech-business-continuity-solution" }
            ]
        },
        "Business Continuity / Disaster Recovery": {
            primary: { title: "Business Continuity Planning", desc: "Zero-data-loss strategies and rapid failover systems.", link: "/kloud-tech-business-continuity-solution" },
            secondary: [
                { title: "Data Center Solutions", link: "/kts-data-center-solution" },
                { title: "IT Infrastructure", link: "/kts-it-infrastructure-security-solutions" }
            ]
        },
        "Reduce IT Costs": {
            primary: { title: "Managed IT Services", desc: "Predictable monthly costs and optimized resource utilization.", link: "/managed-services" },
            secondary: [
                { title: "Cloud Services", link: "/kts-cloud-services" },
                { title: "Data Automation", link: "/kts-data-extraction-automation" }
            ]
        },
        "Enable Remote Work": {
            primary: { title: "Modern Workplace Solutions", desc: "Secure, performant remote access and collaboration tools.", link: "/kts-cloud-services" },
            secondary: [
                { title: "Managed Services", link: "/managed-services" },
                { title: "IT Infrastructure", link: "/kts-it-infrastructure-security-solutions" }
            ]
        },
        "Improve Performance / Scalability": {
            primary: { title: "High-Performance Data Center", desc: "Scalable compute and storage tailored for growth.", link: "/kts-data-center-solution" },
            secondary: [
                { title: "Cloud Migration", link: "/kts-cloud-migration-solution" },
                { title: "Cloud Services", link: "/kts-cloud-services" }
            ]
        }
    }
};

const DiscoveryStrip = () => {
    const [selections, setSelections] = React.useState({
        companySize: "",
        primaryGoal: "",
        timeline: ""
    });

    const completionCount = Object.values(selections).filter(v => v !== "").length;
    const progressWidth = (completionCount / 3) * 100;
    const isComplete = completionCount === 3;

    const recommendation = isComplete ? GUIDE_CONFIG.recommendations[selections.primaryGoal] : null;

    const getArchitectLink = () => {
        const message = encodeURIComponent(
            `I'd like to discuss a tailored solution.\n\n` +
            `Company Size: ${selections.companySize || 'Not specified'}\n` +
            `Primary Goal: ${selections.primaryGoal || 'Not specified'}\n` +
            `Timeline: ${selections.timeline || 'Not specified'}`
        );
        return `/contact?message=${message}`;
    };

    return (
        <section className="section-padding">
            <div className="container">
                <div className="discovery-box">
                    <div className="discovery-content">
                        <span className="eyebrow">Interactive Guide</span>
                        <h2>Not sure what you need?</h2>
                        <p>Answer a few questions and we'll recommend a path based on your specific goals.</p>

                        <AnimatePresence mode="wait">
                            {isComplete ? (
                                <motion.div
                                    className="recommendation-panel"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <div className="rec-badge">Recommended Path</div>
                                    <h3>{recommendation.primary.title}</h3>
                                    <p className="rec-desc">{recommendation.primary.desc}</p>

                                    <div className="rec-secondary">
                                        <span>Related solutions:</span>
                                        <div className="rec-chips">
                                            {recommendation.secondary.map((s, i) => (
                                                <Link key={i} to={s.link} className="rec-chip">
                                                    {s.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="cta-row mt-2">
                                        <Link to={recommendation.primary.link} className="btn btn-primary">
                                            View Solution Details <ArrowRight size={16} />
                                        </Link>
                                        <Link to={getArchitectLink()} className="btn btn-secondary">
                                            Talk to an Architect
                                        </Link>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <Link to="/contact" className="btn btn-primary mt-2">Talk to an Architect</Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="discovery-form-ui">
                        <div className="form-ui-step">
                            <label>Company Size</label>
                            <div className="ui-select-wrapper">
                                <select
                                    className="ui-native-select"
                                    value={selections.companySize}
                                    onChange={(e) => setSelections({ ...selections, companySize: e.target.value })}
                                >
                                    <option value="" disabled>Select range...</option>
                                    {GUIDE_CONFIG.options.companySize.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                                <div className={`ui-select-custom ${selections.companySize ? 'has-value' : ''}`}>
                                    {selections.companySize || 'Select range...'}
                                </div>
                            </div>
                        </div>

                        <div className="form-ui-step">
                            <label>Primary Goal</label>
                            <div className="ui-select-wrapper">
                                <select
                                    className="ui-native-select"
                                    value={selections.primaryGoal}
                                    onChange={(e) => setSelections({ ...selections, primaryGoal: e.target.value })}
                                >
                                    <option value="" disabled>Select goal...</option>
                                    {GUIDE_CONFIG.options.primaryGoal.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                                <div className={`ui-select-custom ${selections.primaryGoal ? 'has-value' : ''}`}>
                                    {selections.primaryGoal || 'Select goal...'}
                                </div>
                            </div>
                        </div>

                        <div className="form-ui-step">
                            <label>Timeline</label>
                            <div className="ui-select-wrapper">
                                <select
                                    className="ui-native-select"
                                    value={selections.timeline}
                                    onChange={(e) => setSelections({ ...selections, timeline: e.target.value })}
                                >
                                    <option value="" disabled>Select timeline...</option>
                                    {GUIDE_CONFIG.options.timeline.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                                <div className={`ui-select-custom ${selections.timeline ? 'has-value' : ''}`}>
                                    {selections.timeline || 'Select timeline...'}
                                </div>
                            </div>
                        </div>

                        <div className="form-ui-progress">
                            <motion.div
                                className="progress-bar-inner"
                                animate={{ width: `${progressWidth}%` }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

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
