import React from "react";

const Contact = () => {
  return (
    <section className="mt-28">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-6 text-gray-900 dark:text-gray-100">
        Let&apos;s Connect
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-100 max-w-2xl mx-auto mb-8 leading-relaxed">
        Want to chat? I want to connect with likeminded individuals!
        <br />
        <a
          href="https://www.linkedin.com/in/amber-yufang-chiu/"
          className="text-blue-500 hover:underline"
        >
          Send me a DM
        </a>{" "}
        and I&apos;ll gladly respond!
      </p>
    </section>
  );
};

export default Contact;
