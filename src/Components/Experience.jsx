import React from 'react'
import ExperienceData from './ExperienceData'
import ExperienceCard from './ExperienceCard'
import { v4 as uuidv4 } from 'uuid';

const Experience = () => {
  return (
    <section className='flex items-center justify-around flex-wrap p-12'>
    {ExperienceData.map((experience) => {
      const id = uuidv4()
      return <ExperienceCard experience={experience} key={id}/>
    })}


      

    </section>
  )
}

export default Experience
