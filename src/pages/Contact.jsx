import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#e5e5fa] overflow-hidden relative">
      {/* Background Doodles */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-40 left-[10%] hidden lg:block"
      >
        <div className="text-6xl filter drop-shadow-lg">🌈</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-40 right-[10%] hidden lg:block"
      >
        <div className="relative">
          <div className="text-6xl rotate-12">✈️</div>
          <svg className="absolute -bottom-10 -right-10 w-24 h-12 text-black/20" viewBox="0 0 100 50">
            <path d="M0 40 Q 25 10, 50 40 T 100 40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
          </svg>
        </div>
      </motion.div>

      <div className="container mx-auto px-5 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-medium mb-6 leading-tight tracking-tight max-w-3xl mx-auto"
          >
            How can I help you with your next project?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto"
          >
            Whether you have a clear vision or just an idea, I'm here to help shape it into something meaningful.
          </motion.p>
        </div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white border border-black rounded-[2.5rem] p-10 md:p-20 shadow-xl max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

            {/* Left Side: Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-medium mb-6">Let's get in touch</h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Feel free to reach out for collaborations, project inquiries, or just to say hello.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#fbeae8] border border-black rounded-2xl flex items-center justify-center shrink-0">
                    <i className="ph ph-map-pin text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Address</h4>
                    <p className="text-text-secondary">Kolkata , West-Bengal, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#fbe29f] border border-black rounded-2xl flex items-center justify-center shrink-0">
                    <i className="ph ph-phone text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Phone</h4>
                    <p className="text-text-secondary">+91 9007871308</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#d8ecf8] border border-black rounded-2xl flex items-center justify-center shrink-0">
                    <i className="ph ph-envelope-simple text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">E-mail</h4>
                    <p className="text-text-secondary">binitasharma644@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <form className="space-y-10">
              <div className="space-y-2">
                <label className="text-sm font-medium text-black/40">Name</label>
                <input
                  type="text"
                  placeholder="What is your name?*"
                  className="w-full border-b border-black/20 py-4 focus:outline-none focus:border-black transition-colors bg-transparent text-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-black/40">Email</label>
                <input
                  type="email"
                  placeholder="Your email address?*"
                  className="w-full border-b border-black/20 py-4 focus:outline-none focus:border-black transition-colors bg-transparent text-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-black/40">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your idea*"
                  className="w-full border-b border-black/20 py-4 focus:outline-none focus:border-black transition-colors bg-transparent text-lg resize-none"
                ></textarea>
              </div>

              <button className="bg-white border border-black px-12 py-5 rounded-xl font-medium text-lg hover:bg-black hover:text-white transition-all shadow-sm">
                Send a Message
              </button>
            </form>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
