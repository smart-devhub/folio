import React from 'react'
import './projectCard.css'

function ProjectCard({project}) {
    return (
        <div className="project-card">
            <div className="project-info">
                <label className="project-title">{project.title}</label>
                <div className="project-links">
                    
                    {project.demo && 
                        <a href={project.demo} className="project-link">
                       <div className="link-button"><i class="fi-rr-globe"></i>Demo</div> 
                        
                        </a>}
                
                
                    {project.github && 
                        <a href={project.github} className="project-link">
                        <div className="link-button"><i class="devicon-github-original" ></i>Github</div>
                        
                        </a>}
                </div>
                <p>{project.about}</p>
                <div className="project-tags">
                    {project.tags.map((tag)=>{
                        return <label className="tags">{tag}</label>
                    })}
                </div>
            </div>
            <div>
            <img src={project.image} className="projectphoto" />
            </div>
        </div>
    )
}

export default ProjectCard
