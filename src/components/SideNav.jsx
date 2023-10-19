import React from 'react'
import logo from "./images/gk-logo.jpg"

export default function SideNav() {
  return (
    <div>
    <section id="sideNav" className="position-fixed font-head">
        <div className='p-3' style={{backgroundColor : "#060709"}}>
          <img src={logo} alt="img" height="120px" width="150px" />
        </div>
        <div>
        <nav className="mainNav d-flex flex-column align-content-around">
            <a href="#" >Home</a>
            <a href="#about" >About</a>
            <a href="#skills" >Skills</a>
            <a href="#projects">Projects</a>
            <a href="#blogs">Blogs</a>
            <a href="#contact">Contact</a>
        </nav>
        </div>
    </section>
    </div>
  )
}
