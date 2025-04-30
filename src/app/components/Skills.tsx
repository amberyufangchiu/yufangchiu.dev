import React from "react";

const Skills = () => {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {[
          "React",
          "TypeScript",
          "Node.js",
          "JavaScript",
          "Git",
          "React Query",
          "Tailwind CSS",
          "Redux",
          "Next.js",
          "Recharts",
          "Cypress",
          "Webpack",
          "Nginx",
          "SaaS",
          "react-i18next",
          "Puppeteer",
          "RESTful APIs",
          "Cross-Browser Development",
        ].map((skill) => (
          <span
            key={skill}
            className="bg-black dark:bg-gray-100 text-white dark:text-black inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
