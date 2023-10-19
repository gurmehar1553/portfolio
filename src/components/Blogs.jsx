import React from 'react'
import blog1 from './images/blog1.png'
import blog2 from './images/blog2.png'
import blog3 from './images/blog3.png'
import blog4 from './images/blog4.png'
import './Blogs.css'
import link from './images/link.png'
import Aos from 'aos'

export default function Blogs() {
    Aos.init()
    return (
        <div id='blogs' className='my-5'>
            <h1 className='font-head'><span>Blogs</span></h1>
            <div className='d-flex justify-content-around flex-wrap p-5'>
                <div data-aos="zoom-out-right" data-aos-duration="1000" className='blog-card col-md-4 m-3 h-100'>
                    <div className='card-inner'>
                        <img src={blog1} alt='' width="100%" />
                    </div>
                    <div className='link-div'>
                        <a href='https://medium.com/@gurmeharkaur01/neural-networks-unravelling-their-mysteries-eaec02634394' target='_blank'>
                            <img src={link} alt=''/>
                        </a>
                    </div>
                </div>
                <div data-aos="zoom-out-right" data-aos-duration="1000" className='blog-card col-md-4 m-3 h-100'>
                    <div className='card-inner'>
                        <img src={blog2} alt='' width="100%" />
                    </div>
                    <div className='link-div'>
                        <a href='https://medium.com/@gurmeharkaur01/neural-networks-a-journey-into-the-weights-and-biases-39a00ac9265b' target='_blank'>
                            <img src={link} alt=''/>
                        </a>
                    </div>
                </div>
                <div data-aos="zoom-out-left" data-aos-duration="1000" className='blog-card col-md-4 m-3 h-100'>
                    <div className='card-inner'>
                        <img src={blog3} alt='' width="100%" />
                    </div>
                    <div className='link-div'>
                        <a href='https://medium.com/@gurmeharkaur01/activation-functions-decoded-8cc9c091b445' target='_blank'>
                            <img src={link} alt=''/>
                        </a>
                    </div>
                </div>
                <div data-aos="zoom-out-left" data-aos-duration="1000" className='blog-card col-md-4 m-3 h-100'>
                    <div className='card-inner'>
                        <img src={blog4} alt='' width="100%" />
                    </div>
                    <div className='link-div'>
                        <a href='https://medium.com/@gurmeharkaur01/neural-network-propagation-from-forward-to-back-77deca341aa0' target='_blank'>
                            <img src={link} alt=''/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
