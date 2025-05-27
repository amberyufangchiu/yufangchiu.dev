import Image from 'next/image';
import React from 'react';

const ProjectCard = ({
  href,
  imgSrc,
  title,
  subtitle,
  description,
  tech,
}: {
  href: string;
  imgSrc: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative rounded-2xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
  >
    <Image
      width={300}
      height={300}
      src={imgSrc}
      alt={`${title} Project Thumbnail`}
      className="mb-4 h-[150px] rounded-xl"
    />
    <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">{title}</h3>
    <p className="text-sm text-gray-500 italic dark:text-gray-400">{subtitle}</p>
    <p className="mb-4 max-h-0 overflow-hidden text-gray-700 opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100 dark:text-gray-300">
      {description}
    </p>
    <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400">
      {tech.map((item) => (
        <span key={item} className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-700">
          {item}
        </span>
      ))}
    </div>
  </a>
);

const Projects = () => {
  return (
    <section className="my-20">
      <h2 className="mb-6 text-center text-3xl font-bold tracking-tighter text-gray-900 sm:text-5xl dark:text-gray-100">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ProjectCard
          href="https://murmur-ecru.vercel.app/"
          imgSrc="/projects/Murmur.png"
          title="murmur"
          subtitle="a white noise app"
          description="A calming web app that lets you mix ambient sounds to create your perfect soundscape — whether you're trying to relax, focus, or drift off to sleep."
          tech={['Next.js', 'React', 'Tailwind CSS', 'Lucide Icons']}
        />

        <ProjectCard
          href="https://dive-deep-into-z-index.vercel.app"
          imgSrc="/projects/zindex.png"
          title="Dive Deep into Z-Index"
          subtitle="an interactive CSS demo"
          description="An educational demo that visually explains how CSS z-index works through layered examples, perfect for beginners and visual learners."
          tech={['HTML', 'CSS']}
        />
      </div>
    </section>
  );
};

export default Projects;
