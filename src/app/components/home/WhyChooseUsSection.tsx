'use client';
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Shield } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    {
      title: 'Expert Tutors & Coaches',
      description: 'Our team consists of qualified professionals with strong academic backgrounds and teaching experience.',
      icon: <Award className="h-10 w-10 " />,
    },
    {
      title: 'Personalized Approach',
      description: 'We tailor our support to your specific learning style, academic goals, and areas of challenge.',
      icon: <Users className="h-10 w-10 " />,
    },
    {
      title: 'Focus on Understanding',
      description: 'We prioritize deep comprehension and skill development, not just completing assignments.',
      icon: <BookOpen className="h-10 w-10 " />,
    },
    {
      title: 'Academic Integrity',
      description: 'All our services adhere to the highest standards of academic integrity and ethical support.',
      icon: <Shield className="h-10 w-10 " />,
    },
  ];

  return (
    <section className="py-12 bg-primary-500 text-white">
     <div className="container-custom "> {/* Adds top and bottom margin */}
  <SectionTitle 
    title="Your Partner in Ethical Learning"
    subtitle={
      <div className=' mt-2.5'>
        We're committed to helping you achieve academic success <br />
        while maintaining the highest ethical standards.
      </div>
    }
    className="text-white -mb-0" 
  />


        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 -mt-5">
          {reasons.map((reason, index) => (
            <motion.div 
              key={reason.title}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1">{reason.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{reason.title}</h3>
                  <p className="text-white/80">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;