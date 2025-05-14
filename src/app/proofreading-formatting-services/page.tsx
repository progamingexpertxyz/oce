'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { CheckCircle, X, AlertCircle, ChevronDown } from 'lucide-react';
import NursingDiscountForm from '../components/home/form';

const ProofreadingPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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


const faqs = [
  {
    question: "What is the typical turnaround time?",
    answer:
      "Standard turnaround is 48-72 hours, depending on document length and complexity. We also offer expedited services for urgent needs, subject to availability.",
  },
  {
    question: "Is my document kept confidential?",
    answer:
      "Your document is never shared with third parties, and our proofreaders sign confidentiality agreements.",
  },
  {
    question: "What file formats do you accept?",
    answer:
      "We accept Microsoft Word documents (.doc, .docx) as they allow for track changes. We can also work with Google Docs by providing you with commenting access.",
  },
];


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
     {/* Hero Section */}
<section className="py-20 md:py-12 w-full mx-h-auto bg-gradient-to-br from-primary-50 via-white to-secondary-50">
  <div className="container-custom">
    <div className="flex flex-col md:flex-row mt-16 items-center md:items-start gap-10">
      
      {/* Left: Text Content */}
      <div className="md:w-1/2 ml-5">
        <h1 className="mb-2 text-left text-3xl md:text-4xl font-bold">
          Academic Proofreading & Formatting Services
        </h1>
        <p className="text-lg text-neutral-700 text-left mb-0 leading-relaxed">
          Polish Your Papers for Professional Presentation <br/>
          and Proper Citation
        </p>
        <p className="text-neutral-600 mb-6 leading-relaxed text-sm">
          Ensure your hard work is presented clearly and professionally. Our meticulous proofreading service polishes your academic papers by checking for errors in grammar, spelling, punctuation, syntax, and ensuring accurate adherence to citation styles like APA, MLA, and Chicago.
        </p>
      </div>

      {/* Right: Image */}
      <div className="md:w-1/2">
        <img
          src="/11 1.png" // Replace with your actual image
          alt="Proofreading illustration"
          className="w-[70%] h-auto ml-28 -mt-4 rounded-xl shadow-lg"
        />
      </div>
    </div>

    {/* Centered Alert Box */}
    <div className="mt-3 md:mt-3 max-w-4xl mx-auto">
      <div className="bg-secondary-50 border border-secondary-100 rounded-lg p-6 flex items-start">
        <AlertCircle className="h-6 w-6 text-secondary-500 mt-0.5 mr-3 flex-shrink-0" />
        <p className="text-secondary-700">
          <strong>Important:</strong> Our proofreading service strictly focuses on polishing your existing work. We do not generate content, write papers, or complete assignments. We maintain high ethical standards and support academic integrity.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Service Coverage Section */}
<section className="py-4">
  <div className="container-custom">
    <div className="mx-auto max-w-4xl"> {/* Centered and narrower container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x border border-neutral-400 rounded-md overflow-hidden text-sm">

        {/* Includes Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-4"
        >
          <h2 className="text-xl font-semibold mb-4 text-primary-500">What Our Service Includes</h2>
          <div className="space-y-2">
            {included.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary-500 mt-0.5" />
                <p className="leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Not Includes Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-4"
        >
          <h2 className="text-xl font-semibold mb-4 text-secondary-400">What Our Service Does NOT Include</h2>
          <div className="space-y-2">
            {notIncluded.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <X className="h-4 w-4 text-secondary-400 mt-0.5" />
                <p className="leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  </div>
</section>

      {/* Citation Styles Section */}
<section className="py-6 bg-primary-600">
  <div className="container-custom">
  <div className="flex flex-col items-center text-center ">
  <h2 className="text-4xl font-extrabold text-gray-50 mb-4">
    Citation Styles We Support
  </h2>
  <p className="text-lg text-gray-100 max-w-2xl">
    Our proofreading experts are proficient in all major academic citation styles.
  </p>
</div>
    
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
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
      <section className="py-8 ml-5">
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
                  <p className="ml-6 mt-0 text-neutral-600">Upload your document through our secure system along with any specific requirements or style guides.</p>
                </li>
                <li className="text-lg">
                  <span className="font-bold">Get a Quote</span>
                  <p className="ml-6 mt-0 text-neutral-600">We'll review your document and provide a quote based on word count, complexity, and turnaround time.</p>
                </li>
                <li className="text-lg">
                  <span className="font-bold">Expert Review</span>
                  <p className="ml-6 mt-0 text-neutral-600">Once approved, our professional proofreader carefully reviews your document, making necessary corrections.</p>
                </li>
                <li className="text-lg">
                  <span className="font-bold">Detailed Corrections</span>
                  <p className="ml-6 mt-0 text-neutral-600">We use track changes or comments to show all corrections and explain significant edits.</p>
                </li>
                <li className="text-lg">
                  <span className="font-bold ">Receive Your Polished Document</span>
                  <p className="ml-6 mt-0 text-neutral-600">Your document is returned by the agreed deadline, ready for submission with confidence.</p>
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
                src="/pic8.png" 
                alt="Proofreading process" 
                className="rounded-lg shadow-lg w-[60%] ml-28 mt-4 h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

     {/* Final Combined Section */}
<section className="relative py-4 text-white overflow-hidden">
  <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')", opacity: 0.35 }}></div>
  <div className="absolute inset-0 bg-gradient-to-tr from-pink-600 to-blue-100 opacity-30 z-0"></div>
  <div className="relative z-10 container-custom mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    
    {/* Left Side - Text */}
    <div className="md:w-1/2 mt-6 md:mt-0 md:ml-10 text-left">
      <h2 className="text-5xl font-semibold mb-2 text-black">
        Ready to Get Started?
      </h2>
      <p className="text-lg text-black/70 leading-5 mb-2">
        Polish your academic paper today! Our experts are ready <br/> 
        to help you achieve perfect clarity, structure, and citation <br/>
         accuracy.
      </p>
      <p className="text-base text-black/70 leading-5 mb-4">
        Pricing for proofreading services varies depending on the <br/>  
        complexity of the task, length of the document, and <br/>
         turnaround time. Contact us for a personalized quote.
      </p>
      <p className="text-xl text-primary-600 leading-snug">
        Start your journey with us today and receive a <br />tailored 
        discount on your first consultation!
      </p>
    </div>
    
    {/* Right Side - Form */}
    <div className=" mt-6 md:mt-0">
      <NursingDiscountForm />
    </div>
    </div>
    

 
</section>
<section className="py-12 bg-white">
      {/* Title */}
      <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">FAQ</h2>

      {/* Card Container */}
      <div className="mx-auto bg-gradient-to-br from-primary-50 via-white to-secondary-50 rounded-xl shadow-xl px-6 py-10 w-full max-w-4xl">

        {/* FAQ + Image Row */}
        <div className="flex flex-col md:flex-row items-start gap-10">

          {/* FAQ List */}
          <div className="flex-1 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-md p-4 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div
                  className="flex justify-between items-start cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-sm font-semibold text-gray-800 pr-3">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-4 h-4 mt-1 text-gray-500 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <div className="w-[280px] shrink-0 hidden md:block -mr-4 -mt-6">
            <img
              src="/image23.png"
              alt="FAQ Visual"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    </motion.div>
  );
};

export default ProofreadingPage;
