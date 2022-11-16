import React from 'react'
import "../Styles/About.css";
import aboutimg from "../assest/Aboutus.jpg"

function About() {
    return (
        <div className='about'>
            <div className='aboutTop' style={{ backgroundImage: `url(${aboutimg})` }}>
                <h2>Manufacturer & Supplier of All Types of High Class Brooms</h2>
            </div>
            <div className='aboutBottom'>
                <h1>ABOUT US</h1>
                <p>A broom (also known in some forms as a broomstick) 
                    is a cleaning tool consisting of usually stiff fibers 
                    (often made of materials such as plastic, hair, or corn husks) 
                    attached to, and roughly parallel to, a cylindrical handle, the broomstick. 
                    It is thus a variety of brush with a long handle.</p>
        
            </div>
        </div>
    )
}

export default About