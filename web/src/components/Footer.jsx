import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex flex-col items-start space-y-4 mb-8">
              <div className="bg-white p-4 rounded-2xl inline-block">
                <img
                  src="https://horizons-cdn.hostinger.com/7c6d6107-c38f-4be4-91dc-65d789a13756/4ff819617ae6fcee29a8601da53ff0a1.png"
                  alt="Akira Gold Buyers Logo"
                  className="h-12 md:h-24 w-auto object-contain"
                />
              </div>
              <span className="sr-only">
                Akira Gold Buyers
              </span>
            </div>
            <p className="text-base leading-relaxed opacity-90 max-w-md mb-8 text-white">
              Your trusted partner for gold buying services. We offer the best rates, transparent dealings, and secure doorstep services for all your gold selling needs.
            </p>
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 text-sm">
              <strong className="block mb-1">Warning:</strong>
              Akira Gold Buyers enforces a strict zero-tolerance policy on stolen or misappropriated property.
              Selling such items is a criminal offense, and all activities are monitored in cooperation with law enforcement.
              Valid government identification is mandatory for every appraisal.
              Clients aged 18–23 must provide documented family consent; minors are not served.
              We reserve the right to refuse or terminate any transaction and report suspicious activity.
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/919632129768" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white hover:bg-[#25D366]/90 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a 
                href="tel:+919632129768"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors duration-300"
                aria-label="Phone"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <span className="font-semibold text-xl mb-6 block text-secondary">Quick Links</span>
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-base text-white opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-200">
                Home
              </Link>
              <Link to="/about" className="text-base text-white opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-200">
                About Us
              </Link>
              <Link to="/services" className="text-base text-white opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-200">
                Services
              </Link>
              <Link to="/faq" className="text-base text-white opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-200">
                FAQ
              </Link>
              <Link to="/contact" className="text-base text-white opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-200">
                Contact Us
              </Link>
            </nav>
          </div>

          <div className="md:col-span-4">
            <span className="font-semibold text-xl mb-6 block text-secondary">Contact Info</span>
            <div className="space-y-5">
              <a href="tel:+919632129768" className="flex items-center space-x-4 text-base text-white opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-200">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+91 9632129768</span>
              </a>
              <a href="https://wa.me/919632129768" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-base text-white opacity-90 hover:opacity-100 hover:text-[#25D366] transition-all duration-200">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span>WhatsApp Us</span>
              </a>
              <a href="mailto:akiragoldcompany@gmail.com" className="flex items-center space-x-4 text-base text-white opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-200">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <span>akiragoldcompany@gmail.com</span>
              </a>
              <div className="flex items-start space-x-4 text-base text-white opacity-90">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="pt-3">1st floor, Shanubogara St, beedi, Tippu Nagar, Arsikere, Arasikere, Karnataka 573103</span>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-8">
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white opacity-90 hover:opacity-100 hover:bg-secondary hover:text-secondary-foreground transition-all duration-200" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white opacity-90 hover:opacity-100 hover:bg-secondary hover:text-secondary-foreground transition-all duration-200" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white opacity-90 hover:opacity-100 hover:bg-secondary hover:text-secondary-foreground transition-all duration-200" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-white opacity-80">
            © 2026 Akira Gold Buyers. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm">
            <Link to="/privacy" className="text-white opacity-80 hover:opacity-100 hover:text-secondary transition-all duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white opacity-80 hover:opacity-100 hover:text-secondary transition-all duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;