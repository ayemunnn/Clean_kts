import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import ManagedServices from './pages/ManagedServices';

// Basic placeholders for missing pages
const Placeholder = ({ title }) => (
    <div className="section-padding container text-center">
        <h1 className="heading-xl">{title}</h1>
        <p className="text-lg">This page is currently under development. Stay tuned!</p>
    </div>
);

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/solutions" element={<Solutions />} />

                    {/* Defined routes in the prompt but not fully implemented yet */}
                    <Route path="/managed-services" element={<ManagedServices />} />
                    <Route path="/contact" element={<Placeholder title="Contact Us" />} />
                    <Route path="/kts-it-infrastructure-security-solutions" element={<Placeholder title="IT Infrastructure & Security" />} />
                    <Route path="/kts-cloud-migration-solution" element={<Placeholder title="Cloud Migration" />} />
                    <Route path="/kloud-tech-business-continuity-solution" element={<Placeholder title="Business Continuity" />} />
                    <Route path="/kts-data-center-solution" element={<Placeholder title="Data Center Solutions" />} />
                    <Route path="/kts-cloud-services" element={<Placeholder title="Cloud Services" />} />
                    <Route path="/kts-data-extraction-automation" element={<Placeholder title="Data Extraction & Automation" />} />

                    {/* Fallback */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
