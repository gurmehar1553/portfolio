import React from 'react'
import myImage from "./images/gurmehar2.jpg"


export default function Home() {
  return (
    <section className="text-light">
    <div className="container">
      <div className="row p-5">
        <div className="col-md-6 font-head">
          <h1 className="animate__animated animate__fadeInDown">Hi, I am </h1>
          <h1 className="animate__animated animate__fadeInDown animate__delay-1s"> <span>Gurmehar Kaur</span></h1>
          <h2 className="animate__animated animate__fadeInDown animate__delay-2s">I am a full stack developer.</h2>
        </div>
        <div className="col-md-6">
          <img src={myImage} alt="my-img" className="rounded-circle" height="300px" width="300px" />
        </div>
      </div>
    </div>
  </section>
  )
}
