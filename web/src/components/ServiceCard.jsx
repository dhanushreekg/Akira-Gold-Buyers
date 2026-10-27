import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

function ServiceCard({ icon: Icon, title, description, image, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50">
        {image && (
          <div className="w-full h-48 overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}
        <CardHeader className={image ? "pt-6" : ""}>
          <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
            <Icon className="w-7 h-7 text-accent" />
          </div>
          <CardTitle className="text-xl font-semibold" style={{ textWrap: 'balance' }}>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <CardDescription className="text-base leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ServiceCard;