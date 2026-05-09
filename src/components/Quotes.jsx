import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  {
    id: 1,
    text: "From the very beginning the collaboration felt effortless. Every idea was carefully refined into something meaningful, and the final result was exactly what we hoped for.",
    author: "Natalie Brooks",
    category: "PRODUCT DESIGN"
  },
  {
    id: 2,
    text: "Working with Binita was a game-changer for our product. Her ability to translate complex ideas into intuitive designs is truly exceptional and inspiring.",
    author: "James Wilson",
    category: "UI/UX DESIGN"
  },
  {
    id: 3,
    text: "The attention to detail and the creative approach brought a fresh perspective to our brand. We couldn't be happier with the outcome of our collaboration.",
    author: "Sarah Jenkins",
    category: "BRANDING"
  }
];

const Quotes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-[#1a1a1a] relative overflow-hidden flex items-center justify-center min-h-[800px]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-5 relative">
        <div className="relative w-full max-w-4xl mx-auto h-[500px] flex items-center justify-center">
          
          {/* Stacked Cards Background */}
          <div className="absolute w-[90%] h-[400px] bg-[#333] border border-white/10 rounded-2xl rotate-[-6deg] translate-y-4"></div>
          <div className="absolute w-[90%] h-[400px] bg-[#222] border border-white/10 rounded-2xl rotate-[3deg] translate-y-2"></div>

          {/* Main Animated Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              exit={{ opacity: 0, y: -20, rotate: -5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute w-full h-auto min-h-[450px] bg-white rounded-2xl p-12 md:p-20 shadow-2xl flex flex-col items-center justify-center text-center"
            >
              <span className="text-xs font-bold tracking-[0.2em] text-black/40 mb-12 uppercase">
                {quotes[currentIndex].category}
              </span>

              <div className="mb-10 text-4xl text-[#fbe29f]">“</div>

              <h3 className="text-2xl md:text-4xl font-medium leading-relaxed tracking-tight text-black mb-12">
                {quotes[currentIndex].text}
              </h3>

              <div className="flex flex-col items-center gap-6">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-black/5 hover:bg-black/10 px-8 py-3 rounded-full text-sm font-medium transition-all"
                >
                  START A PROJECT 
                  <span className="w-6 h-6 bg-black text-white rounded-sm flex items-center justify-center text-[10px]">→</span>
                </motion.button>

                <div className="mt-8">
                   <p className="font-bold text-black uppercase tracking-widest text-sm">
                     {quotes[currentIndex].author}
                   </p>
                </div>
              </div>

              {/* Footer text elements */}
              <div className="absolute bottom-10 left-10 text-[10px] font-bold tracking-[0.3em] text-black/20 uppercase hidden md:block">
                BINITA©STUDIO
              </div>
              <div className="absolute bottom-10 right-10 text-[10px] font-bold tracking-[0.3em] text-black/20 uppercase hidden md:block">
                NEPAL
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-3 mt-12">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                currentIndex === i ? 'bg-white w-8' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quotes;
