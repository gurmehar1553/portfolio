import React from 'react'
import myImage from "./images/myPic.png"
// import Particles from 'react-tsparticles'
// import { loadFull } from "tsparticles"; 
import './Home.css'


export default function Home() {
  return (
    <section className="text-light" id="home">
    <div className="container">
      <div className="row p-5">
        <div className="col-md-6 font-head">
          <h1>Hi, I am </h1>
          <h1> <span>Gurmehar Kaur</span></h1>
          <h2>I am a </h2>
          <div className='typing'>
            <h2><span>FullStackDeveloper</span></h2>
          </div>
        </div>
        <div className="col-md-6">
          <img src={myImage} alt="my-img" className="rounded-circle" height="300px" />
        </div>
      </div>
    </div>
  </section>
  )
}
