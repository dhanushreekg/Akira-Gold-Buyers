import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function FAQPage() {
  const faqs = [
    {
      question: 'How do you determine the price of gold?',
      answer: 'We base our prices on the current market rate for gold, which fluctuates daily. Our experts verify the purity and weight of your gold using professional testing equipment, and we offer competitive rates that reflect the true value of your items.'
    },
    {
      question: 'Is the doorstep service safe?',
      answer: 'Absolutely. Our doorstep service is completely safe and secure. Our trained professionals carry proper identification and use certified testing equipment. All transactions are documented, and payment is made instantly after verification.'
    },
    {
      question: 'What types of gold do you buy?',
      answer: 'We purchase all types of gold including jewelry (old, broken, or unwanted), gold coins, gold bars, gold ornaments, and even scrap gold. We also buy silver items. The purity can range from 18K to 24K.'
    },
    {
      question: 'How quickly will I receive payment?',
      answer: 'Payment is instant. Once we verify your gold and agree on the price, you receive payment immediately through your preferred method - cash, bank transfer, or digital payment.'
    },
    {
      question: 'Do I need to provide any documents?',
      answer: 'For transparency and legal compliance, we require a valid government-issued ID (Aadhaar, PAN card, or passport) for all transactions. This is a standard practice in the gold buying industry.'
    },
    {
      question: 'Can you help release my pledged gold?',
      answer: 'Yes, we offer services to help you release gold that has been pledged with pawn shops or financial institutions. We handle the paperwork and payment process, making it hassle-free for you.'
    },
    {
      question: 'What is your testing process?',
      answer: 'We use professional gold testing equipment including electronic gold testers and acid testing methods to accurately determine the purity of your gold. The entire process is transparent and done in front of you.'
    },
    {
      question: 'Are there any hidden charges?',
      answer: 'No, we believe in complete transparency. There are no hidden charges or deductions. The price we quote is the price you receive. Our doorstep service is also provided free of charge.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We primarily serve Bangalore and surrounding areas. For doorstep service, we cover most localities within the city. Contact us to confirm if we serve your specific location.'
    },
    {
      question: 'How can I get a quote?',
      answer: 'Simply call us at 9632129768 or fill out the inquiry form on our website. Provide details about the type and approximate weight of your gold, and we\'ll give you an instant estimate based on current market rates.'
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
        "name": "FAQ",
        "item": "https://akiragoldbuyers.com/faq"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Selling Gold FAQs | Akira Gold Buyers</title>
        <meta name="description" content="Find answers to common questions about selling gold, our services, pricing, and process. Learn how Akira Gold Buyers makes gold selling simple and transparent." />
        <meta name="keywords" content="gold buying questions, how to sell gold, gold buying FAQs, Akira Gold Buyers FAQ, gold selling process" />
        <link rel="canonical" href="https://akiragoldbuyers.com/faq" />
        
        <meta property="og:title" content="Frequently Asked Questions | Selling Gold FAQs" />
        <meta property="og:description" content="Find answers to common questions about selling gold with Akira Gold Buyers." />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:url" content="https://akiragoldbuyers.com/faq" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Selling Gold FAQs" />
        <meta name="twitter:description" content="Find answers to common questions about selling gold." />
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
                  Frequently asked questions
                </h1>
                <p className="text-lg md:text-xl leading-relaxed text-white/90">
                  Everything you need to know about selling gold with us
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-5 lg:sticky lg:top-32"
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
                    <img 
                      src="https://images.unsplash.com/photo-1674526283171-541615a5dd13" 
                      alt="Luxury gold jewelry representing high value purchases" 
                      className="w-full h-auto object-cover aspect-[4/5]"
                    />
                  </div>
                  <div className="bg-light-gold p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-4 text-primary">Need more help?</h3>
                    <p className="text-primary/80 mb-6">
                      If you couldn't find the answer to your question, our team is ready to assist you.
                    </p>
                    <a href="tel:+919632129768">
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base">
                        Call Us Now
                      </Button>
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:col-span-7"
                >
                  <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border border-border/50 rounded-xl px-6 bg-card hover:shadow-md transition-shadow duration-200"
                      >
                        <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6 text-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base leading-relaxed text-muted-foreground pb-6">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
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

export default FAQPage;