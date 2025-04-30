import React from "react";
import GitHubCalendar from "react-github-calendar";

interface contributionsProps {
  darkMode: boolean;
}

const Contributions = ({ darkMode }: contributionsProps) => {
  return (
    <section className="mt-28">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-6 text-gray-900 dark:text-gray-100">
        Always Tinkering 👩🏻‍💻
      </h2>

      <GitHubCalendar
        username="amberyufangchiu"
        colorScheme={darkMode ? "dark" : "light"}
        hideMonthLabels={true}
        hideColorLegend={true}
      />
    </section>
  );
};

export default Contributions;
