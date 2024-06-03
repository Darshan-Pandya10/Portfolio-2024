import React from 'react'
import {useFetchData} from '../Data//FetchData'
import { v4 as uuidv4 } from 'uuid';
import ProjectCard from '../Components/ProjectCard';

const Projects = () => {
    const {loading , projects} = useFetchData()

    if(loading){
       <section className='projects'>
         <div className="loader"></div>
       </section>
    }


  return (
    <>
      <h1 className='title mt-24 text-center tracking-widest font-semibold uppercase text-2xl text-white'>#Projects</h1>
    <section id='projects' className='projects flex items-center justify-center flex-wrap p-8 md:m-12'>
      {projects.map((project) => {
        const id = uuidv4()
        return <ProjectCard project={project} key={id}/>
      })}   
    </section>
    </>
  )
}

export default Projects
