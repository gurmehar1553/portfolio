import React, { useRef } from 'react'
import './Contact.css'
import address from './images/address.png'
import email from './images/email.png'
import github from './images/github.png'
import emailjs from '@emailjs/browser'

export default function Contact() {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3btbntz', 'template_vwoqrnd', form.current, 'dyiqdYdPXEgqyIR8v')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id='contact' className='my-5'>
        <h1 className='font-head'><span>Contact me</span></h1>
        <div className='d-flex justify-content-around my-5 py-5'>
            <div>
                <div><img src={address} alt='' /><span className='text-light'>Rajpura, Punjab</span></div>
                <div><img src={email} height='50px' alt='' /><span className='text-light'>gurmeharkaur01@gmail.com</span></div>
                {/* <div><img src={github}  alt='' /><span className='text-light'>gurmeharkaur01@gmail.com</span></div> */}
            </div>
            <div className='text-light col-md-6'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label font-head"><span>Name :</span></label>
                        <input type="text" className="form-control input-box" id="name" name='name'  />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mail" className="form-label font-head"><span>Email :</span></label>
                        <input type="email" className="form-control input-box" id="mail" name='email' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="subject" className="form-label font-head"><span>Subject :</span></label>
                        <input type="text" className="form-control input-box" id="subject" name='subject' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="msg" className="form-label font-head"><span>Message :</span></label>
                        <textarea  className="form-control input-box" id="msg" name='msg' />
                    </div>
                    <button type="submit" className="btn button-send">Send Message</button>
                </form>
            </div>
        </div>
    </div>
  )
}
