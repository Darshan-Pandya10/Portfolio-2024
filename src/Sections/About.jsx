import React from "react";
import Typewriter from "typewriter-effect";
import { HiArrowDown } from "react-icons/hi";

const About = () => {
  return (
    <section className="about relative flex flex-col min-h-screen items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      <div className="hero-glow hero-glow-1" aria-hidden="true" />
      <div className="hero-glow hero-glow-2" aria-hidden="true" />

      <span className="status-badge mb-6">Open to opportunities</span>

      <h1 className="text-4xl md:text-6xl italic font-bold tracking-wider m-2">
        Hey!
      </h1>
      <div className="typewriter mt-3 flex items-center justify-center flex-wrap">
        <h2 className="inline-block text-xl md:text-2xl font-semibold mr-2">
          I'm
        </h2>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 50,
            strings: [
              " Darshan Pandya.",
              " a Frontend Developer.",
              " a React & React Native Developer.",
            ],
            wrapperClassName:
              "text-xl md:text-2xl font-semibold text-[#6849f3]",
          }}
        />
      </div>
      <p className="text-base md:w-[45rem] my-4 tracking-wider leading-7 text-center text-gray-300">
        Frontend Developer at{" "}
        <span className="text-[#6849f3] font-bold">
          Spontaneous Enterprise
        </span>
        , building scalable ERP platforms, mobile apps, and production web
        applications. Proficient in{" "}
        <span className="text-[#6849f3] font-bold">React</span>,{" "}
        <span className="text-[#6849f3] font-bold">Next.js</span>, and{" "}
        <span className="text-[#6849f3] font-bold">React Native</span> — with
        hands-on experience across the full development lifecycle, from design
        to App Store deployment.
      </p>
      <p className="text-sm text-gray-500 tracking-wide">
        B.Tech in Computer Science · Parul University · Ahmedabad, India
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
        <a
          href="#experience"
          className="btn tracking-widest font-semibold px-8"
        >
          Explore
        </a>
        <a
          href="#contact"
          className="text-sm font-semibold tracking-widest uppercase text-gray-400 hover:text-[#6849f3] transition-colors flex items-center gap-2"
        >
          Get in touch
          <HiArrowDown className="animate-bounce" size={16} />
        </a>
      </div>
    </section>
  );
};

export default About;
