'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import SectionTitle from '@/app/components/ui/SectionTitle';
import Button from '@/app/components/ui/Button';
import NursingDiscountForm from '../components/home/form';

const HowItWorksPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'How Our Services Work | Online Course Experts';
    window.scrollTo(0, 0);
  }, []);


  const steps = [
    {
      number: 1,
      title: 'Select the Right Support',
      description: 'Browse Subject Tutoring, Nursing Academic Support, or Proofreading & Formatting. Contact us if unsure!',
    },
    {
      number: 2,
      title: 'Schedule or Submit',
      description: 'Use our booking system for tutoring/support sessions. Upload your document for proofreading.',
    },
    {
      number: 3,
      title: 'Confirm Details',
      description: (
        <>
          We'll confirm availability and discuss applicable session or proofreading rates.
          <br />
          Complete secure payment once details are agreed upon.
        </>
      ),
    },
    {
      number: 4,
      title: 'Attend Session / Receive Review',
      description: 'Connect with your tutor/coach online, or receive your proofread document by the agreed deadline.',
    },
    {
      number: 5,
      title: 'Implement & Succeed!',
      description: 'Apply your new knowledge, strategies, or submit your polished document with confidence.',
    },
  ];

  return (
    <>
      <Head>
        <title>How Our Services Work | Online Course Experts</title>
      </Head>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
        <section className="h-[40vh] mt-12 w-full bg-gradient-to-br from-primary-50 via-white to-secondary-50">
          <div className="container-custom h-full mt-8  flex flex-col-reverse md:flex-row items-center justify-between gap-6">
            {/* Text Left Side */}
            <div className="w-full md:w-1/2 text-left ml-4">
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-1">
                How Our Services Work
              </h1>
              <p className="text-base md:text-lg text-neutral-600 leading-[1.4]">
                Discover a simple and effective process to access <br /> academic support tailored to your needs.
              </p>
            </div>

            {/* Image Right Side */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/steps.png"
                alt="How it works"
                className="w-[60%] max-w-sm md:max-w-md -mt-18 object-contain"
              />
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-4">
          <div className="container-custom max-w-4xl mx-auto">
            <ol className="relative border-l border-primary-200">
              {steps.map((step, index) => (
                <motion.li
                  key={step.number}
                  className="mb-16 ml-10 last:mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="absolute flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full -left-6 ring-8 ring-white">
                    <span className="text-xl font-bold text-primary-800">{step.number}</span>
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-base text-neutral-600 mb-6">{step.description}</p>

                  {/* Conditionally Rendered Content */}
                  {step.number === 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      {[
                        ['Subject Tutoring', 'For specific course content help, clarification on complex topics, and exam preparation.'],
                        ['Academic Support', 'For developing study strategies, time management, research skills, and academic planning.'],
                        ['Proofreading', 'For grammar, formatting, and citation corrections to polish your existing work.'],
                      ].map(([title, desc], idx) => (
                        <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-neutral-400">
                          <h4 className="font-bold text-primary-500 mb-2">{title}</h4>
                          <p className="text-sm">{desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {step.number === 2 && (
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-300">
                      <p className="mb-4">For tutoring and academic support, our scheduling system allows you to:</p>
                      <ul className="list-disc list-inside mb-4 space-y-2 text-neutral-600">
                        <li>Select your preferred service</li>
                        <li>Choose available dates and times</li>
                        <li>Specify any particular focus areas</li>
                      </ul>
                      <p>For proofreading, upload your document with formatting requirements and deadline needs.</p>
                    </div>
                  )}

                  {step.number === 3 && (
                    <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
                      <p className="font-medium text-primary-800">
                        All pricing is transparent and discussed upfront. We offer competitive rates based on service type, duration, and complexity.
                      </p>
                    </div>
                  )}

                  {step.number === 4 && (
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-300">
                      <p className="mb-4">For online sessions:</p>
                      <ul className="list-disc list-inside mb-4 space-y-2 text-neutral-600">
                        <li>Secure meeting link will be provided</li>
                        <li>Sessions typically last 45–60 minutes</li>
                        <li>Have your materials and questions ready</li>
                        <li>Collaborative tools available during sessions</li>
                      </ul>
                    </div>
                  )}
                </motion.li>
              ))}
            </ol>
          </div>
        </section>
{/* Preparation Section */}
<section className="section ml-24 bg-neutral-50">
  <div className="container-custom  grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center items-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      
      <h2 className="text-2xl font-bold mb-6">Preparing for Your Session</h2>
      <ul className="list-disc list-inside space-y-2 text-neutral-600">
        <li>Have specific questions or topics prepared</li>
        <li>Share relevant course materials in advance</li>
        <li>Quiet space with reliable internet</li>
        <li>Engage actively during the session</li>
        <li>Have all necessary materials (textbooks, notes, etc.)</li>
      </ul>
      <p className="mt-4 text-neutral-600">
        These steps ensure you get the most from your session.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-2xl font-bold mb-6">Technical Requirements</h2>
      <ul className="list-disc list-inside space-y-2 text-neutral-600">
        <li>Reliable internet connection</li>
        <li>Device with camera (preferred)</li>
        <li>Headphones with microphone</li>
        <li>Modern browser (Chrome, Firefox, Safari, Edge)</li>
        <li>Basic video conferencing familiarity</li>
      </ul>
      <p className="mt-4 text-neutral-600">
        We’ll assist you with any technical issues before your session begins.
      </p>
    </motion.div>
  </div>
</section>


        {/* Final Section */}
        <section className="relative py-4 text-white overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url('/bg.jpg')", opacity: 0.35 }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-600 to-blue-100 opacity-30 z-0"></div>
          <div className="relative z-10 container-custom mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-32">
              <h2 className="text-4xl font-semibold mb-3 text-black">
                Questions About the
                Process <br /> or Rates?
              </h2>
              <p className="text-xl text-black/90 leading-snug">
                We're here to help! Contact us for any clarification about <br /> our services, process, or pricing.
              </p>
            </div>
            <NursingDiscountForm />
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default HowItWorksPage;
