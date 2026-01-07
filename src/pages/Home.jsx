import React from 'react';
import {
    ArrowRight,
    Cloud,
    Shield,
    Database,
    Cpu,
    Zap,
    Users,
    Activity,
    Lock,
    BarChart3,
    ArrowUpRight,
    CheckCircle2,
    LayoutDashboard,
    PieChart,
    MessageSquare
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero-section container">
            <div className="hero-grid">
                <motion.div
                    className="hero-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="eyebrow-pill">Cloud Computing | Managed Services | Security</span>
                    <h1 className="heading-xl">Elevate Business with Cloud Solutions</h1>
                    <p className="text-lg">
                        Kloud Tech Solution helping organizations accelerate business with IT. With agility, Intelligence & Deep Technical Experience, Kloud Tech Solution has been empowering organizations to integrate emerging, strategic IT solutions, disrupt old paradigms and reimage business, process and outcomes with innovative, bottom-line driven technologies to drive business success.
                    </p>
                    <div className="cta-row">
                        <Link to="/contact" className="btn btn-primary">Get Started Now <ArrowRight size={18} /></Link>
                        <Link to="/solutions" className="btn btn-secondary">View Solutions</Link>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-right visual-stack"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    {/* Layer A: Stage Panel */}
                    <div className="visual-stage"></div>

                    {/* Layer B: Glow Aura */}
                    <div className="visual-glow"></div>

                    {/* Layer C: Main Dashboard (Slow Flow) */}
                    <motion.div
                        className="main-desktop-card"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="mock-header">
                            <div className="dots"><span></span><span></span><span></span></div>
                            <div className="mock-search"><LayoutDashboard size={12} style={{ marginRight: '6px' }} /> Infrastructure Overview</div>
                        </div>
                        <div className="mock-body">
                            <div className="kpi-grid">
                                <div className="kpi-tile">
                                    <div className="kpi-icon uptime"><Activity size={18} /></div>
                                    <div className="mini-bar" style={{ width: '60%', marginBottom: '4px' }}></div>
                                    <div className="mini-bar" style={{ width: '40%' }}></div>
                                </div>
                                <div className="kpi-tile">
                                    <div className="kpi-icon security"><Shield size={18} /></div>
                                    <div className="mini-bar" style={{ width: '70%', marginBottom: '4px' }}></div>
                                    <div className="mini-bar" style={{ width: '30%' }}></div>
                                </div>
                            </div>
                            <div className="mock-chart">
                                {[60, 80, 45, 90, 55, 75, 40].map((h, i) => (
                                    <div key={i} className="bar" style={{ height: `${h}%` }}></div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Layer D: Floating Feature Card (Fast Flow) */}
                    <motion.div
                        className="floating-feature-card"
                        animate={{ y: [0, -14, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 30px 60px rgba(0,0,0,0.15)" }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div className="mini-circle"></div>
                            <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Cloud Services</span>
                        </div>
                        <div className="mini-bar orange" style={{ width: '100%', marginTop: '4px' }}></div>
                        <div className="mini-bar" style={{ width: '80%' }}></div>
                        <div style={{ marginTop: '8px', borderTop: '1px solid #f0f0f0', paddingTop: '8px' }}>
                            <PieChart size={24} color="var(--accent-primary)" opacity={0.6} />
                        </div>
                    </motion.div>

                    {/* Layer E: Phone Mock (Medium Flow) */}
                    <motion.div
                        className="mobile-mockup"
                        initial={{ x: 20, y: 20 }}
                        animate={{
                            x: 0,
                            y: [0, -12, 0]
                        }}
                        transition={{
                            x: { duration: 1, delay: 0.4 },
                            y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }
                        }}
                    >
                        <div className="mock-dashboard-mini">
                            <div style={{ height: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', width: '50%', marginBottom: '1.25rem' }}></div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '1.25rem' }}>
                                <div style={{ height: '60px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}></div>
                                <div style={{ height: '60px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}></div>
                            </div>
                            <div style={{ height: '120px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'flex-end', gap: '6px' }}>
                                {[40, 60, 30, 80, 50].map((h, i) => (
                                    <div key={i} style={{ flex: 1, background: 'var(--accent-primary)', height: `${h}%`, borderRadius: '3px', opacity: 0.7 }}></div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

const ExpertiseSection = () => {
    const expertise = [
        {
            title: "Managed Services",
            icon: <LayoutDashboard size={24} />,
            desc: "Kloud Tech is a market leader in IT managed services, with a team of experts dedicated to regularly monitoring, fixing, and updating technology.",
            link: "/managed-services"
        },
        {
            title: "IT Infrastructure & Security",
            icon: <Shield size={24} />,
            desc: "Managing and operating IT environments to ensure uninterrupted customer access, quick decision-making, and enhanced employee productivity.",
            link: "/kts-it-infrastructure-security-solutions"
        },
        {
            title: "Cloud Services",
            icon: <Cloud size={24} />,
            desc: "Helping organizations leverage powerful computing resources without the need to purchase or maintain physical hardware and software.",
            link: "/kts-cloud-services"
        },
        {
            title: "Microsoft 365 & Azure",
            icon: <Cpu size={24} />,
            desc: "Comprehensive suite of services and tools for building, deploying, and managing applications across global data centers.",
            link: "/kts-microsoft-365-and-azure"
        },
        {
            title: "Data Extraction & Automation",
            icon: <Database size={24} />,
            desc: "Leveraging intelligent document processing methods and computer vision techniques to extract and process data from any format.",
            link: "/kts-data-extraction-automation"
        },
        {
            title: "Facility Management Service",
            icon: <Zap size={24} />,
            desc: "Providing expert cost-effective services to enhance asset value and maximize returns for customers ranging from MNCs to SMEs.",
            link: "/kts-facility-management-services"
        }
    ];

    return (
        <section className="section-padding container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '4rem', alignItems: 'flex-end' }}>
                <div>
                    <span className="eyebrow-pill">Our Expertise</span>
                    <h2 className="section-title" style={{ marginBottom: 0 }}>Our Expertise in Corporate Solutions</h2>
                </div>
                <p className="text-secondary">We deliver tailored IT solutions designed to address unique challenges, goals, and requirements of each client.</p>
            </div>
            <div className="expertise-grid">
                {expertise.map((item, idx) => (
                    <motion.div
                        key={idx}
                        className="expertise-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <div className="card-icon">{item.icon}</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{item.title}</h3>
                        <p className="text-secondary" style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>{item.desc}</p>
                        <Link to={item.link} className="learn-more">Learn More <ArrowUpRight size={16} /></Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const CapabilitySection = () => {
    return (
        <section className="section-padding container">
            <div className="capability-highlight">
                <div>
                    <h2 className="section-title">Business Continuity Solution</h2>
                    <p className="text-secondary" style={{ marginBottom: '2rem' }}>
                        When it comes to business continuity Kloud tech is one stop solution. Our Cloud computing provides IT resilience during disruptions, especially when remote work becomes necessary. We look for solutions that align with your organization’s needs and priorities.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                        <div className="chip"><CheckCircle2 size={18} color="var(--accent-primary)" /> Secure Data Storage</div>
                        <div className="chip"><CheckCircle2 size={18} color="var(--accent-primary)" /> Super-fast Disaster Recovery</div>
                        <div className="chip"><CheckCircle2 size={18} color="var(--accent-primary)" /> IT Resilience during disruptions</div>
                    </div>
                    <Link to="/kloud-tech-business-continuity-solution" className="btn btn-primary">Know More</Link>
                </div>
                <div className="capability-visual">
                    <motion.div
                        className="stacked-card"
                        whileHover={{ x: 10, y: -10 }}
                    >
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div className="icon-box" style={{ background: 'var(--accent-soft)', padding: '10px', borderRadius: '8px' }}><Lock size={20} color="var(--accent-primary)" /></div>
                            <div>
                                <h4 style={{ margin: 0 }}>Data Security</h4>
                                <span style={{ fontSize: '0.8rem', color: '#666' }}>Secured Cloud Storage</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="stacked-card"
                        animate={{ x: [40, 50, 40] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    >
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div className="icon-box" style={{ background: '#fef2f2', padding: '10px', borderRadius: '8px' }}><Activity size={20} color="#ef4444" /></div>
                            <div>
                                <h4 style={{ margin: 0 }}>Continuity</h4>
                                <span style={{ fontSize: '0.8rem', color: '#666' }}>Disaster Recovery</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="stacked-card">
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div className="icon-box" style={{ background: '#f0fdf4', padding: '10px', borderRadius: '8px' }}><Database size={20} color="#22c55e" /></div>
                            <div>
                                <h4 style={{ margin: 0 }}>Storage</h4>
                                <span style={{ fontSize: '0.8rem', color: '#666' }}>High Availability</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ValuePoints = () => {
    const values = [
        { title: "Reliable Support System", icon: <MessageSquare size={20} />, text: "Ensuring timely resolution of technical issues with expert assistance." },
        { title: "Accurate Strategic Solution", icon: <BarChart3 size={20} />, text: "Definitive, logical, and strategically compelling IT solutions." },
        { title: "Trusted Guidance", icon: <Users size={20} />, text: "Training users on best practices and security protocols." },
        { title: "Technology Leadership", icon: <Cpu size={20} />, text: "Addressing complex requirements with deep technical expertise." },
        { title: "ROI Maximization", icon: <PieChart size={20} />, text: "Financial insights and bottom-line analysis for smart investments." }
    ];

    return (
        <section className="section-padding container">
            <h2 className="section-title text-center">Our Core Strategic Solutions</h2>
            <div className="value-points-row">
                {values.map((v, i) => (
                    <motion.div
                        key={i}
                        className="value-point-card"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className="icon-box">{v.icon}</div>
                        <h4 style={{ margin: 0 }}>{v.title}</h4>
                        <p className="text-secondary" style={{ fontSize: '0.9rem' }}>{v.text}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const FinalCTA = () => {
    return (
        <section className="section-padding container">
            <div className="cta-band">
                <h2 className="heading-xl">Kloud Tech Solution Experience</h2>
                <p className="text-lg" style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '800px', margin: '0 auto 3rem' }}>
                    Kloud Tech Solutions enhances business acceleration through IT, leveraging agility, intelligence, and deep technical expertise.
                </p>
                <div className="cta-row-center" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                    <Link to="/contact" className="btn btn-secondary" style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>Get in Touch</Link>
                </div>
            </div>
        </section>
    );
};

const Home = () => {
    return (
        <main style={{ backgroundColor: 'var(--bg-primary)' }}>
            <Hero />
            <div className="section-padding" style={{ borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0', background: '#fafafa' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.6 }}>
                    <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>AZURE</span>
                    <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>AWS</span>
                    <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>GOOGLE CLOUD</span>
                    <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>MICROSOFT 365</span>
                    <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>LINUX</span>
                </div>
            </div>
            <ExpertiseSection />
            <CapabilitySection />
            <ValuePoints />
            <FinalCTA />
        </main>
    );
};

export default Home;
