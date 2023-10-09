import React from 'react'
import logo from "./images/gk-logo.jpg"

export default function SideNav() {
  return (
    <div>
    <section id="sideNav" className="position-fixed font-head">
        <div>
        <img src={logo} alt="img" height="200px" width="200px" />
        </div>
        <div>
        <nav className="mainNav d-flex flex-column align-content-around">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Blogs</a>
            <a href="">Contact</a>
        </nav>
        </div>
    </section>
    </div>
  )
}
