import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
  delay = 0,
}) => {
  return (
    <motion.div 
      className="card-hover h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
    >
      <div className="p-3 -mt-4 md:-mt-0 bg-primary-50 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-primary-500 mb:2 md:mb-6">
        {icon}
      </div>
      <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-3">{title}</h3>
      <p className="text-neutral-600 mb-0 md:mb-6 text-xs md:text-base flex-grow">{description}</p>
      <Link 
        href={link}
        className="mt-auto inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors group"
      >
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;