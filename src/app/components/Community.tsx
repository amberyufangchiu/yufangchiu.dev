import Image from "next/image";
import React from "react";

const Community = () => {
  return (
    <section className="mt-28">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-6 text-gray-900 dark:text-gray-100">
        Taking part in the community
      </h2>

      <h1 className="text-xl font-semibold mb-3 text-gray-700 text-center flex items-center justify-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
        </svg>
        <span className="text-primary dark:text-gray-100">
          React Meetup in Montréal, Canada
        </span>
      </h1>

      <p className="text-center text-gray-600 dark:text-gray-100 max-w-2xl mx-auto mb-8 leading-relaxed">
        While living in Montréal, Canada, I had the opportunity to share new
        technologies with the local community at React Montréal. It was an
        incredible experience to connect with fellow developers, exchange ideas,
        and contribute to the growing tech scene.
      </p>
      <div className="flex justify-center gap-4">
        <div className="flex-1 max-w-xs">
          <Image
            src="/MTL-React.jpeg"
            alt="React Montreal"
            className="w-[500px] h-[200px] rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 object-cover"
            width={500}
            height={400}
          />
        </div>
        <div className="flex-1 max-w-xs">
          <Image
            src="/MTL-React-2.jpeg"
            alt="React Montreal"
            className="w-[500px] h-[200px] rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 object-cover"
            width={500}
            height={400}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/q0vYLK3P91w?si=QqVXMbqqv-CxHz_D"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-lg shadow-lg mt-4"
        ></iframe>
      </div>

      <h1 className="mt-20 text-xl font-semibold mb-3 text-gray-700 dark:text-gray-100 text-center flex items-center justify-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
        </svg>
        <span className="text-primary dark:text-gray-100">
          Modern Web Conference in Taipei, Taiwan
        </span>
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-100 max-w-2xl mx-auto mb-8 leading-relaxed">
        I actively participate in tech events to stay inspired and connected
        with the community. I attended the Modern Web Conference in Taipei,
        where I explored the latest advancements in AI, accessibility, and web
        development. It was an incredible opportunity to learn from industry
        leaders, exchange ideas, and stay at the forefront of innovation.
      </p>

      <div className="flex justify-center gap-4">
        <div className="flex-1 max-w-xs">
          <Image
            src="/TPE-MWC.jpeg"
            alt="Taipei Modern Web Conference"
            className="w-[500px] h-[200px] rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 object-cover"
            width={500}
            height={400}
          />
        </div>
        <div className="flex-1 max-w-xs">
          <Image
            src="/TPE-MWC-2.jpeg"
            alt="Taipei Modern Web Conference"
            className="w-[500px] h-[200px] rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 object-cover"
            width={500}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Community;
