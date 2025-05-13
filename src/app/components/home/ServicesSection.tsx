'use client';
import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import Button from '../ui/Button';
import { BookOpen, BookText, FileEdit } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Subject-Matter Tutoring',
      description: 'Gain clarity on difficult course concepts (Nursing, Business, Sciences & more) with expert, personalized guidance.',
      icon: <BookOpen className="h-8 w-8" />,
      link: '/nursing-tutoring',
    },
    {
      title: 'Nursing Academic Support',
      description: 'Develop effective study habits, time management skills, and strategies to confidently navigate your nursing program.',
      icon: <BookText className="h-8 w-8" />,
      link: '/nursing-academic-support',
    },
    {
      title: 'Proofreading & Formatting',
      description: 'Ensure your papers are polished, professional, and adhere to citation guidelines (APA, MLA, etc.).',
      icon: <FileEdit className="h-8 w-8" />,
      link: '/proofreading-formatting-services',
    },
  ];

  return (
    <section className=" py-8 md:py-10 bg-neutral-50">
    <div className="container-custom px-4 mx-auto">
      {/* Title Section */}
      <div className="text-center mb-5 md:mb-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl -mt-4 md:-mt-0  font-bold text-gray-900 leading-6 md:leading-tight  text-center">
  How We Support Your <br className="block md:hidden" /> Academic Journey
</h2>

        <p className=" mt-2 md:mt-3 text-sm md:text-lg  text-gray-600 md:text-center leading-5 md:leading-relaxed">
          Our services are designed to help you understand complex subjects, 
           <br className="hidden md:block" />
          develop effective study strategies, and present your work professionally.
        </p>
      </div>

        
        <div className=" grid grid-cols-0 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              delay={index}
            />
          ))}
        </div>
        
     <div className="mt-6 text-center">
  <a
    href="/services"
    className="inline-block text-sm md:text-base px-3 py-2.5 md:px-6 md:py-3 rounded-xl bg-primary-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
  >
    View All Services
  </a>
</div>
      </div>
    </section>
  );
};

export default ServicesSection;