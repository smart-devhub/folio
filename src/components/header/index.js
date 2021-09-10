import React,{useState} from 'react'
import './header.css'
import Mobile from './mobile'
import Web from './web'

function Header() {

    const [IsOpen,setIsOpen]=useState(false);

    return (
        <div className='header'>
            <div className="logo">Romeo</div>
            <div className="menu">
                <div className="web-menu">
                    <Web/>
                </div>
                <div className="mobile-menu">
                    <div onClick={()=>setIsOpen(!IsOpen)}>
                    <i class="fi-rr-apps menu-icon"></i>
                    </div>
                    {IsOpen && <Mobile IsOpen={IsOpen} setIsOpen={setIsOpen} />}
                </div>
            </div>
        
        </div>
    )
}

export default Header
