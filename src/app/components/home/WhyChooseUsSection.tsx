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
   <div className="w-full text-center py-12 px-4 sm:px-6 lg:px-8 text-white">
  <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold leading-tight">
    Your Partner in Ethical Learning
  </h2>
  <p className="mt-4 text-base sm:text-lg lg:text-xl text-white max-w-2xl mx-auto leading-relaxed">
    We're committed to helping you achieve academic success <br className="hidden sm:inline" />
    while maintaining the highest ethical standards.
  </p>
</div>


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
