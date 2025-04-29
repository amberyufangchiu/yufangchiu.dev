import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold leading-tight text-gray-900">
          Hi, I&apos;m <span className="text-primary">Yufang</span>{" "}
          <span className="inline-block">👋</span>
        </h1>

        <p className="text-lg max-w-2xl leading-relaxed text-gray-700">
          I&apos;m a{" "}
          <span className="font-medium text-gray-800">Software Engineer</span>{" "}
          passionate about building clean, thoughtful applications that feel
          intuitive — not complicated.
        </p>

        <div className="text-md text-gray-600 leading-relaxed">
          <p>
            Originally from{" "}
            <span className="font-medium text-gray-700">Taiwan 🧋</span>, now
            based in{" "}
            <span className="font-medium text-gray-700">Australia 🦘</span>.
          </p>
        </div>
      </div>
      <Image
        src="/Yu-fang Chiu.jpeg"
        alt="Photo of Yufang"
        className="w-36 h-36 rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-105"
        width={80}
        height={80}
      />
    </section>
  );
};

export default Hero;
