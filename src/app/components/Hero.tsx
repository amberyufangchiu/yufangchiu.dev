import Image from 'next/image';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-8 md:flex-row">
      <div className="space-y-6">
        <h1 className="text-4xl leading-tight font-bold text-gray-900 dark:text-gray-100">
          Hi, I&apos;m <span className="text-primary dark:text-white">Yufang</span>{' '}
          <span className="inline-block">👋</span>
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-gray-700 dark:text-gray-100">
          I&apos;m a <span className="font-medium text-gray-800 dark:text-gray-100">Software Engineer</span> passionate
          about building clean, thoughtful applications that feel intuitive — not complicated.
        </p>

        <div className="text-md flex flex-col gap-2 leading-relaxed text-gray-600 dark:text-gray-100">
          <p>
            Originally from <span className="font-medium text-gray-700 dark:text-gray-100">Taiwan 🧋</span>, now based
            in <span className="font-medium text-gray-700 dark:text-gray-100">Australia 🦘</span>.
          </p>
        </div>
      </div>
      <Image
        src="/about/Yu-fang Chiu.jpeg"
        alt="Photo of Yufang"
        className="h-36 w-36 rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-105"
        width={144}
        height={144}
        priority
        loading="eager"
        draggable="false"
      />
    </section>
  );
};

export default Hero;
