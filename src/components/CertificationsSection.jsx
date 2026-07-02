import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

export default function CertificationsSection() {
  const certifications = [
    {
      title: "Web Development Bootcamp",
      authority: "Udemy Academy",
      year: "2026",
      skills: "Full-stack HTML, CSS, JavaScript, Node.js, Express, databases, deployment and design patterns",
      credentialUrl: "https://drive.google.com/file/d/13Jb7hZgtUwYrSjiARyN-5fenrSNMyorx/view?usp=drivesdk"
    },
    {
      title: "Software Engineering Virtual Experience (Forage)",
      authority: "JP Morgan Chase & Co.",
      year: "2026",
      skills: "Financial data visualization, perspective tools, system debugging, and software engineering pipeline workflows",
      credentialUrl: "https://drive.google.com/file/d/1qsl3EIXeP6_ZuNvyBATLwuWY_tVZ6oZC/view?usp=sharing"
    }
  ];

  return (
    <section id="certifications" className="py-20 border-b border-portfolio-border px-6 md:px-12 bg-portfolio-sec">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-portfolio-border pb-6">
          <div className="flex items-center gap-3">
            <span className="font-space text-sm text-portfolio-accent">06 //</span>
            <h2 className="text-3xl font-extrabold tracking-tight uppercase text-portfolio-primary font-sora">
              Credentials
            </h2>
          </div>
          <span className="font-space text-xs text-portfolio-secondary uppercase tracking-widest">
            LICENSES, HONORS & SPECIAL CERTIFICATES
          </span>
        </div>

        {/* Tabular Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="border border-portfolio-border p-6 bg-portfolio-card hover:border-portfolio-accent/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-portfolio-primary font-sora tracking-tight leading-snug">
                      {cert.title}
                    </h3>
                    <span className="font-space text-[10px] tracking-wider text-portfolio-accent uppercase block">
                      {cert.authority}
                    </span>
                  </div>
                  
                  <span className="font-space text-xs font-bold text-portfolio-secondary">
                    {cert.year}
                  </span>
                </div>

                <div className="border-t border-portfolio-border/40 pt-3">
                  <span className="font-space text-[9px] text-portfolio-secondary uppercase block mb-1">
                    Core Skills Covered:
                  </span>
                  <p className="text-xs text-portfolio-secondary font-manrope leading-relaxed">
                    {cert.skills}
                  </p>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-space text-[10px] tracking-wider text-portfolio-primary hover:text-portfolio-accent transition-colors flex items-center gap-1 uppercase"
                >
                  Verify License <FiArrowUpRight size={12} className="text-portfolio-accent" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
