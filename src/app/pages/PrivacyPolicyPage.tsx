import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicyPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Privacy Policy | Online Course Experts';
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="py-20 md:py-28"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8">Privacy Policy</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="mb-4">
              At Online Course Experts, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
            <p className="mb-4">
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-neutral-600">
              <li>Register for our services</li>
              <li>Fill out a form on our website</li>
              <li>Submit documents for review</li>
              <li>Participate in tutoring or academic support sessions</li>
              <li>Contact us with inquiries or feedback</li>
            </ul>
            <p className="mb-4">The personal information we may collect includes:</p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-neutral-600">
              <li>Name and contact information</li>
              <li>Educational information</li>
              <li>Payment information</li>
              <li>Content of communications with us</li>
              <li>Information about your use of our services</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We may use the information we collect for various purposes, including to:</p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-neutral-600">
              <li>Provide, operate, and maintain our services</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Understand and analyze how you use our services</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you directly or through our partners</li>
              <li>Process your transactions and manage your account</li>
              <li>Send you emails and updates about our services</li>
              <li>Find and prevent fraud</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Disclosure of Your Information</h2>
            <p className="mb-4">
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <h3 className="text-xl font-bold mb-2">4.1 By Law or to Protect Rights</h3>
            <p className="mb-4">
              If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
            </p>
            <h3 className="text-xl font-bold mb-2">4.2 Third-Party Service Providers</h3>
            <p className="mb-4">
              We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
            </p>
            <h3 className="text-xl font-bold mb-2">4.3 Marketing Communications</h3>
            <p className="mb-4">
              With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes.
            </p>
            <h3 className="text-xl font-bold mb-2">4.4 Business Transfers</h3>
            <p className="mb-4">
              If we are involved in a merger, acquisition, financing, reorganization, bankruptcy, receivership, sale of company assets, or transition of service to another provider, your information may be sold or transferred as part of that transaction.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. Security of Your Information</h2>
            <p className="mb-4">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. Your Privacy Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, such as the right to:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-neutral-600">
              <li>Access the personal information we have about you</li>
              <li>Correct inaccuracies in your personal information</li>
              <li>Delete your personal information</li>
              <li>Object to the processing of your personal information</li>
              <li>Request that we limit our use and disclosure of your personal information</li>
              <li>Receive your personal information in a usable electronic format and transmit it to a third party (right to data portability)</li>
              <li>Withdraw your consent</li>
            </ul>
            <p className="mb-4">
              If you would like to exercise any of these rights, please contact us using the contact information provided below.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <p className="mb-1"><strong>Online Course Experts</strong></p>
              <p className="mb-1">1234 Education Lane</p>
              <p className="mb-1">Learning City, ED 12345</p>
              <p className="mb-1">Email: privacy@onlinecourseexperts.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </section>
          
          <p className="text-sm text-neutral-500 text-center mt-16">
            Last Updated: May 1, 2024
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicyPage;