import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import ManagedServices from './pages/ManagedServices';
import Contact from './pages/Contact';
import CloudMigration from './pages/CloudMigration';
import InfrastructureSecurity from './pages/InfrastructureSecurity';
import BusinessContinuity from './pages/BusinessContinuity';
import DataAutomation from './pages/DataAutomation';
import DataCenterSolutions from './pages/DataCenterSolutions';
import CloudServices from './pages/CloudServices';

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
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/kts-it-infrastructure-security-solutions" element={<InfrastructureSecurity />} />
                    <Route path="/kts-cloud-migration-solution" element={<CloudMigration />} />
                    <Route path="/kloud-tech-business-continuity-solution" element={<BusinessContinuity />} />
                    <Route path="/kts-data-center-solution" element={<DataCenterSolutions />} />
                    <Route path="/kts-cloud-services" element={<CloudServices />} />
                    <Route path="/kts-data-extraction-automation" element={<DataAutomation />} />

                    {/* Fallback */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
