import React from 'react'
import './Skills.css'
import cpp from './images/cpp.png'
import java from './images/java.png'
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import react from './images/react.png'
import express from './images/express.png'
import node from './images/node.png'
import mongo from './images/mongo.png'
import sql from './images/sql.png'
import aos from 'aos'

export default function Skills() {
    aos.init();
  return (
    <div className='my-5 py-5' id="skills">
        <div>
            <h1 className='font-head'><span>Skills</span></h1>
        </div>
        <div className='container py-5'>
            <div data-aos="zoom-out-right" data-aos-duration="1000" className='row my-5'>
                <div className='skillName col-md-2 '>
                    <img src={cpp} alt='' width='160px' />
                </div>
                <div className='col-md-2 '>
                    <img src={java} alt='' width='160px' />
                </div>
                <div className='col-md-2 '>
                    <img src={html} alt='' width='160px' />
                </div>
                <div className='col-md-2 '>
                    <img src={css} alt='' width='200px' />
                </div>
                <div className='col-md-2 '>
                    <img src={js} alt='' width='100px' />
                </div>
            </div>
            <div data-aos="zoom-out-left" data-aos-duration="1000" className='row my-3'>
                <div className='col-md-2 '>
                    <img src={react} alt='' width='160px' />
                </div>
                <div className='col-md-2 '>
                    <img src={express} alt='' width='160px' />
                </div>
                <div className='col-md-2 '>
                    <img src={mongo} alt='' width='160px' />
                </div>
                <div className='col-md-2 '>
                    <img src={node} alt='' width='160px' />
                </div>
                <div className='col-md-2 '>
                    <img src={sql} alt='' width='160px' />
                </div>
            </div>
            {/* <div className="skills-right">
                <div>
                    <h2 className='text-success'>Deep Neural Networks</h2>
                </div>
                <div className="progress" style={{"height":"10px"}}>
                    <div className="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{"width": "75%"}}>75%</div>
                </div>
            </div> */}
        </div>
    </div>
  )
}
