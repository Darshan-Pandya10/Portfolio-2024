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
            ],
            wrapperClassName:
              "text-xl md:text-2xl font-semibold text-[#666cff]",
          }}
        />
      </div>
      <p className="text-base md:text-lg max-w-xl md:max-w-3xl mx-auto my-5 px-2 tracking-wide leading-relaxed text-center text-gray-300">
        I&apos;m Darshan, a{" "}
        <span className="text-[#666cff] font-bold">React.js</span> and{" "}
        <span className="text-[#666cff] font-bold">React Native</span> Developer
        passionate about building digital experiences that are fast, intuitive,
        and impactful. Over the past{" "}
        <span className="text-white font-medium">3 years</span>, I&apos;ve
        developed production-ready web and mobile applications while
        continuously pushing myself to learn, grow, and explore new technologies.
        As I expand into{" "}
        <span className="text-[#666cff] font-semibold">full-stack development</span>,
        I remain driven by curiosity, craftsmanship, and a love for solving
        real-world problems. When I&apos;m not coding, I&apos;m usually watching
        football, listening to music, or reading.
      </p>
      <p className="text-sm text-gray-500 text-center tracking-wide">
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
          className="text-sm font-semibold tracking-widest uppercase text-gray-400 hover:text-[#666cff] transition-colors flex items-center gap-2"
        >
          Get in touch
          <HiArrowDown className="animate-bounce" size={16} />
        </a>
      </div>
    </section>
  );
};

export default About;
