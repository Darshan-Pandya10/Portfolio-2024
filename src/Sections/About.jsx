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
      <p className="text-base md:text-lg max-w-xl md:max-w-2xl mx-auto my-5 px-2 tracking-wide leading-relaxed text-center text-gray-300">
        I craft{" "}
        <span className="text-white font-medium">web and mobile products</span>{" "}
        that feel fast, polished, and effortless — with{" "}
        <span className="text-[#666cff] font-bold">React</span> and{" "}
        <span className="text-[#666cff] font-bold">React Native</span>{" "}
        from idea to production. Based in Ahmedabad, three years in, still
        obsessed with building things people actually enjoy using.
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
