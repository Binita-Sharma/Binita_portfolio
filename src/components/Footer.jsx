import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white py-24 md:py-32 overflow-hidden relative">
      <div className="container mx-auto px-5 text-center">
        {/* Speech Bubble Icon */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl px-4 py-2 flex gap-1 relative">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-accent-yellow"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
            {/* Speech bubble tail */}
            <div className="absolute -bottom-1.5 left-1/4 w-3 h-3 bg-white rotate-45"></div>
          </div>
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-medium mb-8 leading-tight tracking-tight"
        >
          Let's talk about <br /> your project.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed font-light"
        >
          Got a project in mind? Let's create something great. <br />
          We can transform that idea into real product.
        </motion.p>

        {/* CTA Section */}
        <div className="relative inline-block">
          <Link 
            to="/contact" 
            className="bg-white text-black px-10 py-4 rounded-xl font-medium text-lg hover:bg-gray-100 transition-colors inline-block interactive"
          >
            Get in Touch
          </Link>

          {/* Handwritten note */}
          <div className="absolute top-0 -right-48 hidden lg:block text-left">
             <div className="flex flex-col items-start">
                <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="mb-2">
                  <path d="M5 35C15 25 35 5 55 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" />
                  <path d="M55 10L48 8M55 10L53 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <p className="font-handwriting text-2xl text-white rotate-[-5deg] leading-none">
                  and make it <br /> real together
                </p>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-32 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
          <p>© 2026 Binita Sharma. All rights reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Dribbble</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-red/10 blur-[120px] rounded-full pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
