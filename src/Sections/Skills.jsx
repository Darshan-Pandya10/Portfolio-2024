import React from 'react'
import skills from '../Data/SkillData'
import SkillCard from '../Components/SkillCard'
import { v4 as uuidv4 } from 'uuid';


const Skills = () => {
  return (
    <section className='mx-12 mb-16 md:w-[60vw] md:mx-auto my-8 border-1 border-solid border-[#6849f3] bg-[#222831] rounded-xl p-8 flex items-center justify-center flex-wrap gap-6'>
    {skills.map((skill) => {
      const id = uuidv4()
      return <SkillCard skill={skill} key={id}/>
    })}
    </section>
  )
}

export default Skills
