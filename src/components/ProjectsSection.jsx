import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { projects } from '../data/projects';
import project1Img from '../assets/projects/project1.png';
import project2Img from '../assets/projects/project2.png';

// Map images correctly
const projectImages = {
  1: project1Img, // Real screenshot present for supermarket system
  2: project2Img, // Real screenshot present for faculty system
};

// Detailed descriptions for editorial depth
const projectFullDescriptions = {
  1: "A comprehensive retail checkout application designed to automate store operations. Built on React and Express with MongoDB, it supports product catalog management, transactional ledger storage, and automated billing generation.",
  2: "An academic administration hub that automates faculty advising workflows. Facilitates digital approvals for course changes, attendance monitoring, and direct message flows between mentors and students under high-integrity JWT protection protocols.",
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 border-b border-portfolio-border px-6 md:px-12 bg-portfolio-bg">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-portfolio-border pb-6">
          <div className="flex items-center gap-3">
            <span className="font-space text-sm text-portfolio-accent">03 //</span>
            <h2 className="text-3xl font-extrabold tracking-tight uppercase text-portfolio-primary font-sora">
              Projects
            </h2>
          </div>
          <span className="font-space text-xs text-portfolio-secondary uppercase tracking-widest">
            FEATURED DIGITAL PROJECTS
          </span>
        </div>

        {/* Project Showcase List */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, idx) => {
            const isImageLeft = idx % 2 === 0;
            const fullDesc = projectFullDescriptions[project.id] || project.description;
            const hasImage = projectImages[project.id] !== null;
            const imgSrc = projectImages[project.id];
            
            return (
              <div 
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center border-b border-portfolio-border/40 pb-16 last:border-0"
              >
                
                {/* Visual Showcase Block (Image/Mockup) */}
                <div className={`lg:col-span-7 ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative group border border-portfolio-border p-2 bg-portfolio-sec aspect-[16/10] overflow-hidden flex items-center justify-center"
                  >
                    {/* Corner accent lines */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-portfolio-accent/50 z-20"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-portfolio-accent/50 z-20"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-portfolio-accent/50 z-20"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-portfolio-accent/50 z-20"></div>

                    {hasImage ? (
                      /* Real Image block */
                      <img 
                        src={imgSrc} 
                        alt={project.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 select-none"
                        loading="lazy"
                      />
                    ) : (
                      /* High-end CSS Abstract Magazine Mockup for empty placeholders */
                      <div className="w-full h-full bg-[#141416] flex flex-col justify-between p-6 relative font-space overflow-hidden">
                        {/* Background structural lines */}
                        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-portfolio-border/30"></div>
                        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-portfolio-border/30"></div>
                        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-portfolio-border/30"></div>
                        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-portfolio-border/30"></div>
                        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-portfolio-border/30"></div>
                        
                        <div className="flex justify-between items-start z-10">
                          <span className="text-[10px] tracking-widest text-portfolio-accent uppercase">
                            SYSTEM CLASSIFIED // 0{project.id}
                          </span>
                          <span className="text-[10px] tracking-widest text-portfolio-secondary">
                            DEV_BUILD
                          </span>
                        </div>
                        
                        <div className="my-auto text-left z-10">
                          <div className="text-4xl md:text-5xl font-extrabold text-portfolio-primary tracking-tighter uppercase font-sora opacity-90 leading-none">
                            {project.title.split(' ')[0]}
                            <span className="block text-portfolio-accent font-light">
                              {project.title.split(' ').slice(1).join(' ') || 'SYSTEM'}
                            </span>
                          </div>
                        </div>

                        <div className="flex justify-between items-end z-10 border-t border-portfolio-border/50 pt-4">
                          <div className="flex gap-2">
                            {project.technologies.map((tech) => (
                              <span key={tech} className="text-[8px] border border-portfolio-border px-1.5 py-0.5 text-portfolio-secondary">
                                {tech.toUpperCase()}
                              </span>
                            ))}
                          </div>
                          <span className="text-xs text-portfolio-accent tracking-tighter">
                            // STACK_MERN
                          </span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Information Block */}
                <div className={`lg:col-span-5 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                  <div className="font-space text-xs text-portfolio-accent uppercase tracking-widest flex items-center gap-2">
                    <span>PROJ</span>
                    <span>/</span>
                    <span>0{project.id}</span>
                  </div>

                  <h3 className="text-3xl font-extrabold text-portfolio-primary font-sora tracking-tight leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-portfolio-secondary text-sm leading-relaxed font-manrope">
                    {fullDesc}
                  </p>

                  {/* Tech stack items listed horizontally */}
                  <div className="border-y border-portfolio-border/50 py-4 font-space text-[10px] uppercase tracking-wider text-portfolio-secondary flex flex-wrap gap-x-4 gap-y-1">
                    {project.technologies.map((tech, i) => (
                      <span key={tech} className="flex items-center gap-4">
                        {i > 0 && <span className="text-portfolio-border">•</span>}
                        <span className="text-portfolio-primary font-medium">{tech}</span>
                      </span>
                    ))}
                  </div>

                  {/* Action Link Elements */}
                  <div className="flex items-center gap-6 pt-2 font-space text-xs uppercase tracking-wider">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-portfolio-primary hover:text-portfolio-accent transition-colors group"
                    >
                      <FiGithub className="text-portfolio-accent" />
                      <span>SOURCE CODE</span>
                      <FiArrowRight className="transform translate-x-0 group-hover:translate-x-1 transition-transform" />
                    </a>

                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-portfolio-secondary hover:text-portfolio-primary transition-colors group"
                      >
                        <FiExternalLink className="text-portfolio-accent" />
                        <span>LIVE PREVIEW</span>
                        <FiArrowRight className="transform translate-x-0 group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
