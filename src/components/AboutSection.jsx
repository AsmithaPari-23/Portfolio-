import { motion } from 'framer-motion';
import { FiUser, FiMapPin, FiMail, FiBriefcase, FiBookOpen } from 'react-icons/fi';
import profileImg from '../assets/profile/profile.jpg';


export default function AboutSection() {
  const timeline = [
    { year: '2022', title: 'Academics Commenced', description: 'Enrolled in B.Tech Information Technology program, establishing strong foundations in computation.' },
    { year: '2023', title: 'Core Algorithms & Logic', description: 'Explored low-level programming fundamentals, OOPs, data structures, and computer organization.' },
    { year: '2024', title: 'Full Stack Ignition', description: 'Began web development. Mastered HTML, CSS, JavaScript, responsive designs, and core APIs.' },
    { year: '2025', title: 'Advanced MERN Architectures', description: 'Built databases, secure REST APIs with Node/Express, and reactive user interfaces with React.' },
    { year: '2026', title: 'Professional Horizon', description: 'Constructing production-ready client applications and seeking software engineering roles.' },
  ];

  return (
    <section id="about" className="py-20 border-b border-portfolio-border px-6 md:px-12 bg-portfolio-sec">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-portfolio-border pb-6">
          <div className="flex items-center gap-3">
            <span className="font-space text-sm text-portfolio-accent">02 //</span>
            <h2 className="text-3xl font-extrabold tracking-tight uppercase text-portfolio-primary font-sora">
              Biography
            </h2>
          </div>
          <span className="font-space text-xs text-portfolio-secondary uppercase tracking-widest">
            THE CHRONOLOGY & PERSONAL MATRIX
          </span>
        </div>

        {/* Bio Content & Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Portrait Column */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-2 border border-portfolio-border bg-portfolio-card w-full max-w-[320px]"
            >
              {/* Gold Accent Corner lines */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-portfolio-accent"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-portfolio-accent"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-portfolio-accent"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-portfolio-accent"></div>
              
              <div className="overflow-hidden bg-portfolio-bg aspect-[3/4]">
                <img 
                  src={profileImg} 
                  alt="Asmitha P" 
                  className="w-full h-full object-cover object-top transition-all duration-700"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400";
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Biography Text Column */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-portfolio-primary leading-tight font-sora">
              Crafting seamless digital experiences <span className="text-portfolio-accent">with clean code structures.</span>
            </h3>
            
            <p className="text-portfolio-secondary text-sm md:text-base leading-relaxed">
              I am Asmitha P., an IT full-stack engineer. 
              My expertise centers around the MERN (MongoDB, Express.js, React, Node.js) stack, where I architect robust server logic and build high-performance client-side interfaces. 
              I design products with a critical focus on usability, optimization, security, and standards-compliant code.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-portfolio-border pt-6 mt-6 font-space text-xs uppercase tracking-wider text-portfolio-secondary">
              <div className="flex items-center gap-3 py-2 border-b border-portfolio-border">
                <FiUser className="text-portfolio-accent text-sm" />
                <span className="text-portfolio-primary font-medium w-24">NAME:</span>
                <span>Asmitha Pari</span>
              </div>
              <div className="flex items-center gap-3 py-2 border-b border-portfolio-border">
                <FiBriefcase className="text-portfolio-accent text-sm" />
                <span className="text-portfolio-primary font-medium w-24">ROLE:</span>
                <span>MERN Developer</span>
              </div>
              <div className="flex items-center gap-3 py-2 border-b border-portfolio-border">
                <FiBookOpen className="text-portfolio-accent text-sm" />
                <span className="text-portfolio-primary font-medium w-24">DEGREE:</span>
                <span>B.Tech IT</span>
              </div>
              <div className="flex items-center gap-3 py-2 border-b border-portfolio-border">
                <FiBookOpen className="text-portfolio-accent text-sm" />
                <span className="text-portfolio-primary font-medium w-24">BATCH:</span>
                <span>2022 - 2026</span>
              </div>
              <div className="flex items-center gap-3 py-2 border-b border-portfolio-border">
                <FiMapPin className="text-portfolio-accent text-sm" />
                <span className="text-portfolio-primary font-medium w-24">LOCATION:</span>
                <span>Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-3 py-2 border-b border-portfolio-border">
                <FiMail className="text-portfolio-accent text-sm" />
                <span className="text-portfolio-primary font-medium w-24">EMAIL:</span>
                <a href="mailto:asmithap23@gmail.com" className="hover:text-portfolio-accent transition-colors font-sans lowercase tracking-normal">
                  asmithap23@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline (Chronology Grid) */}
        <div className="border-t border-portfolio-border pt-12">
          <h4 className="font-space text-xs text-portfolio-accent uppercase tracking-[0.2em] mb-8">
            // CHRONICLE JOURNAL
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border border-portfolio-border p-5 bg-portfolio-card hover:border-portfolio-accent/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="font-space text-2xl font-bold text-portfolio-accent mb-4 select-none">
                  {item.year}
                </div>
                <div className="space-y-2">
                  <h5 className="text-sm font-bold text-portfolio-primary font-sora tracking-tight">
                    {item.title}
                  </h5>
                  <p className="text-xs text-portfolio-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
