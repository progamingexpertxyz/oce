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
      icon: <Award className=" h-8 w-8     md:h-10 md:w-10 " />,
    },
    {
      title: 'Personalized Approach',
      description: 'We tailor our support to your specific learning style, academic goals, and areas of challenge.',
      icon: <Users className="h-8 w-8 md:h-10 md:w-10" />,
    },
    {
      title: 'Focus on Understanding',
      description: 'We prioritize deep comprehension and skill development, not just completing assignments.',
      icon: <BookOpen className="h-8 w-8 md:h-10 md:w-10" />,
    },
    {
      title: 'Academic Integrity',
      description: 'All our services adhere to the highest standards of academic integrity and ethical support.',
      icon: <Shield className="h-8 w-8 md:h-10 md:w-10" />,
    },
  ];

  return (
    <section className=" py-12 bg-primary-500 text-white">
     <div className="container-custom "> {/* Adds top and bottom margin */}
   <div className="w-full text-center py-12 px-4 sm:px-6 lg:px-8 text-white">
  <h2 className="text-xl sm:text-3xl lg:text-4xl -mt-18 md:-mt-2 text-white font-bold leading-tight">
    Your Partner in Ethical Learning
  </h2>
  <p className="mt-1  md:mt-2 text-sm   md:text-xl text-white max-w-2xl mx-auto  leading-4">
    We're committed to helping you achieve academic success <br className="hidden sm:inline" />
    while maintaining the highest ethical standards.
  </p>
</div>


        <div className="  md:-mt-5 grid grid-cols-0 md:grid-cols-2 gap-3 -mt-10">
          {reasons.map((reason, index) => (
            <motion.div 
              key={reason.title}
              className="bg-white/10 backdrop-blur-sm rounded-lg  md:p-6 p-3 hover:bg-white/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1">{reason.icon}</div>
                <div>
                  <h3 className="text-base md:text-lg font-bold mb-2 text-white">{reason.title}</h3>
                  <p className="text-white/80 text-sm md:text-base -mt-3 md:-mt-2">{reason.description}</p>
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
