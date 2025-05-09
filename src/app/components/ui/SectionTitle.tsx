import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string | React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;  
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <motion.div 
      className={`mb-10 max-w-3xl ${alignClasses[align]}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={`mb-4 text-black ${className} whitespace-nowrap overflow-hidden text-ellipsis`}>
        {title}
      </h2>

      {subtitle && (
        typeof subtitle === 'string' ? (
          <p className="text-md sm:text-lg md:text-lg text-neutral-600">
            {subtitle}
          </p>
        ) : (
          <div className="text-md sm:text-lg md:text-lg text-neutral-600">
            {subtitle}
          </div>
        )
      )}
    </motion.div>
  );
};

export default SectionTitle;
