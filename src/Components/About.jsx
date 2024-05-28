import React from 'react';
import Typewriter from 'typewriter-effect';

const About = () => {
  return (
    <section className='flex flex-col items-center justify-center py-16 p-4'>
      <h1 className='text-4xl md:text-5xl font-bold tracking-wider m-2'>Hey!</h1>
      <div className="typewriter mt-3 flex items-center justify-center">
        <h2 className='inline-block text-xl md:text-2xl font-semibold mr-2'>I'm</h2>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          delay: 50,
          strings: [" Darshan Pandya." , " a React Js Developer."],
          wrapperClassName:'text-xl md:text-2xl font-semibold text-[#6849f3]'
        }}
        />
        </div>
      <p className='text-base md:w-[45rem] my-4 tracking-wide leading-7 text-center'>Dedicated to refining skills and delivering impactful web
      experiences. Proficient in JavaScript and React, with a commitment to continuous learning and staying
      abreast of industry trends.</p>
      <a href="" className='inline-block border-2 border-solid border-white  hover:border-[#6849f3] hover:text-[#6849f3] my-4 px-6 py-2 tracking-wider'>Explore</a>

    </section>
  );
};

export default About;
