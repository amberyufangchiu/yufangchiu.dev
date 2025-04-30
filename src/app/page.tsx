"use client";

import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Contributions from "./components/Contributions";
import Community from "./components/Community";
import IconBar from "./components/IconBar";
import Contact from "./components/Contact";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6">
      <Hero />
      <About />
      <WorkExperience />
      <Skills />
      <Contributions darkMode={darkMode} />
      <Community />
      <Contact />
      <IconBar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
