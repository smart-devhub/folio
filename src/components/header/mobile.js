import React from 'react'
import './mobile.css'

function Mobile({IsOpen,setIsOpen}) {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={()=>setIsOpen(!IsOpen)}>
                <i class="fi-rr-cross-circle"></i>

            </div>
            <div className="mobile-options">
            <div className="mobile-option">
                <a href="#projects">
                <i class="fi-rr-edit-alt option-icon"></i>Projects
                </a>
            </div>
            <div className="mobile-option">
                <a href="#skills">
                <i class="fi-rr-laptop option-icon "></i>Skills
                </a>
            </div>
            <div className="mobile-option">
                <a href="#work">
                <i class="fi-rr-briefcase option-icon"></i> Works
                </a>
            </div>
            <div className="mobile-option ">
                <a href="#contact">
                <i class="fi-rr-following option-icon"  ></i>Contact
                </a>
            </div>

            </div>
            
        </div>
    )
}

export default Mobile
