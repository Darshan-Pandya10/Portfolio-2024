import React from 'react'
import skills from '../Data/SkillData'
import SkillCard from '../Components/SkillCard'
import { v4 as uuidv4 } from 'uuid';


const Skills = () => {
  return (
    <>
    <h1 className='title mb-20 text-center tracking-widest font-semibold uppercase text-2xl text-white'>#skills</h1>
    <section className='mx-12 mb-36 md:w-[60vw] md:mx-auto my-12 border-1 border-solid border-[#6849f3] bg-[#222831] rounded-xl p-8 flex items-center justify-center flex-wrap gap-6'>
    {skills.map((skill) => {
      const id = uuidv4()
      return <SkillCard skill={skill} key={id}/>
    })}
    </section>
    </>
  )
}

export default Skills
