import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Award, Users, TrendingUp } from 'lucide-react';

function AboutUsPage() {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We believe in honest dealings and transparent pricing. Every transaction is conducted with complete clarity.'
    },
    {
      icon: Award,
      title: 'Best Market Rates',
      description: 'Our rates are competitive and fair, ensuring you get the maximum value for your gold.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We provide personalized service tailored to your needs.'
    },
    {
      icon: TrendingUp,
      title: 'Years of Experience',
      description: 'With extensive industry knowledge, we offer reliable and professional gold buying services.'
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
        "name": "About Us",
        "item": "https://akiragoldbuyers.com/about"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>About Akira Gold Buyers | Trusted Professional Gold Buying</title>
        <meta name="description" content="Learn about Akira Gold Buyers, your trusted partner for gold buying services in Bangalore. We offer transparent pricing, professional gold evaluation, and instant payment." />
        <meta name="keywords" content="trusted gold buyers, professional gold buying, Akira Gold Buyers, gold evaluation, sell gold safely" />
        <link rel="canonical" href="https://akiragoldbuyers.com/about" />
        
        <meta property="og:title" content="About Akira Gold Buyers | Trusted Professional Gold Buying" />
        <meta property="og:description" content="Learn about Akira Gold Buyers, your trusted partner for gold buying services in Bangalore." />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:url" content="https://akiragoldbuyers.com/about" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Akira Gold Buyers" />
        <meta name="twitter:description" content="Learn about our transparent gold buying process." />
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
                  About Akira Gold Buyers
                </h1>
                <p className="text-lg md:text-xl leading-relaxed text-white/90">
                  Your trusted partner for selling gold with confidence and convenience
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary" style={{ textWrap: 'balance' }}>
                    Our story
                  </h2>
                  <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                    <p>
                      Akira Gold Buyers was founded with a simple mission: to provide a trustworthy and convenient way for people to sell their gold at fair market rates. We understand that selling gold is often a significant financial decision, and we're committed to making the process as transparent and stress-free as possible.
                    </p>
                    <p>
                      Over the years, we've built our reputation on honesty, reliability, and exceptional customer service. Our team of experienced professionals ensures that every transaction is handled with the utmost care and professionalism.
                    </p>
                    <p>
                      Whether you're selling old jewelry, gold coins, or releasing pledged gold, we offer competitive rates and instant payment. Our doorstep service brings convenience right to your home, making the entire process safe and hassle-free.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1493882552576-fce827c6161e" 
                      alt="Akira Gold Buyers professional team discussing gold evaluation" 
                      className="w-full h-auto object-cover aspect-[4/3]"
                    />
                  </div>
                  <div className="absolute -bottom-8 -left-8 bg-secondary text-secondary-foreground p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
                    <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                    <p className="text-sm leading-relaxed">
                      To be the most trusted gold buying service in Bangalore by offering transparent pricing and exceptional customer service.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-light-purple">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary" style={{ textWrap: 'balance' }}>
                  Why choose us
                </h2>
                <p className="text-lg text-primary/70 max-w-2xl mx-auto">
                  We're committed to providing the best gold buying experience
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full border-border/50 bg-card hover:shadow-xl transition-shadow duration-300">
                      <CardHeader>
                        <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                          <value.icon className="w-8 h-8 text-secondary" />
                        </div>
                        <CardTitle className="text-2xl text-primary" style={{ textWrap: 'balance' }}>
                          {value.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default AboutUsPage;