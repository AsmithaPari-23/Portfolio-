import { motion } from 'framer-motion';

export default function SkillsSection() {
  const categories = [
    {
      title: "Frontend Engineering",
      desc: "Architecting interactive client interfaces with fine-tuned performance.",
      techs: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Responsive Layouts"]
    },
    {
      title: "Backend Architectures",
      desc: "Structuring RESTful microservices, session authentication, and controller routing.",
      techs: ["Node.js", "Express.js", "REST APIs", "JWT Security", "Middleware Logic"]
    },
    {
      title: "Database Systems",
      desc: "Designing schemas and conducting data aggregation for web logs.",
      techs: ["MongoDB", "SQL"]
    },
    {
      title: "Tools & Deployments",
      desc: "Version control practices and continuous dev workflows.",
      techs: ["GitHub", "Vite", "Redux Toolkit", "VS Code", "Vercel"]
    }
  ];

  const skillMetrics = [
    { name: "Frontend Development", percentage: 95 },
    { name: "Backend Development", percentage: 90 },
    { name: "Database Management", percentage: 85 },
    { name: "UI Design & Editorial Layouts", percentage: 80 },
    { name: "Algorithms & Problem Solving", percentage: 85 }
  ];

  return (
    <section id="skills" className="py-20 border-b border-portfolio-border px-6 md:px-12 bg-portfolio-sec">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-portfolio-border pb-6">
          <div className="flex items-center gap-3">
            <span className="font-space text-sm text-portfolio-accent">04 //</span>
            <h2 className="text-3xl font-extrabold tracking-tight uppercase text-portfolio-primary font-sora">
              Capabilities
            </h2>
          </div>
          <span className="font-space text-xs text-portfolio-secondary uppercase tracking-widest">
            TECHNICAL MATRIX & COMPETENCE CHART
          </span>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Categorized Details */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="font-space text-xs text-portfolio-accent uppercase tracking-wider">
              // INDEX OF COMPETENCY
            </h3>
            
            <div className="space-y-6">
              {categories.map((cat, idx) => (
                <div 
                  key={cat.title} 
                  className="border border-portfolio-border p-6 bg-portfolio-card hover:border-portfolio-accent/30 transition-colors duration-300"
                >
                  <div className="flex justify-between items-baseline gap-4 mb-2">
                    <h4 className="text-lg font-bold text-portfolio-primary font-sora">
                      {cat.title}
                    </h4>
                    <span className="font-space text-xs text-portfolio-accent">0{idx + 1}</span>
                  </div>
                  
                  <p className="text-portfolio-secondary text-xs leading-relaxed mb-4">
                    {cat.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-portfolio-border/40">
                    {cat.techs.map((tech) => (
                      <span 
                        key={tech} 
                        className="font-space text-[10px] uppercase text-portfolio-primary px-2.5 py-1 bg-portfolio-bg border border-portfolio-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Skill Bars */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <h3 className="font-space text-xs text-portfolio-accent uppercase tracking-wider">
              // METRIC SCALES
            </h3>

            <div className="border border-portfolio-border p-6 bg-portfolio-card space-y-8">
              {skillMetrics.map((skill) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex justify-between items-baseline text-xs font-space tracking-wider uppercase">
                    <span className="text-portfolio-primary">{skill.name}</span>
                    <span className="text-portfolio-accent font-bold">[{skill.percentage}%]</span>
                  </div>

                  {/* Elegant Thin Gold Accent Progress Bar */}
                  <div className="h-[2px] w-full bg-portfolio-border overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-portfolio-accent"
                    />
                  </div>
                </div>
              ))}

              {/* Technical Note at bottom of card */}
              <div className="pt-4 border-t border-portfolio-border/40 font-space text-[9px] tracking-wider text-portfolio-secondary uppercase leading-relaxed">
                Aggregated metrics calibrated based on academic assessments, project volume delivery, and structural complexity analysis.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
