import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#fdf2f0] bg-grid">
      <div className="container mx-auto px-5">
        
        {/* Main Bio Section (Figma Inspired) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white border-2 border-[#f2b842] rounded-sm p-12 md:p-20 relative shadow-2xl mb-32"
        >
          {/* Figma UI Elements */}
          <div className="absolute -top-3 left-10 bg-[#f2b842] text-black text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">MAIN BIO</div>
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-[#f2b842]"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-[#f2b842]"></div>
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-[#f2b842]"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-[#f2b842]"></div>

          <div className="space-y-12">
            <h1 className="text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight text-black">
               I'm Binita 💁‍♀️ a designer who doesn’t trust designs that say “user-friendly” but still need a tutorial ✨.
            </h1>

            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-light">
              I tend to ask slightly annoying (but necessary) questions like “Why is this here?”, “Why does this take five steps instead of two?”, or “Why can’t I find what I’m looking for?”—and most of the time, those questions lead to simpler, better solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative">
               {/* Sticky Note 1 */}
               <motion.div 
                 whileHover={{ rotate: 0, scale: 1.02 }}
                 className="bg-[#fbe29f] p-8 rounded-sm shadow-lg rotate-[-2deg] relative"
               >
                 <p className="text-lg text-black/80 leading-relaxed italic font-medium">
                   "I also catch myself thinking things like, ‘Why is the checkout so complicated?’, ‘Why do I have to sign in just to look around?’, or ‘Why does this page take forever to load?’—basically, the same things users quietly get frustrated about."
                 </p>
               </motion.div>

               {/* Polaroid */}
               <motion.div 
                 whileHover={{ rotate: 5, scale: 1.05 }}
                 className="bg-white p-4 pb-12 shadow-2xl border border-black/5 rotate-[4deg] absolute -right-10 -top-20 hidden lg:block w-64 z-20"
               >
                 <div className="aspect-square overflow-hidden bg-gray-100 mb-4">
                    <img src="/public/images/avatar_large.png" alt="Binita" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                 </div>
                 <p className="font-handwriting text-2xl text-center text-black/60">it's me</p>
                 
                 {/* Designer Cursor */}
                 <div className="absolute -top-4 -right-10 bg-[#f2b842] text-black text-[10px] font-bold px-3 py-1.5 rounded-full rounded-tl-none shadow-lg whitespace-nowrap">
                    BINITA
                 </div>
               </motion.div>
            </div>

            <div className="pt-10">
              <motion.div 
                 whileHover={{ x: 10 }}
                 className="bg-[#d1efe0] p-8 rounded-sm shadow-md md:max-w-[80%]"
               >
                 <p className="text-lg md:text-xl text-black/80 leading-relaxed font-light">
                   I enjoy turning messy ideas into clean, usable experiences that don’t make people think twice. If something feels confusing, I’ll probably try to redesign it in my head (even if it’s not my project). I build interfaces that are simple, responsive, and actually make sense in real life—not just on a screen.
                 </p>
               </motion.div>
            </div>

            <p className="text-xl md:text-2xl text-text-secondary font-light pt-8 border-t border-black/5 leading-relaxed">
              Not perfect, still learning, but definitely trying to make the internet a little less confusing, one design at a time.
            </p>
          </div>
        </motion.div>

        {/* My Capabilities Section */}
        <section className="mt-32 pt-20 border-t border-black/10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-medium mb-6 tracking-tight"
            >
              My capabilities
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
            >
              The services I offer are meticulously crafted and tailored to cater specifically to your <span className="text-black font-medium">unique needs</span> and <span className="text-black font-medium">requirements</span>.
            </motion.p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
          >
            {[
              { label: 'Mobile Design', icon: 'ph-sparkle', color: 'text-orange-400' },
              { label: 'UX & Product Design', icon: 'ph-star', color: 'text-blue-400' },
              { label: 'Identity & Branding', icon: 'ph-triangle', color: 'text-purple-400' },
              { label: 'Illustration', icon: 'ph-star-four', color: 'text-yellow-400' },
              { label: 'Web Development', icon: 'ph-heart', color: 'text-red-400' },
              { label: 'Shopify Integration', icon: 'ph-sun-dim', color: 'text-indigo-400' },
              { label: 'Digital Solutions', icon: 'ph-lightning', color: 'text-green-400' },
            ].map((cap, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0 }
                }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: '#ffffff',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
                  borderColor: '#111111'
                }}
                className="bg-transparent border border-black/10 rounded-full px-8 py-4 flex items-center gap-3 transition-all duration-300 interactive cursor-default group"
              >
                <i className={`ph ${cap.icon} text-xl ${cap.color} group-hover:scale-125 transition-transform`}></i>
                <span className="font-medium text-lg text-text-primary">{cap.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* My Experience Section (Timeline) */}
        <section className="mt-32 pt-20 border-t border-black/10">
          <div className="text-center mb-20">
             <span className="text-sm font-bold uppercase tracking-widest text-black/50">My Experiences</span>
             <h2 className="text-4xl md:text-5xl font-medium mt-4 tracking-tight">
               Professional experience that <br /> defines my approach.
             </h2>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-black/10 hidden md:block"></div>

            <div className="space-y-20 relative">
              {/* Experience 1 - Right Side */}
              <div className="flex flex-col md:flex-row md:justify-end items-center relative">
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-black bg-[#d8ecf8] hidden md:block z-10"></div>
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full md:w-[45%] bg-white border border-black rounded-3xl p-8 md:p-10 shadow-sm relative"
                >
                  <div className="absolute -top-5 left-10 md:left-10 bg-[#d8ecf8] border border-black px-6 py-2 rounded-xl text-sm font-medium">
                    Oct 2025 - Present
                  </div>
                  <h3 className="text-2xl font-medium mt-4">Software Developer Intern</h3>
                  <p className="text-lg font-medium text-black/60 italic mb-6">HolyConnect</p>
                  
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-text-secondary leading-relaxed">
                      <span className="text-xl">↳</span>
                      <p>Lead <span className="text-black font-medium">end-to-end UI/UX design</span> in Figma for core modules including Pandit Booking, Holy Chadava, and Holy Gyan.</p>
                    </li>
                    <li className="flex gap-3 text-text-secondary leading-relaxed">
                      <span className="text-xl">↳</span>
                      <p>Built a <span className="text-black font-medium">cross-platform mobile application</span> using React Native (Expo), translating designs into pixel-perfect components.</p>
                    </li>
                    <li className="flex gap-3 text-text-secondary leading-relaxed">
                      <span className="text-xl">↳</span>
                      <p>Optimized frontend performance through <span className="text-black font-medium">code splitting and component memorization</span>, reducing re-renders.</p>
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Experience 2 - Left Side */}
              <div className="flex flex-col md:flex-row md:justify-start items-center relative">
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-black bg-[#fbeae8] hidden md:block z-10"></div>
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full md:w-[45%] bg-white border border-black rounded-3xl p-8 md:p-10 shadow-sm relative"
                >
                  <div className="absolute -top-5 right-10 md:right-10 bg-[#fbeae8] border border-black px-6 py-2 rounded-xl text-sm font-medium">
                    Sept 2025 – Jan 2026
                  </div>
                  <h3 className="text-2xl font-medium mt-4">UX/Product Designer</h3>
                  <p className="text-lg font-medium text-black/60 italic mb-6">BuyLawBook – Ecommerce Web Application</p>
                  
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-text-secondary leading-relaxed">
                      <span className="text-xl">↳</span>
                      <p>Served as the <span className="text-black font-medium">Lead Design & Frontend Developer</span> for a team of four, responsible for the complete visual identity.</p>
                    </li>
                    <li className="flex gap-3 text-text-secondary leading-relaxed">
                      <span className="text-xl">↳</span>
                      <p>Designed and developed the responsive frontend using <span className="text-black font-medium">Next.js and Material-UI (MUI)</span>, implementing advanced search features.</p>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* My Approach Section (Stacking Cards) */}
        <section className="mt-40 pt-20 border-t border-black/10 bg-white -mx-5 px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
            
            {/* Left side: Sticky Title */}
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <h2 className="text-5xl md:text-6xl font-medium mb-8 leading-tight tracking-tight">
                High-quality work with <br /> real value considered.
              </h2>
              <p className="text-xl text-text-secondary mb-10 leading-relaxed max-w-lg">
                My working process revolves around an approach aimed at maximizing productivity and creativity with clarity and focus. It begins with thorough research and planning.
              </p>
              <button className="bg-white border border-black px-10 py-4 rounded-xl font-medium hover:bg-black hover:text-white transition-all shadow-sm">
                Learn More
              </button>
            </div>

            {/* Right side: Stacking Cards */}
            <div className="flex flex-col gap-10">
              {[
                { 
                  id: '01', 
                  title: 'User-Centered Design (UCD)', 
                  desc: 'I focus on understanding user needs, behaviors, and pain points before starting the design process. This helps me create solutions that are intuitive and useful.',
                  icon: 'ph-users',
                  color: 'bg-[#fbeae8]' 
                },
                { 
                  id: '02', 
                  title: 'Design Thinking', 
                  desc: 'I follow a structured approach that includes empathizing with users, defining problems, ideating solutions, prototyping, and testing.',
                  icon: 'ph-lightbulb',
                  color: 'bg-[#d1efe0]' 
                },
                { 
                  id: '03', 
                  title: 'Lean UX', 
                  desc: 'I prefer working in a fast and iterative manner by creating quick prototypes and testing them early. This helps in gathering feedback quickly.',
                  icon: 'ph-rocket-launch',
                  color: 'bg-[#e0dafb]' 
                },
                { 
                  id: '04', 
                  title: 'Data-Driven Design', 
                  desc: 'I make design decisions based on user feedback, analytics, and testing results. This approach reduces assumptions and improves effectiveness.',
                  icon: 'ph-chart-line-up',
                  color: 'bg-[#d8ecf8]' 
                },
                { 
                  id: '05', 
                  title: 'Goal-Oriented Design', 
                  desc: 'I design interfaces based on the user’s primary goals and tasks. The aim is to make the experience simple, efficient, and easy to navigate.',
                  icon: 'ph-target',
                  color: 'bg-[#fbe29f]' 
                },
                { 
                  id: '06', 
                  title: 'Iterative Design', 
                  desc: 'I believe design is an ongoing process that improves over time. I continuously refine designs based on feedback and usability testing.',
                  icon: 'ph-arrows-counter-clockwise',
                  color: 'bg-[#fbeae8]' 
                },
                { 
                  id: '07', 
                  title: 'Emotional Design', 
                  desc: 'I focus on creating visually engaging and meaningful experiences for users. Using colors and typography helps build a strong connection.',
                  icon: 'ph-heart-straight',
                  color: 'bg-[#d1efe0]' 
                },
                { 
                  id: '08', 
                  title: 'Responsive & Accessible', 
                  desc: 'I ensure that designs work well across different devices and screen sizes. I also consider accessibility to make products usable for everyone.',
                  icon: 'ph-devices',
                  color: 'bg-[#e0dafb]' 
                }
              ].map((approach, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`sticky top-32 w-full p-10 md:p-14 border border-black rounded-[2.5rem] ${approach.color} flex flex-col gap-6 shadow-sm`}
                  style={{ top: `${index * 20 + 128}px` }}
                >
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 bg-white border border-black rounded-full flex items-center justify-center">
                      <i className={`ph ${approach.icon} text-3xl`}></i>
                    </div>
                    <span className="text-lg font-medium text-black/50">({approach.id})</span>
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="text-3xl font-medium mb-4">{approach.title}</h3>
                    <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-light">
                      {approach.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
              {/* Spacer to allow the last card to scroll up */}
              <div className="h-20"></div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
