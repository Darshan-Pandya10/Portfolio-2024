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
    <div class="tilt-shape">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
          </svg>
      </div>

      

    </section>
  )
}

export default Experience
