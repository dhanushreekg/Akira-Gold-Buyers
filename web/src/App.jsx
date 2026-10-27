import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import ScrollToTopButton from './components/ScrollToTopButton.jsx';
import FixedContactIcons from './components/FixedContactIcons.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import FAQPage from './pages/FAQPage.jsx';
import ContactUsPage from './pages/ContactUsPage.jsx';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FixedContactIcons />
      <ScrollToTopButton />
      <Toaster />
    </Router>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Page not found</p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-secondary text-secondary-foreground px-6 py-3 font-medium hover:bg-secondary/90 transition-all duration-200"
        >
          Back to home
        </a>
      </div>
    </div>
  );
}

export default App;