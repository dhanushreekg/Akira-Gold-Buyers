import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

function ContactUsPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 9632129768',
      link: 'tel:+919632129768'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'akiragoldcompany@gmail.com',
      link: 'mailto:akiragoldcompany@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: '1st floor, Shanubogara St, beedi, Tippu Nagar, Arsikere, Karnataka 573103',
      link: null
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Sat: 9:00 AM - 7:00 PM',
      link: null
    }
  ];

  const logoUrl = "https://horizons-cdn.hostinger.com/7c6d6107-c38f-4be4-91dc-65d789a13756/4ff819617ae6fcee29a8601da53ff0a1.png";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://akiragoldbuyers.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact Us",
        "item": "https://akiragoldbuyers.com/contact"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Contact Akira Gold Buyers | Sell Gold Online & In-Person</title>
        <meta name="description" content="Get in touch with Akira Gold Buyers. Call us at 9632129768 or visit our office in Bangalore. We're here to answer your questions and provide the best gold buying service." />
        <meta name="keywords" content="contact gold buyers, gold buying near me, Akira Gold Buyers contact, sell gold Bangalore, contact gold merchants" />
        <link rel="canonical" href="https://akiragoldbuyers.com/contact" />
        
        <meta property="og:title" content="Contact Akira Gold Buyers | Sell Gold Online & In-Person" />
        <meta property="og:description" content="Get in touch with Akira Gold Buyers for the best rates." />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:url" content="https://akiragoldbuyers.com/contact" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Akira Gold Buyers" />
        <meta name="twitter:description" content="Reach out to us to sell your gold securely." />
        <meta name="twitter:image" content={logoUrl} />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"></div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                  Get in touch
                </h1>
                <p className="text-lg md:text-xl leading-relaxed text-white/90">
                  We're here to help with all your gold selling needs
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl mb-10">
                    <img 
                      src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" 
                      alt="Professional office setup for secure gold evaluation" 
                      className="w-full h-64 object-cover"
                    />
                  </div>

                  <h2 className="text-3xl font-bold mb-6 text-primary" style={{ textWrap: 'balance' }}>
                    Contact information
                  </h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                    Reach out to us through any of the following channels. We're available to answer your questions and provide assistance.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="border-border/50 h-full transition-all duration-300 hover:shadow-lg bg-light-purple/30">
                          <CardContent className="p-6">
                            <div className="flex flex-col items-start space-y-4">
                              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                                <info.icon className="w-6 h-6 text-secondary" />
                              </div>
                              <div>
                                <h3 className="font-semibold mb-1 text-primary">{info.title}</h3>
                                {info.link ? (
                                  <a
                                    href={info.link}
                                    className="text-muted-foreground hover:text-secondary transition-colors duration-200"
                                  >
                                    {info.details}
                                  </a>
                                ) : (
                                  <p className="text-muted-foreground text-sm">{info.details}</p>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  <Card className="mt-8 border-border/50 bg-light-gold">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold mb-3 text-primary">Quick contact via WhatsApp</h3>
                      <p className="text-base text-primary/80 mb-6">
                        For instant responses, message us on WhatsApp
                      </p>
                      <a
                        href="https://wa.me/919632129768"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#25D366] text-white hover:bg-[#25D366]/90 transition-colors duration-200 font-medium"
                      >
                        Chat on WhatsApp
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:pl-8"
                >
                  <ContactForm />
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ContactUsPage;