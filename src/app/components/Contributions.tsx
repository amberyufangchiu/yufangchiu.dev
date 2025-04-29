import React from "react";
import GitHubCalendar from "react-github-calendar";

const Contributions = () => {
  return (
    <section className="mt-28">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-6 text-gray-900">
        Always Tinkering 👩🏻‍💻
      </h2>

      <GitHubCalendar
        username="amberyufangchiu"
        colorScheme="light"
        hideMonthLabels={true}
        hideColorLegend={true}
      />
    </section>
  );
};

export default Contributions;
