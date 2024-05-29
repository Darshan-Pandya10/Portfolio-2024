import React from 'react'
import {useFetchData} from './FetchData'
import { v4 as uuidv4 } from 'uuid';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const {loading , projects} = useFetchData()

    if(loading){
       <section className='projects'>
         <div className="loader"></div>
       </section>
    }


  return (
    <section id='projects' className='projects flex items-center justify-center flex-wrap p-8 md:m-12'>
      {projects.map((project) => {
        const id = uuidv4()
        return <ProjectCard project={project} key={id}/>
      })}   
    </section>
  )
}

export default Projects
