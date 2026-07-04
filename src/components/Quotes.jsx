import React, { useEffect, useState } from 'react';
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
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const currentQuote = quotes[currentIndex];

  return (
    <section className="section-padding relative overflow-hidden bg-[#0f0d0d] text-white">
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -18, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[-8rem] top-[-6rem] h-[22rem] w-[22rem] rounded-full bg-accent-red/25 blur-[110px]"
      />

      <motion.div
        animate={{
          x: [0, -18, 0],
          y: [0, 16, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[-7rem] right-[-5rem] h-[24rem] w-[24rem] rounded-full bg-accent-yellow/15 blur-[120px]"
      />

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] items-stretch">
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_35%,transparent_65%,rgba(255,255,255,0.06))]" />

            <div className="relative">
              <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                Voices
              </p>

              <h2 className="mt-4 text-4xl md:text-6xl font-medium tracking-tight leading-[0.95] max-w-xs">
                Words that move the work forward.
              </h2>

              <p className="mt-6 text-sm md:text-base leading-7 text-white/70 max-w-sm">
                A rotating set of client notes designed like a magazine spread, with motion that keeps the section feeling alive.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="h-14 w-14 rounded-full border border-white/15 bg-white/8 flex items-center justify-center text-sm font-semibold">
                  {String(currentIndex + 1).padStart(2, '0')}
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                    Featured quote
                  </p>
                  <p className="mt-1 text-lg font-medium">
                    {currentQuote.author}
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {quotes.map((quote, index) => (
                  <button
                    key={quote.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 ${
                      currentIndex === index
                        ? 'border-accent-yellow bg-accent-yellow text-black'
                        : 'border-white/15 bg-white/5 text-white/60 hover:border-white/35 hover:text-white'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>
          </motion.aside>

          <div className="relative rounded-[2rem] border border-white/10 bg-[#161313] p-4 md:p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45)] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,226,159,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(192,59,34,0.18),transparent_30%)]" />

            <div className="relative h-full min-h-[520px] rounded-[1.6rem] border border-white/10 bg-white/6 p-6 md:p-10 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-white/15 bg-black/20 px-4 py-2 text-[10px] font-bold tracking-[0.35em] uppercase text-white/60">
                  {currentQuote.category}
                </span>

                <span className="text-xs uppercase tracking-[0.3em] text-white/35">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(quotes.length).padStart(2, '0')}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuote.id}
                  initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -18, filter: 'blur(8px)' }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  className="relative z-10"
                >
                  <div className="mb-6 text-6xl md:text-8xl leading-none text-accent-yellow/90 select-none">
                    “
                  </div>

                  <p className="max-w-3xl text-2xl md:text-5xl font-medium leading-[1.2] tracking-tight text-white">
                    {currentQuote.text}
                  </p>

                  <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                        Author
                      </p>
                      <p className="mt-2 text-xl md:text-2xl font-semibold">
                        {currentQuote.author}
                      </p>
                    </div>

                    <motion.button
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white text-black px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent-yellow"
                    >
                      Start a project
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                        →
                      </span>
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="relative z-10 mt-10">
                <div className="flex gap-2">
                  {quotes.map((quote, index) => (
                    <button
                      key={quote.id}
                      onClick={() => setCurrentIndex(index)}
                      className="group flex-1 text-left"
                      aria-label={`Show quote ${index + 1}`}
                    >
                      <div
                        className={`h-1 rounded-full overflow-hidden bg-white/10 ${
                          currentIndex === index ? 'ring-1 ring-accent-yellow/40' : ''
                        }`}
                      >
                        <motion.div
                          key={`${quote.id}-${currentIndex}`}
                          initial={{ scaleX: currentIndex === index ? 0 : 1 }}
                          animate={{ scaleX: currentIndex === index ? 1 : 0.35 }}
                          transition={{ duration: currentIndex === index ? 5.5 : 0.3, ease: 'linear' }}
                          className="h-full origin-left bg-gradient-to-r from-accent-yellow via-accent-red to-white"
                        />
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/35">
                  <span>Rotating testimonials</span>
                  <span>Motion enabled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
