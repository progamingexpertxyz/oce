'use client';
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../app/components/home/HeroSection';
import ServicesSection from '../app/components/home/ServicesSection';
import HowItWorksSection from '../app/components/home/HowItWorksSection';
import WhyChooseUsSection from '../app/components/home/WhyChooseUsSection';
import TestimonialsSection from '../app/components/home/TestimonialsSection';
import NursingDiscountForm from '../app/components/home/CallToActionSection';

const HomePage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Homepage | Online Course Experts';
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <NursingDiscountForm />
    </motion.div>
  );
};

export default HomePage;