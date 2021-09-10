import React from 'react'
import { socialData } from '../data/socialdata'
import './socialmedai.css'

function SocialMedia() {

    const data=socialData;
    return (
        <div className="socialMedia">
            {data.map((item)=>{
                return (
                    <a href={item.link}>
                        <div className="social-icon-div">
                            <img src={item.icon} className="social-icon" />
                        </div>

                    </a>
                )
            })}
        
        </div>
    )
}

export default SocialMedia
