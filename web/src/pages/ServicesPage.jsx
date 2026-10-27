import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import { Button } from '@/components/ui/button';
import { Home, Coins, Unlock, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: 'Doorstep gold buying service',
      description: 'We come to your location for safe and convenient gold transactions. Our experts visit your home or office, verify your gold on the spot, and provide instant payment. No need to travel or worry about safety.',
      image: 'https://images.unsplash.com/photo-1651044128540-9cb858688fab'
    },
    {
      icon: Coins,
      title: 'Gold and silver buying',
      description: 'We purchase all types of gold jewelry, coins, bars, and silver items at competitive market rates. Whether it\'s old jewelry, broken pieces, or investment gold, we offer fair prices based on current market value.',
      image: 'https://images.unsplash.com/photo-1633484188544-6d09e61e9beb'
    },
    {
      icon: Unlock,
      title: 'Release pledged gold',
      description: 'Stuck with pledged gold? We help you release your gold from pawn shops and financial institutions. Get your precious items back without the hassle of dealing with complex procedures.',
      image: 'https://images.unsplash.com/photo-1611540280958-dc93ce74f8d5'
    },
    {
      icon: Truck,
      title: 'Bulk gold purchase',
      description: 'For jewelers, businesses, or individuals with large quantities of gold, we offer specialized bulk purchase services with attractive rates and secure handling of high-value transactions.',
      image: 'https://images.unsplash.com/photo-1686564805844-ac16a538ff7b' 
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
        "name": "Services",
        "item": "https://akiragoldbuyers.com/services"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Our Gold Buying Services | Doorstep & Pledge Release | Akira Gold Buyers</title>
        <meta name="description" content="Explore our gold buying services in Bangalore: doorstep gold buying, gold and silver buying, release pledged gold, and bulk purchases. Best rates guaranteed." />
        <meta name="keywords" content="doorstep gold buying, gold and silver buying, pledge gold release, gold buying services, sell gold fast" />
        <link rel="canonical" href="https://akiragoldbuyers.com/services" />
        
        <meta property="og:title" content="Our Gold Buying Services | Akira Gold Buyers" />
        <meta property="og:description" content="Explore our gold buying services in Bangalore: doorstep gold buying, gold and silver buying, and release pledged gold." />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:url" content="https://akiragoldbuyers.com/services" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Gold Buying Services" />
        <meta name="twitter:description" content="Professional gold buying services including doorstep evaluation." />
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
                  Our services
                </h1>
                <p className="text-lg md:text-xl leading-relaxed text-white/90">
                  Comprehensive gold buying solutions tailored to your needs
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-24 bg-light-purple">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    image={service.image}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary" style={{ textWrap: 'balance' }}>
                    How it works
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Simple steps to sell your gold with confidence
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {[
                    { step: '1', title: 'Contact us', description: 'Call or message us with your gold details' },
                    { step: '2', title: 'Get quote', description: 'Receive an instant price estimate' },
                    { step: '3', title: 'Verification', description: 'Our expert verifies your gold' },
                    { step: '4', title: 'Get paid', description: 'Receive instant payment' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center relative"
                    >
                      <div className="w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ServicesPage;