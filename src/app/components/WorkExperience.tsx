import React from 'react';
import JobEntry from './JobEntry';

const WorkExperience = () => {
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">Work Experience</h2>
      <div className="space-y-8">
        <JobEntry
          company="Red Soldier Limited"
          tagline="Modern CMS Development"
          role="Software Engineer"
          date="Dec 2023 - Present"
          details={[
            'Led the development of responsive and interactive Content Management Systems (CMS) using React and TypeScript, ensuring a seamless user experience across platforms.',
            'Collaborated with back-end developers to integrate front-end components with server-side logic, spearheading efforts to optimize application speed and scalability.',
            'Implemented and consumed RESTful APIs, overseeing the process to ensure high performance and adherence to best practices.',
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
            'Developed and maintained a high-traffic sports betting platform serving 100,000+ active users across Asia, using React to deliver responsive, user-friendly interfaces.',
            'Introduced micro front-end architecture with Webpack, resolving early-stage UX issues and improving scalability across multiple product modules.',
            'Built robust end-to-end tests with Cypress and TypeScript, achieving 90%+ test coverage and supporting reliable, high-quality software releases.',
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
            'Built and launched the LnCarbon ESG platform using React, Redux, Recharts, and Nginx, enabling real-time emissions tracking and faster client onboarding through flexible data integration and visualization.',
            'Built a scalable low-code SaaS data monitoring platform, empowering non-technical users to configure custom pipelines and alerts with minimal engineering support.',
            'Developed and maintained the company website using Next.js, React, and react-i18next, delivering a fast, SEO-friendly, multilingual experience aligned with global branding goals.',
          ]}
          imageUrl="/LnData Logo.jpeg"
        />
      </div>
    </section>
  );
};

export default WorkExperience;
