import React from 'react'
import Seperator from '../common/separator';
import { projectData } from '../data/projects'
import ProjectCard from './ProjectCard';
import './projects.css'

function Projects() {
    const data=projectData;
    return (

        <div className="projects">
            <Seperator />
            <label className="section-title">Projects</label>
            {data.map((project)=>{
                return <ProjectCard project={project}/>
            })}

        </div>
    )
}

export default Projects
