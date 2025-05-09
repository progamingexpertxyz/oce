"use client";
import React from 'react';
import Link from "next/link";
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 text-black">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          
          {/* Brand Column */}
          <div className="space-y-2">
            <Link href="/" className="flex items-center -gap-0 -ml-4"> {/* gap-1 for smaller space between logo and text */}
              <img 
                src="/Oce 1.png" 
                alt="Logo" 
                className="h-16 w-16 object-contain" 
              />
              <span className="font-ageo text-lg font-semibold text-black mt-2"> {/* Reduced font size */}
                Online Course Experts
              </span>
            </Link>
            <p className="text-black text-sm ">
              Personalized academic support services focused on helping you learn and succeed ethically.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-black hover:text-primary-300 transition-colors">
                {/* Facebook */}
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="..." clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-black hover:text-primary-300 transition-colors">
                {/* Twitter */}
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="..." />
                </svg>
              </a>
              <a href="#" className="text-black hover:text-primary-300 transition-colors">
                {/* Instagram */}
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="..." clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div className='ml-28'>
            <h3 className="text-lg font-semibold mb-4 text-black ">Quick Links</h3>
            <ul className="space-y-2">
              {['/', '/about-us', '/services', '/how-it-works', '/blog', '/contact-us'].map((path, i) => (
                <li key={i}><Link href={path} className="text-black hover:text-primary-300 transition-colors">{path.replace('/', '').replace('-', ' ') || 'Home'}</Link></li>
              ))}
            </ul>
          </div>
          
          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/nursing-tutoring" className="text-black hover:text-primary-300 transition-colors">Nursing Tutoring</Link></li>
              <li><Link href="/nursing-academic-support" className="text-black hover:text-primary-300 transition-colors">Nursing Academic Support</Link></li>
              <li><Link href="/proofreading-formatting-services" className="text-black hover:text-primary-300 transition-colors">Proofreading & Formatting</Link></li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary-600 mt-0.5 mr-2" />
                <span className="text-black">+1 (917) 310-1591</span>
              </li>
             <li className="flex items-center space-x-2">
  <Mail size={20} className="h-5 w-5 text-primary-600" />
  <span className="text-black text-sm md:text-md">care@onlinecourseexperts.com</span>
</li>


              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-600 mt-2 mr-2" />
                <span className="text-black text-sm">37 West 14th Street<br />New York, 10011 USA</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center text-sm text-black">
          <p>&copy; {currentYear} Online Course Experts. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link href="/privacy-policy" className="hover:text-primary-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-primary-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
