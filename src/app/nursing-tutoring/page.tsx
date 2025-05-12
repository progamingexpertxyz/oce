"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import NursingDiscountForm from '../components/home/form';
import TestimonialsSection from '../components/home/TestimonialsSection';

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
<section
  className="relative py-20 md:py-28 w-full h-[70vh] bg-contain bg-no-repeat bg-fixed"
  style={{ backgroundImage: "url('/img0.png')" }}
>
  <div className="absolute inset-0  bg-gradient-to-br from-primary-100 via-white to-secondary-50 opacity-50"></div> {/* Overlay */}
  <div className="relative container-custom z-10">
    <div className="max-w-3xl ml-5">
      <h1 className="mb-4 text-5xl text-left text-black">Master Your Nursing Subjects with Expert Tutoring</h1>
      <p className="text-xl md:text-xl mb-2 text-neutral-900 text-left leading-4">
        Personalized Online Tutoring to Help You Understand Complex Nursing<br />
        Concepts, from Pharmacology to Pathophysiology and Beyond.
      </p>
      <p className="text-neutral-900 mb-8 text-left">
        Feeling overwhelmed by the depth of information in your nursing courses? Struggling to connect the dots between lectures, readings, and clinical application? Online Course Experts offers specialized Nursing Subject Tutoring designed to provide clarity and deepen your understanding of core nursing concepts. Our experienced tutors work with you one-on-one online to ensure you build a strong, confident foundation in your coursework.
      </p>
    </div>
  </div>
</section>



{/* Challenging Subjects Section */}
<section className="py-12">
  <div className="container-custom">

    {/* Heading */}
    <div className="text-center mb-10">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
        Are You Finding These Nursing 
        Subjects Challenging?
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        You don't have to navigate these complex subjects alone. <br/>
        Expert personalized tutoring can illuminate difficult topics.
      </p>
    </div>

    {/* Card Wrapper */}
    <div className="bg-white border  shadow-sm rounded-xl p-8 md:p-5 flex flex-col md:flex-row items-center gap-10">

      {/* Left: Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/sub.png"
          alt="Nursing Tutoring"
          className="w-[80%] md:w-[60%] rounded-lg ml-36 -mt-6 object-cover"
        />
      </div>

      {/* Right: Subject List */}
      <div className="md:w-1/2 mr-20 mt-2">
        <div className="flex flex-wrap gap-2">
          {challengingSubjects.map((subject, index) => (
            <motion.div
              key={index}
              className="flex items-center w-full md:w-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CheckCircle className="h-6 w-6 text-secondary-400 -mt-3 mr-3 flex-shrink-0" />
              <p className="text-base leading-5">{subject}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>


{/* Benefits Section */}
<section className="py-20 md:py-8 bg-primary-500">
  <div className="container mx-auto px-4">
    
    {/* Custom Heading */}
    <div className="max-w-4xl mb-10 mx-auto text-center">
      <h2 className="text-3xl font-extrabold text-white mb-2">
        How Our Nursing Tutoring Can Help You
      </h2>
      <p className="text-base text-gray-100">
        Our expert tutors focus on these key areas to help you succeed <br />
        in your nursing education journey.
      </p>
    </div>

    {/* Benefits List */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {benefits.map((benefit, index) => {
        const isLastOdd =
          benefits.length % 2 === 1 && index === benefits.length - 1;

        return (
          <motion.div
            key={index}
            className={`flex items-start p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ${
              isLastOdd ? 'md:col-span-2 mx-auto max-w-xl' : ''
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <CheckCircle className="h-5 w-5 text-pink-600 mt-1 mr-3" />
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-0.5">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>



 {/* Nursing Subjects Section */}
<section className="py-20 md:py-8 bg-white">
  <div className="container mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-3">
        Subjects We Cover
      </h2>
      <p className="text-lg text-gray-600 max-w-xl mx-auto">
        We offer personalized tutoring for all nursing subjects.
      </p>
    </div>

    {/* Subject Grid */}
    <div className="grid grid-cols-1 -mt-8 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {nursingSubjects.map((subject, index) => (
        <motion.div
          key={index}
          className="flex items-center p-5 bg-gray-50 border border-neutral-200 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4">
            <img
              src={`/img${index + 1}.png`}
              alt={`${subject} Icon`}
              className="h-12 w-12 object-contain"
            />
          </div>
          <p className="text-base font-medium text-gray-700">{subject}</p>
        </motion.div>
      ))}
    </div>

  </div>
</section>
{/* Final Section */}
      <section className="relative py-4 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')", opacity: 0.35 }}></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-600 to-blue-100 opacity-30 z-0"></div>
        <div className="relative z-10 container-custom mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-14">
            <h2 className="text-4xl font-semibold mb-3 text-black">Ready to Enhance Your <br /> Nursing School Experience?</h2>
            <p className="text-xl text-black/90 leading-snug">
             Sign up today and schedule your first tutoring <br/>
             session with an expert in your nursing field.
            </p>
          </div>
          <NursingDiscountForm />
        </div>
      </section>
      <TestimonialsSection />
    </>

  );
};

export default NursingTutoringPage;
