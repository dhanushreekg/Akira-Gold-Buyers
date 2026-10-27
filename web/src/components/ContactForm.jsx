import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grams: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (formData.phone.length < 10) {
      toast.error('Please enter a valid phone number');
      return;
    }

    setIsSubmitting(true);

    const message = `Contact Form Submission%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email || 'Not provided'}%0AGrams of Gold: ${formData.grams || 'Not specified'}%0A%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919632129768?text=${message}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      toast.success('Redirecting to WhatsApp');
      setFormData({ name: '', email: '', phone: '', grams: '', message: '' });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <Card className="border-border/50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl" style={{ textWrap: 'balance' }}>
          Send us a message
        </CardTitle>
        <CardDescription>
          We'll get back to you as soon as possible
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1.5 text-gray-900"
              placeholder="Enter your name"
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1.5 text-gray-900"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1.5 text-gray-900"
              placeholder="10-digit mobile number"
            />
          </div>
          
          <div>
            <Label htmlFor="grams">Grams of Gold</Label>
            <Input
              id="grams"
              name="grams"
              type="number"
              value={formData.grams}
              onChange={handleChange}
              className="mt-1.5 text-gray-900"
              placeholder="Enter weight in grams (optional)"
            />
          </div>
          
          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1.5 text-gray-900"
              placeholder="Tell us about your inquiry..."
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 active:scale-[0.98]"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              'Submitting...'
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default ContactForm;