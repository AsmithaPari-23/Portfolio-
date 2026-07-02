import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "Vizhi XR",
      location: "Madurai, India",
      duration: "APRIL 2026 – JUNE 2026",
      certificateLink: "https://drive.google.com/file/d/1hIcUd8RERvNORvms1dBDTOzR773nf5f2/view?usp=drivesdk",
      highlights: [
        "Developed and enhanced responsive web applications using React.js, Node.js, and MongoDB, improving mobile responsiveness, refining UI, and ensuring a seamless experience across devices.",
        "Implemented and integrated JWT Authentication for secure user access, while debugging, testing, and resolving front-end issues to improve application reliability and performance.",
        "Designed and customized modern portfolio web pages, collaborated on feature enhancements, and contributed to the implementation of scalable full-stack web solutions following industry best practices."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 border-b border-portfolio-border px-6 md:px-12 bg-portfolio-bg">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-portfolio-border pb-6">
          <div className="flex items-center gap-3">
            <span className="font-space text-sm text-portfolio-accent">05 //</span>
            <h2 className="text-3xl font-extrabold tracking-tight uppercase text-portfolio-primary font-sora">
              Chronicle
            </h2>
          </div>
          <span className="font-space text-xs text-portfolio-secondary uppercase tracking-widest">
            WORK EXPERIENCE
          </span>
        </div>

        {/* Experience List Layout */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pb-12 border-b border-portfolio-border/40 last:border-0 last:pb-0"
            >
              {/* Duration / Meta */}
              <div className="lg:col-span-3 space-y-2">
                <span className="font-space text-sm font-bold text-portfolio-accent block">
                  {exp.duration}
                </span>
                <span className="font-space text-[10px] tracking-wider text-portfolio-secondary uppercase block">
                  {exp.location}
                </span>
              </div>

              {/* Title & Description */}
              <div className="lg:col-span-9 space-y-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <h3 className="text-xl font-bold text-portfolio-primary font-sora tracking-tight font-sora">
                      {exp.role}
                    </h3>
                    {exp.certificateLink && (
                      <a
                        href={exp.certificateLink}
                        target="_blank"
                        rel="noreferrer"
                        className="font-space text-[10px] tracking-wider text-portfolio-accent hover:text-portfolio-primary transition-colors flex items-center gap-1 uppercase border border-portfolio-border hover:border-portfolio-accent px-3 py-1 bg-portfolio-card"
                      >
                        Certificate Link <FiArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                  <h4 className="text-xs uppercase tracking-wider text-portfolio-accent font-space">
                    {exp.company}
                  </h4>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 pt-2">
                  {exp.highlights.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex gap-3 text-xs md:text-sm text-portfolio-secondary leading-relaxed items-start font-manrope">
                      <span className="text-portfolio-accent font-space select-none mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
