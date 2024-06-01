import React from 'react';
import Typewriter from 'typewriter-effect';
import HeroImage from '../assets/Images/HeroImage.jpg'
const About = () => {
  return (
    <section 
    className='about relative flex flex-col min-h-screen items-center justify-center py-16 p-4'>
      <h1 className='text-4xl md:text-5xl italic font-bold tracking-wider m-2'>Hey!</h1>
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
      experiences. Proficient in <span className='text-[#6849f3] font-bold'>JavaScript</span>  and <span className='text-[#6849f3] font-bold'>React</span> , with a commitment to continuous learning and staying
      abreast of industry trends.</p>
      <a href="#experience" className='btn mt-8 tracking-widest font-semibold px-8'>Explore</a>
      
    </section>
  );
};

export default About;


// style={{
//         backgroundImage: `url(${HeroImage})`,
//         backgroundPosition: 'center',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         textAlign: 'center',
//         color: '#000000', // Text color
//       }}