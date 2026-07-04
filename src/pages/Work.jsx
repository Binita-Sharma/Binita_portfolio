import React from 'react';
import { motion } from 'framer-motion';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: 'SaathiConnect',
      date: 'OCT 29, 2025',
      description: 'Bridging the gap between citizens and local authorities for reporting civic issues.',
      image: '/images/saathiconnect.png',
      link: 'https://play.google.com/store/apps/details?id=app.saathiconnect',
    },
    {
      id: 2,
      title: 'BuyLawBook',
      date: 'FEB 4, 2026',
      description: "From 'I want new e-commerce website for my law firm' to 'BuyLawBook' - a seamless journey of design and development.",
      image: '/images/BuyLawBook.png',
      link: 'https://www.figma.com/design/ninSzSBReDYOHozW36W49g/bookstore?node-id=0-1&t=e9QOmosykmdilRv8-1',
    },
    {
      id: 4,
      title: 'Hindustan petroleum',
      date: 'JUL 10, 2025',
      description: 'hindustan petroleum project.',
      image: '/images/hp.png',
      link: 'https://www.figma.com/design/eNjxYDSfQ9sxqHwxfGojbh/hpcl?node-id=0-1&t=w1M7n5zHr1JBybU0-1', 
    }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white bg-grid">
      <div className="container mx-auto px-5">
        <header className="mb-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-medium tracking-tight mb-6"
          >
            Work
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '60px' }}
            className="h-1 bg-black mx-auto"
          />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer block no-underline text-inherit"
            >
              {/* Card Header with Tab */}
              <div className="relative h-20">
                <div
                  className="absolute bottom-0 left-0 h-full w-[60%] bg-[#efefef] rounded-t-3xl"
                  style={{ clipPath: 'polygon(0 0, 80% 0, 100% 100%, 0 100%)' }}
                >
                  <div className="flex items-center gap-3 h-full pl-10">
                    <div className="w-2 h-2 bg-black rounded-full" />
                    <span className="text-sm font-bold tracking-widest uppercase text-black/60">
                      {project.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body (Image) */}
              <div className="bg-[#efefef] p-6 rounded-b-3xl rounded-tr-3xl border border-transparent group-hover:border-black/10 transition-colors">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-white flex items-center justify-center">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Card Footer (Text) */}
              <div className="mt-8 text-center px-4">
                <h3 className="text-4xl font-medium mb-4 tracking-tight">{project.title}</h3>
                <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-sm mx-auto font-light">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
