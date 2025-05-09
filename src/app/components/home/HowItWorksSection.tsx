'use client';
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Users, GraduationCap } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      title: 'Choose Your Service',
      description: 'Select the service that best fits your academic needs.',
      icon: <CheckCircle className="h-10 w-10 text-primary-500" />,
    },
    {
      title: 'Book Your Session',
      description: 'Schedule a convenient time with one of our expert tutors.',
      icon: <Calendar className="h-10 w-10 text-primary-500" />,
    },
    {
      title: 'Connect Online',
      description: 'Meet with your tutor via our secure online platform.',
      icon: <Users className="h-10 w-10 text-primary-500" />,
    },
    {
      title: 'Learn & Succeed',
      description: 'Deepen your understanding and excel in your coursework.',
      icon: <GraduationCap className="h-10 w-10 text-primary-500" />,
    },
  ];

  return (
    <section className="py-12">
      <div className="container-custom">
        <SectionTitle 
          title="Get Started Easily"
          subtitle="Start your journey to academic success in just a few simple steps."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.title}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
              
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-primary-200" style={{ width: '50%', transform: 'translateX(-50%)' }}></div>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <Button link="/how-it-works" variant="outline">
            Learn How It Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;