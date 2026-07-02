import { useState } from 'react';
import { FiMail, FiLinkedin, FiGithub, FiArrowRight } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactLinks = [
    { name: "Direct Email", value: "asmithap23@gmail.com", url: "mailto:asmithap23@gmail.com", icon: FiMail },
    { name: "LinkedIn Network", value: "linkedin.com/in/asmitha-pari", url: "https://www.linkedin.com/in/asmitha-pari", icon: FiLinkedin },
    { name: "GitHub Archives", value: "github.com/AsmithaPari-23", url: "https://github.com/AsmithaPari-23", icon: FiGithub },
    { name: "LeetCode Solutions", value: "leetcode.com/u/Asmithapari", url: "https://leetcode.com/u/Asmithapari/", icon: SiLeetcode }
  ];

  return (
    <section id="contact" className="py-20 border-b border-portfolio-border px-6 md:px-12 bg-portfolio-sec">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-portfolio-border pb-6">
          <div className="flex items-center gap-3">
            <span className="font-space text-sm text-portfolio-accent">08 //</span>
            <h2 className="text-3xl font-extrabold tracking-tight uppercase text-portfolio-primary font-sora">
              Colophon
            </h2>
          </div>
          <span className="font-space text-xs text-portfolio-secondary uppercase tracking-widest">
            COMMUNICATIONS & DIRECTORY INDEX
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Social Directories */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-space text-xs text-portfolio-accent uppercase tracking-wider">
                // SYSTEM CONTACTS
              </h3>
              <p className="text-portfolio-secondary text-sm leading-relaxed max-w-sm">
                If you have software opportunities, projects, or questions regarding my logic structure, feel free to transmit a query or connect directly via social networks.
              </p>
            </div>

            {/* Social List */}
            <div className="space-y-4 border-t border-portfolio-border/40 pt-6">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-between items-center py-3 border-b border-portfolio-border/40 group hover:border-portfolio-accent/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="text-portfolio-secondary group-hover:text-portfolio-accent transition-colors" />
                      <span className="font-sora text-xs font-bold text-portfolio-primary group-hover:text-portfolio-accent transition-colors">
                        {link.name}
                      </span>
                    </div>
                    <span className="font-space text-xs text-portfolio-secondary hover:text-portfolio-primary transition-colors underline decoration-portfolio-border group-hover:decoration-portfolio-accent underline-offset-4">
                      {link.value}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact Query Form */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="font-space text-xs text-portfolio-accent uppercase tracking-wider">
              // TRANSMIT AN ENQUIRY
            </h3>

            <form onSubmit={handleSubmit} className="border border-portfolio-border p-6 md:p-8 bg-portfolio-card space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="font-space text-[10px] text-portfolio-secondary uppercase tracking-widest block">
                    Your Designation / Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                    className="w-full bg-portfolio-bg border border-portfolio-border focus:border-portfolio-accent px-4 py-3 text-xs text-portfolio-primary placeholder:text-portfolio-secondary/40 outline-none transition-all duration-300 font-manrope"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="font-space text-[10px] text-portfolio-secondary uppercase tracking-widest block">
                    Your Contact Address (Email)
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full bg-portfolio-bg border border-portfolio-border focus:border-portfolio-accent px-4 py-3 text-xs text-portfolio-primary placeholder:text-portfolio-secondary/40 outline-none transition-all duration-300 font-manrope"
                  />
                </div>

              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="font-space text-[10px] text-portfolio-secondary uppercase tracking-widest block">
                  Enquiry Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, timeline, or requirements..."
                  className="w-full bg-portfolio-bg border border-portfolio-border focus:border-portfolio-accent px-4 py-3 text-xs text-portfolio-primary placeholder:text-portfolio-secondary/40 outline-none transition-all duration-300 resize-none font-manrope"
                />
              </div>

              {/* Status Message */}
              {submitStatus === 'success' && (
                <div className="font-space text-[10px] text-[#4ADE80] uppercase tracking-wider">
                  // TRANSMISSION SUCCESSFUL. YOUR QUERY HAS BEEN DISPATCHED.
                </div>
              )}

              {/* Submit */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 border border-portfolio-accent bg-portfolio-accent text-[#0C0C0D] hover:bg-transparent hover:text-portfolio-accent px-8 py-3.5 font-space text-xs tracking-wider uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "TRANSMITTING..." : "DISPATCH INQUIRY"} <FiArrowRight />
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
