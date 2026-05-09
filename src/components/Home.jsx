import React from 'react';
import Hero from './Hero';
import QuickLinks from './QuickLinks';
import Quotes from './Quotes';
import { motion } from 'framer-motion';

const Home = () => {
  const achievements = [
    {
      id: '01',
      tag: 'OPEN SOURCE',
      title: 'GSOOC 2025 Contributor',
      description: 'Participated in GSOOC 2025 as an Open Source Contributor and successfully contributed to 18 projects across multiple repositories.',
      color: 'bg-[#e0dafb]',
      icon: 'ph-laptop'
    },
    {
      id: '02',
      tag: 'HACKATHON',
      title: 'SIH Internal Round',
      description: 'Participated in Smart India Hackathon (SIH) Internal Round and designed a fully functional Civic Issue Reporting App with features for reporting and tracking.',
      color: 'bg-[#fbe29f]',
      icon: 'ph-app-window'
    }
  ];

  return (
    <>
      <Hero />
      
      {/* Animated Text Divider */}
      <div className="bg-text-primary py-10 overflow-hidden whitespace-nowrap border-y border-text-primary">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-block text-white text-4xl md:text-6xl font-medium"
        >
          UI/UX DESIGN • BRANDING • MOTION GRAPHICS • WEB DEVELOPMENT • PRODUCT DESIGN • 
          UI/UX DESIGN • BRANDING • MOTION GRAPHICS • WEB DEVELOPMENT • PRODUCT DESIGN • 
        </motion.div>
      </div>

      <QuickLinks />

      {/* Achievements Section */}
      <section className="section-padding bg-white relative">
        <div className="container mx-auto px-5">
           <header className="flex flex-col md:flex-row md:items-center gap-4 mb-16">
              <h2 className="text-5xl md:text-6xl font-medium tracking-tight">Achievements</h2>
              <div className="bg-accent-yellow border border-black rounded-full px-6 py-2 text-sm font-bold rotate-6 w-fit">
                 SUCCESSES
              </div>
           </header>

           <div className="flex flex-col gap-8">
              {achievements.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col lg:flex-row gap-6 h-full"
                >
                  {/* Left Icon Card */}
                  <div className={`lg:w-1/3 ${item.color} border border-black rounded-card p-10 flex items-center justify-center min-h-[250px]`}>
                    <div className="bg-white border border-black rounded-3xl p-8 shadow-sm">
                      <i className={`ph ${item.icon} text-6xl`}></i>
                    </div>
                  </div>

                  {/* Right Content Card */}
                  <div className={`lg:w-2/3 ${item.color} border border-black rounded-card p-10 md:p-14 relative flex flex-col justify-center`}>
                    <div className="flex justify-between items-start mb-6">
                      <span className="bg-white border border-black rounded-full px-4 py-1 text-xs font-bold tracking-widest uppercase">
                        {item.tag}
                      </span>
                      <div className="w-14 h-14 bg-white border border-black rounded-full flex items-center justify-center text-lg font-medium shadow-sm">
                        {item.id}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-medium mb-6">{item.title}</h3>
                    <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      <Quotes />
    </>
  );
};

export default Home;
