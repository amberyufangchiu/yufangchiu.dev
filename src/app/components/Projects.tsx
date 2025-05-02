import Image from 'next/image';
import React from 'react';

const Projects = () => {
  return (
    <section className="my-20">
      <h2 className="mb-6 text-center text-3xl font-bold tracking-tighter text-gray-900 sm:text-5xl dark:text-gray-100">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <a
          href="https://murmur-ecru.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative rounded-2xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
        >
          <Image
            width={300}
            height={300}
            src="/Murmur.png"
            alt="Murmur Project Thumbnail"
            className="mb-4 rounded-xl"
          />
          <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">murmur</h3>
          <p className="text-sm text-gray-500 italic dark:text-gray-400">a white noise app</p>
          <p className="mb-4 max-h-0 overflow-hidden text-gray-700 opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100 dark:text-gray-300">
            A calming web app that lets you mix ambient sounds to create your perfect soundscape — whether you&apos;re
            trying to relax, focus, or drift off to sleep.
          </p>

          <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-700">Next.js</span>
            <span className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-700">React</span>
            <span className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-700">Tailwind CSS</span>
            <span className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-700">Lucide Icons</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
