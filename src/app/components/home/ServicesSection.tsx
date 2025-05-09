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
    <section className="py-10 bg-neutral-50">
    <div className="container-custom px-4 mx-auto">
      {/* Title Section */}
      <div className="text-center mb-10">
      <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight text-center">
  How We Support Your Academic Journey
</h2>

        <p className="mt-3 text-base md:text-lg text-gray-600 leading-relaxed">
          Our services are designed to help you understand complex subjects,<br />
          develop effective study strategies, and present your work professionally.
        </p>
      </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <Button link="/services" variant="primary">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;