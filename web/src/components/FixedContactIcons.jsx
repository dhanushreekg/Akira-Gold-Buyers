import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

function FixedContactIcons() {
  return (
    <>
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        href="https://wa.me/919632129768"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-float-btn contact-float-left contact-whatsapp group"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
        <span className="sr-only">WhatsApp</span>
      </motion.a>

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        href="tel:+919632129768"
        className="contact-float-btn contact-float-right contact-phone group"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 md:w-7 md:h-7" />
        <span className="sr-only">Call Us</span>
      </motion.a>
    </>
  );
}

export default FixedContactIcons;