'use client';

import { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Contributions from './components/Contributions';
import Community from './components/Community';
import IconBar from './components/IconBar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import confetti from 'canvas-confetti';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const myConfetti = confetti.create(canvasRef.current, {
      resize: true,
      useWorker: true,
    });

    const handleDownloadCV = () => {
      let counter = 0;
      const settings = {
        particleCount: 75,
        spread: 90,
        colors: ['#B93E36', '#f4f5f0', '#1a201c'],
        startVelocity: 75,
      };

      const frame = () => {
        myConfetti({ ...settings, angle: 45, origin: { x: 0, y: 1 } });
        myConfetti({ ...settings, angle: 135, origin: { x: 1, y: 1 } });
        counter++;
        if (counter < 10) setTimeout(frame, 60);
      };
      frame();
    };

    window.addEventListener('download-cv', handleDownloadCV);

    return () => {
      window.removeEventListener('download-cv', handleDownloadCV);
    };
  }, []);

  return (
    <div>
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
      <canvas ref={canvasRef} className="pointer-events-none fixed top-0 left-0 h-screen w-screen" />
    </div>
  );
}
