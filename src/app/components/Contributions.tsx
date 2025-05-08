import React from 'react';
import GitHubCalendar from 'react-github-calendar';

interface contributionsProps {
  darkMode: boolean;
}

const Contributions = ({ darkMode }: contributionsProps) => {
  return (
    <section className="mt-28">
      <h2 className="mb-6 text-center text-3xl font-bold tracking-tighter text-gray-900 sm:text-5xl dark:text-gray-100">
        Always Tinkering 👩🏻‍💻
      </h2>

      <GitHubCalendar
        username="amberyufangchiu"
        colorScheme={darkMode ? 'dark' : 'light'}
        hideMonthLabels={true}
        hideColorLegend={true}
        hideTotalCount={true}
      />
    </section>
  );
};

export default Contributions;
