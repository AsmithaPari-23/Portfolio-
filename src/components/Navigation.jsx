import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import resumePdf from '../assets/resume/resume.pdf';

const navItems = [
  { id: 'hero', label: 'Cover', number: '01' },
  { id: 'about', label: 'Biography', number: '02' },
  { id: 'projects', label: 'Projects', number: '03' },
  { id: 'skills', label: 'Capabilities', number: '04' },
  { id: 'experience', label: 'Chronicle', number: '05' },
  { id: 'certifications', label: 'Credentials', number: '06' },
  { id: 'github-leetcode', label: 'Contributions', number: '07' },
  { id: 'contact', label: 'Colophon', number: '08' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set nav background opacity
      setHasScrolled(window.scrollY > 50);

      // Determine active section
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;
      
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 border-b border-portfolio-border ${
        hasScrolled ? 'bg-[#0C0C0D]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Name */}
          <button 
            onClick={() => handleNavClick('hero')}
            className="text-lg font-sora font-bold tracking-widest text-portfolio-primary flex items-center gap-1 group"
          >
            <span>ASMITHA P.</span>
            <span className="text-portfolio-accent font-space text-[10px] select-none">// MERN</span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 font-space text-[11px] tracking-wider uppercase transition-colors duration-300 ${
                  activeSection === item.id 
                    ? 'text-portfolio-accent font-semibold' 
                    : 'text-portfolio-secondary hover:text-portfolio-primary'
                }`}
              >
                <span className="mr-1 text-[9px] text-portfolio-accent opacity-50 font-normal">{item.number}</span>
                {item.label}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-portfolio-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Action Button - Resume */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={resumePdf}
              download="Asmitha_Resume.pdf"
              className="font-space text-[11px] tracking-wider uppercase border border-portfolio-border hover:border-portfolio-accent px-4 py-2 text-portfolio-primary hover:text-portfolio-accent transition-all duration-300 flex items-center gap-1.5"
            >
              Resume <FiArrowUpRight size={14} className="text-portfolio-accent" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-portfolio-primary hover:text-portfolio-accent transition-colors duration-300"
            aria-label="Open Navigation Directory"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Editorial Index Menu) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0C0C0D] z-50 flex flex-col justify-between p-6 md:p-12 font-sora"
          >
            {/* Header in Mobile Menu */}
            <div className="flex items-center justify-between border-b border-portfolio-border pb-6">
              <span className="text-sm font-space tracking-widest text-portfolio-secondary">DIRECTORY INDEX</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-portfolio-primary hover:text-portfolio-accent transition-colors duration-300 border border-portfolio-border rounded-full"
                aria-label="Close Navigation"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col space-y-6 md:space-y-8 my-auto">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-baseline justify-between text-left group animate-fadeIn"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-space text-sm md:text-base text-portfolio-accent">{item.number}</span>
                    <span className="text-3xl md:text-5xl font-bold tracking-tight text-portfolio-primary group-hover:text-portfolio-accent transition-colors duration-300">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex-grow border-b border-dashed border-portfolio-border mx-4 opacity-30"></div>
                  <FiArrowUpRight size={20} className="text-portfolio-secondary group-hover:text-portfolio-accent transition-colors duration-300" />
                </button>
              ))}
            </nav>

            {/* Footer in Mobile Menu */}
            <div className="border-t border-portfolio-border pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 font-space text-xs tracking-wider">
              <a 
                href={resumePdf}
                download="Asmitha_Resume.pdf"
                className="text-portfolio-accent border-b border-portfolio-accent pb-1 w-fit"
              >
                DOWNLOAD RESUME
              </a>
              <span className="text-portfolio-secondary">TAMIL NADU, INDIA // ©2026</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
