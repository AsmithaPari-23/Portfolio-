import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-between py-12 md:py-20 border-b border-portfolio-border px-6 md:px-12">
      {/* Magazine Edition Header */}
      <div className="flex justify-between items-center font-space text-[10px] md:text-xs tracking-[0.2em] text-portfolio-secondary uppercase pb-4 border-b border-portfolio-border select-none">
        <span>TAMIL NADU, INDIA</span>
        <span>EDITION 2026</span>
      </div>

      {/* Main Massive Editorial Title */}
      <div className="my-auto py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h1 className="text-6xl sm:text-8xl md:text-[11rem] font-extrabold tracking-tighter leading-[0.8] text-portfolio-primary select-none uppercase font-sora">
            ASMITHA
            <span className="block text-portfolio-accent font-light">PARI.</span>
          </h1>
        </motion.div>

        {/* Big Subtitle banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-portfolio-border"
        >
          <div className="md:border-r border-portfolio-border pr-6">
            <span className="font-space text-xs text-portfolio-accent uppercase block mb-1">DESIGNATION</span>
            <h2 className="text-xl md:text-2xl font-bold font-sora tracking-tight text-portfolio-primary">
              MERN Stack Developer
            </h2>
          </div>
          <div className="md:border-r border-portfolio-border md:px-6">
            <span className="font-space text-xs text-portfolio-accent uppercase block mb-1">FOCUS AREA</span>
            <h2 className="text-xl md:text-2xl font-bold font-sora tracking-tight text-portfolio-primary">
              Scalable Web Architecture
            </h2>
          </div>
          <div className="md:pl-6">
            <span className="font-space text-xs text-portfolio-accent uppercase block mb-1">ACADEMICS</span>
            <h2 className="text-xl md:text-2xl font-bold font-sora tracking-tight text-portfolio-primary">
              B.Tech Information Technology
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Magazine Footer Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-portfolio-border items-end">
        {/* Column 1: Abstract statement */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-4"
        >
          <h3 className="font-space text-xs tracking-wider uppercase text-portfolio-accent">// INTRODUCTION</h3>
          <p className="text-portfolio-secondary font-manrope text-sm leading-relaxed max-w-sm">
            Full-Stack Developer specializing in building high-performance web applications. 
            Blending technical rigor with clean visual hierarchy to develop secure, functional, and user-centric web products.
          </p>
        </motion.div>

        {/* Column 2: Space Grotesk statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-2 gap-4 border-y md:border-y-0 md:border-x border-portfolio-border py-6 md:py-0 md:px-8 font-space"
        >
          <div>
            <div className="text-3xl font-bold text-portfolio-primary tracking-tight">02+</div>
            <div className="text-[10px] text-portfolio-secondary uppercase tracking-widest mt-1">COMPLETED PROJECTS</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-portfolio-primary tracking-tight">25+</div>
            <div className="text-[10px] text-portfolio-secondary uppercase tracking-widest mt-1">GIT COMMITS</div>
          </div>
        </motion.div>

        {/* Column 3: Quick editorial actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-end h-full"
        >
          <button
            onClick={handleScrollToProjects}
            className="flex items-center justify-center gap-2 border border-portfolio-accent bg-portfolio-accent text-[#0C0C0D] hover:bg-transparent hover:text-portfolio-accent px-6 py-3 font-space text-xs tracking-wider uppercase transition-all duration-300"
          >
            Projects <FiArrowRight />
          </button>
          
          <button
            onClick={handleScrollToContact}
            className="flex items-center justify-center gap-2 border border-portfolio-border hover:border-portfolio-accent px-6 py-3 text-portfolio-primary hover:text-portfolio-accent font-space text-xs tracking-wider uppercase transition-all duration-300"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
