'use client';
import React from 'react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Users, GraduationCap } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [

    {
      title: 'Choose Your Service',
      description: (
        <>
          Select the service that best fits your
          <span className="block w-2 md:hidden" /> academic needs.
        </>
      ),
      icon: <CheckCircle className="h-8 w-8 md:h-10 md:w-10 text-primary-500" />,
    },
    {
      title: 'Book Your Session',
      description: (
        <>
          Schedule a convenient time with one <span className="block w-2 md:hidden" />
          of our expert tutors.
        </>
      ),
      icon: <Calendar className="h-8 w-8 md:h-10 md:w-10 text-primary-500" />,
    },
    {
      title: 'Connect Online',
      description: (
        <>
          Meet with your tutor via our secure <span className="block w-2 md:hidden" />
          Online platform.
        </>
      ),
      icon: <Users className="h-8 w-8 md:h-10 md:w-10 text-primary-500" />,
    },
    {
      title: 'Learn & Succeed',
      description: (
        <>
          Deepen your understanding and <span className="block w-2 md:hidden" />  excel in your coursework.
        </>
      ),
      icon: <GraduationCap className="h-10 w-10 md:h-10 md:w-10 text-primary-500" />,
    },
  ];

  return (
    <section className="py-6">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto my-10 px-4">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-primary-900 mb-1 -mt-10 md:-mt-0">
            Get Started Easily
          </h2>
          <p className="text-sm md:text-base  text-neutral-600">
            Start your journey to academic success<span className="block w-2 md:hidden" /> in just a few simple steps.
          </p>
        </div>

        <div className=" grid grid-cols-0 md:grid-cols-2 lg:grid-cols-4 -mt-5 md:-mt-0  gap-2 md:gap-8">
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
                <div className="mb-1 md:mb-4">{step.icon}</div>
                <h3 className="text-base md:text-xl font-bold mb-0 md:mb-2">{step.title}</h3>
                <p className="text-neutral-600 text-sm leading-5 md:leading-3 ">{step.description}</p>
              </div>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-primary-200" style={{ width: '50%', transform: 'translateX(-50%)' }}></div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-2 flex justify-center">
          <Button
            link="/how-it-works"
            variant="outline"
            className="px-4 py-1 md:px-6 md:py-2 text-xs md:text-base font-semibold border-2 border-primary-500 text-primary-500 hover:bg-primary-50 transition-all duration-300 rounded-xl"
          >
            Learn How It Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;