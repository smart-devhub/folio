import React from 'react'
import Seperator from '../common/separator'
import { skillsData } from '../data/skills'
import './skills.css'
import SkillsCard from './SkillsCard';

function Skills() {
    const data=skillsData;
    return (
        <div className="skills">
            <Seperator />
            <label className="section-title">Skills</label>
            <div className="skills-container">
                {data.map((item)=>{
                    return(
                        <div className="skill-section">
                        <label className="skills-title">{item.type}</label>
                        <div className="skills-list">
                            {item.list.map((skill)=>{
                                return <SkillsCard skill={skill}/>
                            })}
                        </div>
                        
                          
                        </div>
                    )
                    
                })}

            </div>
            
        </div>
    )
}

export default Skills
