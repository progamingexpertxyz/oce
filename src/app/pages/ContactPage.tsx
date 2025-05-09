import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/ui/ContactForm';
import { Phone, Mail, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Contact Us | Online Course Experts';
    window.scrollTo(0, 0);
  }, []);

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
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Get in Touch with Online Course Experts</h1>
            <p className="text-lg text-neutral-700">
              Have questions about our services? Need details on session rates? Want a proofreading quote? We're here to help! Reach out using your preferred method below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <Phone className="h-6 w-6 text-primary-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-neutral-600">(555) 123-4567</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <Mail className="h-6 w-6 text-primary-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-neutral-600">info@onlinecourseexperts.com</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <Clock className="h-6 w-6 text-primary-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Response Time</h3>
              <p className="text-neutral-600">Within 24 business hours</p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:mt-16"
            >
              <div className="bg-neutral-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">How We Can Help</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                      <span className="block h-2 w-2 bg-primary-500 rounded-full"></span>
                    </div>
                    <div>
                      <p className="font-semibold">Service Information</p>
                      <p className="text-neutral-600">Get details about our tutoring, academic support, or proofreading services.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                      <span className="block h-2 w-2 bg-primary-500 rounded-full"></span>
                    </div>
                    <div>
                      <p className="font-semibold">Pricing Inquiries</p>
                      <p className="text-neutral-600">Learn about our rates for different services and session options.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                      <span className="block h-2 w-2 bg-primary-500 rounded-full"></span>
                    </div>
                    <div>
                      <p className="font-semibold">Schedule a Session</p>
                      <p className="text-neutral-600">Request a specific time for tutoring or academic support.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                      <span className="block h-2 w-2 bg-primary-500 rounded-full"></span>
                    </div>
                    <div>
                      <p className="font-semibold">Submit a Document</p>
                      <p className="text-neutral-600">Send your paper for a proofreading quote or service.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                      <span className="block h-2 w-2 bg-primary-500 rounded-full"></span>
                    </div>
                    <div>
                      <p className="font-semibold">General Questions</p>
                      <p className="text-neutral-600">Ask anything else about how we can support your academic journey.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <SectionTitle 
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about our services and process."
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <motion.div 
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-xl font-bold mb-3">When will I receive a response to my inquiry?</h3>
                <p className="text-neutral-600">
                  We strive to respond to all inquiries within 24 business hours. For urgent matters, please call us directly.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold mb-3">How do I schedule a tutoring session?</h3>
                <p className="text-neutral-600">
                  You can request a session through our contact form, by email, or by phone. We'll confirm availability and discuss rates before scheduling.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-3">What information should I include when submitting a document for proofreading?</h3>
                <p className="text-neutral-600">
                  Please include your document, the required citation style (APA, MLA, etc.), your deadline, and any specific areas of concern you'd like us to focus on.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;