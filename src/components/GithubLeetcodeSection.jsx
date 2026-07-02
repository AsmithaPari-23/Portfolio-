import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { GithubData } from '../data/github';
import githubImg from '../assets/github/github-activity.png';

export default function GithubLeetcodeSection() {
  const leetcodeUrl = "https://leetcode.com/u/Asmithapari/";
  const githubUrl = `https://github.com/${GithubData.username}`;

  return (
    <section id="github-leetcode" className="py-20 border-b border-portfolio-border px-6 md:px-12 bg-portfolio-bg">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-portfolio-border pb-6">
          <div className="flex items-center gap-3">
            <span className="font-space text-sm text-portfolio-accent">07 //</span>
            <h2 className="text-3xl font-extrabold tracking-tight uppercase text-portfolio-primary font-sora">
              Contributions
            </h2>
          </div>
          <span className="font-space text-xs text-portfolio-secondary uppercase tracking-widest">
            GITHUB SYNDICATION & ALGORITHMIC METRICS
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contributions Activity Graph */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-space text-xs text-portfolio-accent uppercase tracking-wider">
              // REPOSITORY ACTIVITY LOG
            </h3>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border border-portfolio-border p-4 bg-portfolio-sec flex flex-col items-center justify-center overflow-x-auto"
            >
              <div className="w-full relative flex items-center justify-center min-h-[180px]">
                {/* Image overlay to blend with portfolio colors */}
                <img 
                  src={githubImg} 
                  alt="Github Contribution Activity" 
                  className="max-w-full h-auto rounded-sm invert grayscale contrast-[130%] opacity-85 select-none"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="w-full text-right pt-4 border-t border-portfolio-border/40 mt-4 font-space text-[9px] text-portfolio-secondary uppercase tracking-widest">
                CONTRIBUTIONS JOURNALED ON GITHUB MATRIX // LIVE REPO SYNC
              </div>
            </motion.div>
          </div>

          {/* Right Column: Code Metrics & Platforms */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="font-space text-xs text-portfolio-accent uppercase tracking-wider">
              // PROFILE LOGICS
            </h3>

            {/* GitHub Card */}
            <div className="border border-portfolio-border p-6 bg-portfolio-card space-y-6">
              <div className="flex items-center gap-3 border-b border-portfolio-border/40 pb-4">
                <FiGithub className="text-portfolio-accent text-lg" />
                <span className="font-sora text-sm font-bold text-portfolio-primary uppercase">
                  GITHUB SPECIFICATION
                </span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 font-space">
                <div>
                  <span className="text-[10px] text-portfolio-secondary uppercase block tracking-wider">REPOSITORIES</span>
                  <span className="text-3xl font-extrabold text-portfolio-primary mt-1 block">
                    {GithubData.repositories}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-portfolio-secondary uppercase block tracking-wider">TOTAL COMMITS</span>
                  <span className="text-3xl font-extrabold text-portfolio-accent mt-1 block">
                    {GithubData.commits}
                  </span>
                </div>
              </div>

              {/* Languages */}
              <div className="pt-2 border-t border-portfolio-border/40">
                <span className="font-space text-[9px] text-portfolio-secondary uppercase block mb-3">TOP LANGUAGES SYSTEM</span>
                <div className="flex flex-wrap gap-2">
                  {GithubData.topLanguages.map((lang) => (
                    <span 
                      key={lang} 
                      className="font-space text-[10px] uppercase text-portfolio-primary px-3 py-1 bg-portfolio-bg border border-portfolio-border"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visit button */}
              <div className="pt-4">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 border border-portfolio-border hover:border-portfolio-accent py-2.5 px-4 text-xs font-space tracking-wider uppercase text-portfolio-primary hover:text-portfolio-accent transition-all duration-300"
                >
                  Visit Developer Profile <FiExternalLink size={12} className="text-portfolio-accent" />
                </a>
              </div>
            </div>

            {/* LeetCode Card */}
            <div className="border border-portfolio-border p-6 bg-portfolio-card space-y-6">
              <div className="flex items-center gap-3 border-b border-portfolio-border/40 pb-4">
                <SiLeetcode className="text-portfolio-accent text-lg" />
                <span className="font-sora text-sm font-bold text-portfolio-primary uppercase">
                  ALGORITHMIC CODING (LEETCODE)
                </span>
              </div>

              <div className="font-manrope text-xs text-portfolio-secondary leading-relaxed">
                Actively solving computational puzzles regarding arrays, hash-maps, sorting, algorithms, and logical structures to expand run-time execution skills.
              </div>

              <div className="flex justify-between items-center py-2 border-y border-portfolio-border/40 font-space text-xs">
                <span className="text-portfolio-secondary">PROBLEMS RESOLVED</span>
                <span className="text-portfolio-primary font-bold">150+ SOLVED</span>
              </div>

              <div className="pt-2">
                <a
                  href={leetcodeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 border border-portfolio-border hover:border-portfolio-accent py-2.5 px-4 text-xs font-space tracking-wider uppercase text-portfolio-primary hover:text-portfolio-accent transition-all duration-300"
                >
                  Visit LeetCode <FiExternalLink size={12} className="text-portfolio-accent" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
