"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { CheckCircle, X, AlertCircle } from 'lucide-react';

const ProofreadingPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Academic Proofreading & Formatting | APA, MLA | Online Course Experts';
    window.scrollTo(0, 0);
  }, []);

  const included = [
    'Grammar, spelling, and punctuation corrections',
    'Sentence structure improvements for clarity',
    'Formatting according to required style guides (APA, MLA, Chicago, etc.)',
    'Citation format checking and correction',
    'General document formatting (margins, spacing, headings, etc.)',
    'Consistency in terminology and style',
    'Basic feedback on clarity and organization',
  ];

  const notIncluded = [
    'Writing or rewriting content',
    'Generating new ideas or content',
    'Conducting research or adding sources',
    'Editing that substantially changes your meaning',
    'Fact-checking or verifying your sources',
    'Writing assignments or papers from scratch',
    'Expanding content to meet word counts',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="mb-4 text-center">Academic Proofreading & Formatting Services</h1>
            <p className="text-lg text-neutral-700 text-center mb-6">
              Polish Your Papers for Professional Presentation and Proper Citation
            </p>
            <p className="text-neutral-600 mb-6">
              Ensure your hard work is presented clearly and professionally. Our meticulous proofreading service polishes your academic papers by checking for errors in grammar, spelling, punctuation, syntax, and ensuring accurate adherence to citation styles like APA, MLA, and Chicago.
            </p>
            <div className="bg-secondary-50 border border-secondary-100 rounded-lg p-6">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-secondary-500 mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-secondary-700">
                  <strong>Important:</strong> Our proofreading service strictly focuses on polishing your existing work. We do not generate content, write papers, or complete assignments. We maintain high ethical standards and support academic integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-primary-500">What Our Service Includes</h2>
              <div className="space-y-4">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-secondary-400">What Our Service Does NOT Include</h2>
              <div className="space-y-4">
                {notIncluded.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <X className="h-6 w-6 text-secondary-400 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Citation Styles Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <SectionTitle 
            title="Citation Styles We Support"
            subtitle="Our proofreading experts are proficient in all major academic citation styles."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="card-hover text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-primary-500">APA</h3>
              <p className="text-neutral-600">American Psychological Association Style, 7th Edition</p>
            </motion.div>
            
            <motion.div 
              className="card-hover text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-primary-500">MLA</h3>
              <p className="text-neutral-600">Modern Language Association Style, 9th Edition</p>
            </motion.div>
            
            <motion.div 
              className="card-hover text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-primary-500">Chicago</h3>
              <p className="text-neutral-600">Chicago Manual of Style, 17th Edition</p>
            </motion.div>
            
            <motion.div 
              className="card-hover text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-primary-500">Other</h3>
              <p className="text-neutral-600">Harvard, AMA, Vancouver, AAA, and more</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">How Our Proofreading Process Works</h2>
              <ol className="space-y-6 list-decimal list-inside">
                <li className="text-lg">
                  <span className="font-bold">Submit Your Document</span>
                  <p className="ml-6 mt-2 text-neutral-600">Upload your document through our secure system along with any specific requirements or style guides.</p>
                </li>
                <li className="text-lg">
                  <span className="font-bold">Get a Quote</span>
                  <p className="ml-6 mt-2 text-neutral-600">We'll review your document and provide a quote based on word count, complexity, and turnaround time.</p>
                </li>
                <li className="text-lg">
                  <span className="font-bold">Expert Review</span>
                  <p className="ml-6 mt-2 text-neutral-600">Once approved, our professional proofreader carefully reviews your document, making necessary corrections.</p>
                </li>
                <li className="text-lg">
                  <span className="font-bold">Detailed Corrections</span>
                  <p className="ml-6 mt-2 text-neutral-600">We use track changes or comments to show all corrections and explain significant edits.</p>
                </li>
                <li className="text-lg">
                  <span className="font-bold">Receive Your Polished Document</span>
                  <p className="ml-6 mt-2 text-neutral-600">Your document is returned by the agreed deadline, ready for submission with confidence.</p>
                </li>
              </ol>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/4240505/pexels-photo-4240505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Proofreading process" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Note Section */}
      <section className="section bg-neutral-100">
        <div className="container-custom">
          <p className="text-center text-lg text-neutral-700">
            Pricing for proofreading services varies depending on the complexity of the task, length of the document, and turnaround time. Contact us for a personalized quote.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-primary-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-6 text-neutral-800">Ready to Get Started?</h2>
          <p className="text-lg text-neutral-600 mb-6">
            Polish your academic paper today! Our experts are ready to help you achieve perfect clarity, structure, and citation accuracy.
          </p>
          <Button link="/contact">Get in Touch</Button>
        </div>
      </section>
    </motion.div>
  );
};

export default ProofreadingPage;
