import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, MessageCircle, ChevronRight } from 'lucide-react';

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact Us' }
  ];

  const isActive = (path) => location.pathname === path;

  const getBreadcrumbLabel = () => {
    const current = navLinks.find(link => link.path === location.pathname);
    return current ? current.label : '';
  };

  return (
    <div className="sticky top-0 z-50 w-full flex flex-col">
      <header className="w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 md:h-32 items-center justify-between">
            <Link to="/" className="flex items-center space-x-4">
              <img
                src="https://horizons-cdn.hostinger.com/7c6d6107-c38f-4be4-91dc-65d789a13756/4ff819617ae6fcee29a8601da53ff0a1.png"
                alt="Akira Gold Buyers Logo"
                className="h-16 md:h-24 w-auto object-contain"
              />
              <span className="sr-only">Akira Gold Buyers</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'bg-secondary text-secondary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="https://wa.me/919632129768" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors duration-300"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a 
                href="tel:+919632129768"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label="Call Us"
              >
                <Phone className="w-6 h-6" />
              </a>
              <a href="tel:+919632129768" className="hidden lg:block">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] text-base h-12 px-6">
                  Call Now
                </Button>
              </a>
            </div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon" className="h-12 w-12" aria-label="Open Menu">
                  <Menu className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <a 
                      href="https://wa.me/919632129768" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center space-x-2 py-3 rounded-lg bg-[#25D366]/10 text-[#25D366] font-medium"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>WhatsApp</span>
                    </a>
                    <a 
                      href="tel:+919632129768"
                      className="flex flex-1 items-center justify-center space-x-2 py-3 rounded-lg bg-primary/10 text-primary font-medium"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Call</span>
                    </a>
                  </div>
                  
                  <nav className="flex flex-col space-y-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`px-4 py-3.5 rounded-lg text-lg font-medium transition-all duration-200 ${
                          isActive(link.path)
                            ? 'bg-secondary text-secondary-foreground'
                            : 'text-foreground hover:bg-muted'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      
      {location.pathname !== '/' && (
        <div className="bg-muted/50 border-b border-border/30 w-full py-2">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center text-sm text-muted-foreground" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
              <span className="font-medium text-foreground">{getBreadcrumbLabel()}</span>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;