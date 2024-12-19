import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/Home';
import { FeaturesPage } from './pages/features';
import { PricingPage } from './pages/pricing';
import { CaseStudiesPage } from './pages/case-studies';
import { DocumentationPage } from './pages/documentation';
import { AboutPage } from './pages/about';
import { CareersPage } from './pages/careers';
import { ContactPage } from './pages/contact';
import { BlogPage } from './pages/blog';
import { CommunityPage } from './pages/community';
import { HealthPage } from './pages/health';
import { ApiStatusPage } from './pages/api-status';
import { PartnersPage } from './pages/partners';
import { FAQPage } from './pages/faq';
import { SchedulingPage } from './pages/Scheduling';
import { ComingSoonPage } from './pages/ComingSoon';
import { PrivacyPolicy } from './pages/policies/PrivacyPolicy';
import { TermsOfService } from './pages/policies/TermsOfService';
import { CookiePolicy } from './pages/policies/CookiePolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/docs" element={<DocumentationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/health" element={<HealthPage />} />
          <Route path="/api-status" element={<ApiStatusPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/schedule" element={<SchedulingPage />} />
          <Route path="/coming-soon" element={<ComingSoonPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;