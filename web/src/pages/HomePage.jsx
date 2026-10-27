import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import InquiryForm from '@/components/InquiryForm.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Coins, Shield, Clock, ArrowRight } from 'lucide-react';

function HomePage() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      review: 'Got the best price for my old gold jewelry. The doorstep service was convenient and the staff was very professional.',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      review: 'Transparent pricing and instant payment. I was impressed by their honesty and quick service.',
      rating: 5
    },
    {
      name: 'Anita Desai',
      review: 'Released my pledged gold without any hassle. The process was smooth and they explained everything clearly.',
      rating: 5
    },
    {
      name: 'Vikram Patel',
      review: 'Excellent service for selling silver coins. Fair rates and immediate cash payment.',
      rating: 4
    }
  ];

  const quickServices = [
    {
      icon: Home,
      title: 'Doorstep Service',
      description: 'We come to your location for safe and convenient transactions',
      link: '/services'
    },
    {
      icon: Coins,
      title: 'Best Rates',
      description: 'Competitive market rates with transparent pricing',
      link: '/services'
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Safe and trustworthy gold buying process',
      link: '/about'
    },
    {
      icon: Clock,
      title: 'Instant Payment',
      description: 'Get paid immediately after verification',
      link: '/contact'
    }
  ];

  const logoUrl = "https://horizons-cdn.hostinger.com/7c6d6107-c38f-4be4-91dc-65d789a13756/4ff819617ae6fcee29a8601da53ff0a1.png";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://akiragoldbuyers.com/#localbusiness",
        "name": "Akira Gold Buyers",
        "type": "GoldBuyer",
        "url": "https://akiragoldbuyers.com",
        "logo": logoUrl,
        "image": logoUrl,
        "description": "Best gold buyers in Bangalore offering doorstep service, instant cash for gold, and transparent pricing.",
        "telephone": "+91 9632129768",
        "email": "akiragoldcompany@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1st floor, Shanubogara St, beedi, Tippu Nagar, Arsikere",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "573103",
          "addressCountry": "IN"
        },
        "priceRange": "$$$"
      },
      {
        "@type": "Organization",
        "@id": "https://akiragoldbuyers.com/#organization",
        "name": "Akira Gold Buyers",
        "url": "https://akiragoldbuyers.com",
        "logo": logoUrl,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91 9632129768",
          "contactType": "customer service"
        }
      },
      {
        "@type": "Service",
        "name": "Doorstep Gold Buying",
        "provider": {"@id": "https://akiragoldbuyers.com/#localbusiness"},
        "description": "We come to your location for safe and convenient gold transactions."
      },
      {
        "@type": "Service",
        "name": "Gold and Silver Buying",
        "provider": {"@id": "https://akiragoldbuyers.com/#localbusiness"},
        "description": "We purchase all types of gold jewelry, coins, bars, and silver items at competitive market rates."
      },
      {
        "@type": "Service",
        "name": "Pledge Gold Release",
        "provider": {"@id": "https://akiragoldbuyers.com/#localbusiness"},
        "description": "We help you release your gold from pawn shops and financial institutions."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://akiragoldbuyers.com"
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Akira Gold Buyers - Best Gold Buyers in Bangalore | Sell Gold Online</title>
        <meta name="description" content="Sell your gold at the best rates with Akira Gold Buyers. Top rated gold buyers in Bangalore offering doorstep gold buying, instant payment, and transparent pricing. Call 9632129768." />
        <meta name="keywords" content="Akira Gold Buyers, best gold buyers, gold buying services, sell gold online, gold buyers near me, gold buyers in Bangalore, doorstep gold buying" />
        <link rel="canonical" href="https://akiragoldbuyers.com/" />
        
        <meta property="og:title" content="Akira Gold Buyers - Best Gold Buyers in Bangalore | Sell Gold Online" />
        <meta property="og:description" content="Top rated gold buyers offering doorstep service, instant payment, and transparent pricing." />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:url" content="https://akiragoldbuyers.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Akira Gold Buyers" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Akira Gold Buyers - Best Gold Buyers in Bangalore" />
        <meta name="twitter:description" content="Top rated gold buyers offering doorstep service, instant payment, and transparent pricing." />
        <meta name="twitter:image" content={logoUrl} />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative min-h-[90vh] flex items-center bg-primary text-primary-foreground overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1686564805844-ac16a538ff7b" 
                alt="Gold coins and jewelry reflecting wealth and investment" 
                className="w-full h-full object-cover opacity-20 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80"></div>
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                    Sell your gold at the best rates
                  </h1>
                  <p className="text-lg md:text-xl leading-relaxed mb-8 text-white/90 max-w-prose">
                    Trusted gold buying service with doorstep convenience, transparent pricing, and instant payment. Get the value your gold deserves.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/services">
                      <Button size="lg" className="bg-primary text-secondary hover:bg-primary/90 border-2 border-secondary transition-all duration-200 active:scale-[0.98] w-full sm:w-auto h-14 px-8 text-lg">
                        Our Services
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 transition-all duration-200 active:scale-[0.98] w-full sm:w-auto h-14 px-8 text-lg font-semibold">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <InquiryForm />
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary" style={{ textWrap: 'balance' }}>
                  Why choose Akira Gold Buyers
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We make selling gold simple, safe, and rewarding
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {quickServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link to={service.link}>
                      <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50">
                        <CardHeader>
                          <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                            <service.icon className="w-7 h-7 text-secondary" />
                          </div>
                          <CardTitle className="text-xl" style={{ textWrap: 'balance' }}>
                            {service.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base leading-relaxed">
                            {service.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-light-purple">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary" style={{ textWrap: 'balance' }}>
                  What our customers say
                </h2>
                <p className="text-lg text-primary/70 max-w-2xl mx-auto">
                  Real experiences from people who trusted us with their gold
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    name={testimonial.name}
                    review={testimonial.review}
                    rating={testimonial.rating}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <Card className="border-border/50 shadow-2xl bg-primary text-primary-foreground overflow-hidden relative">
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://images.unsplash.com/photo-1686564805844-ac16a538ff7b" 
                    alt="Gold background texture showing luxury" 
                    className="w-full h-full object-cover opacity-10 mix-blend-overlay"
                  />
                </div>
                <CardContent className="p-12 md:p-16 text-center relative z-10">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white" style={{ textWrap: 'balance' }}>
                    Ready to sell your gold?
                  </h2>
                  <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
                    Get an instant quote and experience hassle-free gold selling with Akira Gold Buyers
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href="tel:+919632129768">
                      <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 transition-all duration-200 active:scale-[0.98] w-full sm:w-auto h-14 px-8 text-lg font-semibold">
                        Call +91 9632129768
                      </Button>
                    </a>
                    <Link to="/contact">
                      <Button size="lg" className="bg-primary text-secondary hover:bg-primary/90 border-2 border-secondary transition-all duration-200 active:scale-[0.98] w-full sm:w-auto h-14 px-8 text-lg">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;