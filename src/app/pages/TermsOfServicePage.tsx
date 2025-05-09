import React from 'react';
import { motion } from 'framer-motion';

const TermsOfServicePage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Terms of Service | Online Course Experts';
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
          <h1 className="mb-8">Terms of Service</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="mb-4">
              These Terms of Service ("Terms") govern your use of the Online Course Experts website and services (collectively, the "Services"). Please read these Terms carefully before using our Services.
            </p>
            <p className="mb-4">
              By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access or use our Services.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Academic Integrity Policy</h2>
            <p className="mb-4">
              Online Course Experts is committed to maintaining the highest standards of academic integrity. Our services are designed to support your learning and academic development, not to enable academic dishonesty.
            </p>
            <p className="mb-4">By using our Services, you agree to:</p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-neutral-600">
              <li>Use our services ethically and in compliance with your institution's academic policies</li>
              <li>Never represent our work as your own</li>
              <li>Use our services as learning tools and study aids, not as substitutes for your own work</li>
              <li>Properly cite any assistance received from our services when required by your institution</li>
            </ul>
            <p className="mb-4">
              We reserve the right to refuse service to anyone who we believe is using our services for purposes that violate academic integrity standards.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. Services Description</h2>
            <p className="mb-4">
              Our Services include, but are not limited to:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-neutral-600">
              <li>Subject-Matter Tutoring: One-on-one sessions to help explain course concepts</li>
              <li>Nursing Academic Support: Assistance with study strategies and skills development</li>
              <li>Proofreading & Formatting: Review of papers for grammar, syntax, and citation formatting</li>
            </ul>
            <p className="mb-4">
              We do NOT provide services to:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-neutral-600">
              <li>Complete assignments for you</li>
              <li>Write or substantially rewrite papers or other academic work</li>
              <li>Take exams or quizzes on your behalf</li>
              <li>Provide any service that violates academic integrity standards</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. User Accounts and Responsibilities</h2>
            <p className="mb-4">
              When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account and password, and you agree to accept responsibility for all activities that occur under your account.
            </p>
            <p className="mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-neutral-600">
              <li>Share your account credentials with others</li>
              <li>Use our Services for any illegal or unauthorized purpose</li>
              <li>Violate any laws or regulations in your jurisdiction</li>
              <li>Interfere with or disrupt our Services or servers</li>
              <li>Harass, abuse, or harm another person</li>
              <li>Submit false or misleading information</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. Payments and Refunds</h2>
            <p className="mb-4">
              All payments for Services are due in advance unless otherwise agreed upon. Prices for Services will be as quoted on our website or as agreed upon for specific services.
            </p>
            <p className="mb-4">
              Refund Policy:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-neutral-600">
              <li>For scheduled tutoring or support sessions, cancellations must be made at least 24 hours in advance for a full refund.</li>
              <li>For proofreading services, refunds may be issued if we fail to deliver within the agreed-upon timeframe or if the service does not meet the agreed-upon specifications.</li>
              <li>All refund requests will be evaluated on a case-by-case basis.</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
            <p className="mb-4">
              The content, organization, graphics, design, compilation, and other matters related to our website are protected by applicable copyrights and other intellectual property rights. You may not copy, reproduce, republish, upload, post, transmit, or distribute such material in any way without our prior written consent.
            </p>
            <p className="mb-4">
              For materials you submit to us (such as papers for proofreading):
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-neutral-600">
              <li>You retain all rights to your original content</li>
              <li>You grant us a license to review and provide feedback on the content</li>
              <li>We will not use your content for any other purpose without your permission</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, Online Course Experts and its affiliates, officers, employees, agents, partners, and licensors shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-neutral-600">
              <li>Your access to or use of or inability to access or use the Services</li>
              <li>Any conduct or content of any third party on the Services</li>
              <li>Any content obtained from the Services</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your account and access to our Services immediately, without prior notice or liability, for any reason, including, without limitation, if you breach these Terms.
            </p>
            <p className="mb-4">
              Upon termination, your right to use the Services will immediately cease. If you wish to terminate your account, you may simply discontinue using the Services or contact us to request account deletion.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify or replace these Terms at any time. We will provide notice of any significant changes by posting the new Terms on our website or by sending you an email.
            </p>
            <p className="mb-4">
              Your continued use of the Services after any such changes constitutes your acceptance of the new Terms.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <p className="mb-1"><strong>Online Course Experts</strong></p>
              <p className="mb-1">1234 Education Lane</p>
              <p className="mb-1">Learning City, ED 12345</p>
              <p className="mb-1">Email: terms@onlinecourseexperts.com</p>
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

export default TermsOfServicePage;