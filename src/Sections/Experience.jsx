import React from 'react'
import ExperienceData from '../Data/ExperienceData'
import ExperienceCard from '../Components/ExperienceCard'
import { v4 as uuidv4 } from 'uuid';

const Experience = () => {
  return (
    <>
    <h1 className='title mt-24 text-center tracking-widest font-semibold uppercase text-2xl text-white'>#Experience</h1>
    <section id='experience' className='relative mt-8 flex items-center justify-around flex-wrap px-6 md:px-12'>
    {ExperienceData.map((experience) => {
      const id = uuidv4()
      return <ExperienceCard experience={experience} key={id}/>
    })}
    </section>
    </>
  )
}

export default Experience
