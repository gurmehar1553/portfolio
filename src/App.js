import React from 'react'
import SideNav from './components/SideNav'
import Home from './components/Home'
import About from './components/About'
import RightComp from './components/RightComp'


export default function App() {
  return (
    <div>
      <SideNav />
      <RightComp />
      {/* <Home />
      <About /> */}
    </div>
  )
}
