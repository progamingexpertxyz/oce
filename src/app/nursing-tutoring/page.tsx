"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { CheckCircle } from 'lucide-react';

const NursingTutoringPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Nursing Tutoring | Online Course Experts';
    window.scrollTo(0, 0);
  }, []);

  const challengingSubjects = [
    'Grasping complex drug mechanisms in Pharmacology',
    'Understanding intricate disease processes in Pathophysiology',
    'Memorizing details for Anatomy & Physiology',
    'Applying concepts in Medical-Surgical Nursing scenarios',
    'Mastering calculations for Dosage & Calculations',
    'Feeling unsure about Health Assessment techniques',
  ];

  const benefits = [
    {
      title: 'Deeper Subject Understanding',
      description: 'Move beyond memorization to truly comprehend nursing principles.',
    },
    {
      title: 'Increased Academic Confidence',
      description: 'Feel more prepared and capable in your specific courses.',
    },
    {
      title: 'Improved Exam Preparation',
      description: 'Build the knowledge base needed to tackle subject-specific exam questions.',
    },
    {
      title: 'Stronger Foundation for Practice',
      description: 'Understand the "why" behind nursing actions.',
    },
    {
      title: 'Reduced Stress & Frustration',
      description: 'Get targeted help for the subjects causing you the most difficulty.',
    },
  ];

  const nursingSubjects = [
    'Pharmacology',
    'Pathophysiology',
    'Anatomy & Physiology for Nurses',
    'Nursing Fundamentals',
    'Health Assessment',
    'Medical-Surgical (Med-Surg) Nursing',
    'Pediatric Nursing',
    'Obstetrics (OB) / Women\'s Health Nursing',
    'Mental Health / Psychiatric Nursing',
    'Community Health Nursing',
    'Nursing Research & Evidence-Based Practice Concepts',
    'Dosage Calculations',
  ];

  return (
    <>
{/* Hero Section */}
<section className="py-20 md:py-28 w-full h-[70vh] bg-gradient-to-br from-primary-50 via-white to-secondary-50">
  <div className="container-custom">
    <div className="max-w-3xl ml-5">
      <h1 className="mb-4 text-5xl text-left">Master Your Nursing Subjects with Expert Tutoring</h1>
      <p className="text-xl md:text-xl mb-2 text-neutral-700 text-left leading-4">
        Personalized Online Tutoring to Help You Understand Complex Nursing<br/>
         Concepts, from Pharmacology to Pathophysiology and Beyond.
      </p>
      <p className="text-neutral-600 mb-8 text-left">
        Feeling overwhelmed by the depth of information in your nursing courses? Struggling to connect the dots between lectures, readings, and clinical application? Online Course Experts offers specialized Nursing Subject Tutoring designed to provide clarity and deepen your understanding of core nursing concepts. Our experienced tutors work with you one-on-one online to ensure you build a strong, confident foundation in your coursework.
      </p>
    </div>
  </div>
</section>




      {/* Challenging Subjects Section */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Are You Finding These Nursing Subjects Challenging?"
            subtitle="You don't have to navigate these complex subjects alone. Expert, personalized tutoring can illuminate difficult topics."
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challengingSubjects.map((subject, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CheckCircle className="h-6 w-6 text-secondary-400 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-lg">{subject}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gray-50 py-20 md:py-28">
        <div className="container-custom">
          <SectionTitle 
            title="How Our Nursing Tutoring Can Help You"
            subtitle="Our expert tutors focus on these key areas to help you succeed."
          />
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <CheckCircle className="h-6 w-6 text-secondary-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-lg">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  {/* Nursing Subjects Section */}
      <section className="section py-20 md:py-28">
        <div className="container-custom">
          <SectionTitle 
            title="Subjects We Cover"
            subtitle="We offer personalized tutoring for all nursing subjects."
          />
          
          <div className="max-w-3xl mx-auto">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nursingSubjects.map((subject, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {/* Icon */}
                  <img 
                    src={`/img${index + 1}.png`} 
                    alt={`${subject} Icon`} 
                    className="h-8 w-8 object-contain mr-3"
                  />
                  {/* Subject Text */}
                  <p className="text-lg leading-relaxed">{subject}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="bg-primary-50 py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl text-neutral-800 mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6">Sign up today and schedule your first tutoring session with an expert in your nursing field.</p>
            <Button label="Sign Up for Tutoring" link="/signup" children={undefined} />
          </div>
        </div>
      </section>
    </>
  );
};

export default NursingTutoringPage;
