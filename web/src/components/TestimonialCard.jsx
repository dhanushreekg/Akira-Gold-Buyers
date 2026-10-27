import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

function TestimonialCard({ name, review, rating, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full bg-muted border-border/50">
        <CardContent className="pt-6">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? 'fill-accent text-accent' : 'text-muted-foreground/30'
                }`}
              />
            ))}
          </div>
          <p className="text-base leading-relaxed mb-4 text-foreground">
            "{review}"
          </p>
          <p className="font-semibold text-foreground">{name}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default TestimonialCard;