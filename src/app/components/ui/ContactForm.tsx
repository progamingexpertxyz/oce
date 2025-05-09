import React, { useState } from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-success-50 border border-success-200 rounded-lg p-6 text-center">
        <h3 className="text-success-700 font-bold text-xl mb-2">Message Sent Successfully!</h3>
        <p className="text-success-600 mb-4">
          Thank you for reaching out. We'll get back to you as soon as possible.
        </p>
        <Button
          variant="outline"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-error-50 border border-error-200 rounded-lg p-4 text-error-700">
          {error}
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-neutral-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-neutral-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-neutral-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="">Select a Subject</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Nursing Tutoring">Nursing Tutoring</option>
          <option value="Academic Support">Academic Support</option>
          <option value="Proofreading Services">Proofreading Services</option>
          <option value="Pricing Inquiry">Pricing Inquiry</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-neutral-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        ></textarea>
      </div>
      
      <div>
        <Button
          type="submit"
          variant="primary"
          fullWidth
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;