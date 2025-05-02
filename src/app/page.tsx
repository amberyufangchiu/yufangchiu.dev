'use client';

import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Contributions from './components/Contributions';
import Community from './components/Community';
import IconBar from './components/IconBar';
import Contact from './components/Contact';
import Projects from './components/Projects';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="mx-auto min-h-screen max-w-2xl px-6 py-12 font-sans antialiased sm:py-24">
      <Hero />
      <About />
      <WorkExperience />
      <Skills />
      <Contributions darkMode={darkMode} />
      <Projects />
      <Community />
      <Contact />
      <IconBar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
