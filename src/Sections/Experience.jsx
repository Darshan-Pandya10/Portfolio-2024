import React from 'react'
import ExperienceData from '../Data/ExperienceData'
import ExperienceCard from '../Components/ExperienceCard'
import { v4 as uuidv4 } from 'uuid';

const Experience = () => {
  return (
    <section id='experience' className='relative pt-32 flex items-center justify-around flex-wrap p-12'>
    {ExperienceData.map((experience) => {
      const id = uuidv4()
      return <ExperienceCard experience={experience} key={id}/>
    })}
    </section>
  )
}

export default Experience
