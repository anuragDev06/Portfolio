import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ApiConsoleSection } from './components/ApiConsoleSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';

import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Navigation Bar with Live Telemetry */}
      <Navbar />

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Live Server Dashboard Hero */}
        <HeroSection />

        {/* 2. About Me */}
        <AboutSection />

        {/* 3. Interactive 4-Pillar MERN Stack Architecture Grid */}
        <SkillsSection />

        {/* 4. Live REST API Console & Playground */}
        {/* <ApiConsoleSection /> */}

        {/* 5. Featured Projects with Expandable Backend Spec Drawers */}
        <ProjectsSection />

        {/* 6. Fullstack Work Experience Timeline */}
        <ExperienceSection />

        {/* 7. Articles & Tech Writing */}
        {/* <ArticlesSection /> */}

        {/* 8. Live API Contact Simulator */}
        <ContactSection />
      </main>

      {/* Dashboard Footer */}
      <Footer />
    </div>
  );
}

export default App;
