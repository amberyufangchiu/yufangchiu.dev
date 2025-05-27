import React from 'react';
import JobEntry from './JobEntry';

const WorkExperience = () => {
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">Work Experience</h2>
      <div className="space-y-8">
        <JobEntry
          company="Red Soldier Limited"
          tagline="Custom CMS Development"
          role="Software Engineer"
          date="Dec 2023 - Present"
          details={[
            'Led frontend development and delivery of high-impact projects using React and TypeScript, ensuring on-time launches with a focus on performance, accessibility, and user experience',
            'Owned the complete frontend lifecycle of a custom CMS, resolving complex bugs and delivering intuitive, polished user-facing features independently.',
            'Implemented a reusable CMS Seed Template, accelerating future development cycles and establishing scalable, maintainable frontend architecture.',
            'Resolved critical UI/UX and performance issues, achieving at least a 90% reduction in load times and enhancing overall product responsiveness and user satisfaction.',
          ]}
          imageUrl="/Red Soldier Limited Post.jpeg"
        />

        {/* Job 2 */}
        <JobEntry
          company="ONElab Technology Ltd"
          tagline="Sports Betting Platforms"
          role="Software Engineer"
          date="Jun 2023 - Dec 2023"
          details={[
            'Implemented micro front-end architecture in new feature development, and resolved early-stage UX issues to enhance the overall experience across React-based projects using Webpack.',
            'Developed and maintained a high-traffic platform serving over 100,000 active users, leveraging React to deliver fast, interactive, and user-friendly interfaces.',
            'Achieved over 85% test coverage by implementing comprehensive End-to-End (E2E) testing with Cypress and TypeScript, ensuring reliable and high-quality releases.',
          ]}
          imageUrl="/onelab.png"
        />

        {/* Job 3 */}
        <JobEntry
          company="LnData, Inc"
          tagline="Data Monitoring"
          role="Front End Engineer"
          date="Apr 2022 – Jun 2023"
          details={[
            'Owned the development of a data visualization–driven sustainability management platform using React, SCSS, and RESTful APIs, ensuring compliance with government regulations and delivering seamless carbon emissions tracking for an enterprise client',
            'Developed an efficient SaaS platform for a targeted advertising website, leveraging React, Ant Design, and LESS to deliver visually engaging charts and insightful analytics for end users.',
          ]}
          imageUrl="/LnData Logo.jpeg"
        />
      </div>
    </section>
  );
};

export default WorkExperience;
