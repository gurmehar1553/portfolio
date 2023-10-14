import React from 'react'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'

export default function RightComp() {
  return (
    <div className='main'>
        <Home />
        <About />
        <Skills />
        <Projects />
    </div>
  )
}
