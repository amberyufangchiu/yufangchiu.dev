"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Contributions from "./components/Contributions";
import Community from "./components/Community";
import IconBar from "./components/IconBar";

export default function Home() {
  return (
    <div className="min-h-screen font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6">
      <Hero />
      <About />
      <WorkExperience />
      <Skills />
      <Contributions />
      <Community />
      <section className="mt-28">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-6 text-gray-900">
          Interested in working together?
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          Want to chat? I want to connect with likeminded individuals!
          <br />
          send me a dm and I&apos;ll gladly respond!
        </p>
      </section>
      <IconBar />
    </div>
  );
}
