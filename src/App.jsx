import Layout from './components/Layout';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import CertificationsSection from './components/CertificationsSection';
import GithubLeetcodeSection from './components/GithubLeetcodeSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <Layout>
      {/* Editorial Sections */}
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificationsSection />
      <GithubLeetcodeSection />
      <ContactSection />
      
      {/* Colophon Footer */}
      <footer className="py-12 border-t border-portfolio-border bg-[#0C0C0D] text-center font-space text-[10px] md:text-xs tracking-widest text-portfolio-secondary uppercase px-6">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <span>© 2026 Asmitha Pari. All rights reserved.</span>
        </div>
      </footer>
    </Layout>
  );
}

export default App;
