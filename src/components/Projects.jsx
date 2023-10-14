import React from 'react'
import './Projects.css'
import agritech from './images/agritech.png'
import fairsplit from './images/fairsplit.png'
import rock from './images/rockpaper.png'
import todo from './images/to-do.png'
import gnc from './images/gnc.png'
import shop from './images/shop.png'

export default function Projects() {
  return (
    <div id="projects text-light">
      <h1 className='font-head'><span>Projects</span></h1>
      <div className='text-light d-flex flex-row justify-content-around flex-wrap p-5'>
        <div className="flip-card col-md-6">
          <a href="https://fairsplit.azurewebsites.net/" target='_blank'>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={fairsplit} alt="Avatar" width="100%" />
              </div>
              <div className="flip-card-back">
                <h2><span>FairSplit</span></h2>
                <p>Whether you're splitting the cost of a group vacation or simply trying to settle up after a night out, FairSplit has you covered. With its intuitive interface and easy-to-use tools, you can easily divide costs and settle debts in just a few clicks.</p>
                <p><span>Technologies Used</span>: ReactJs, HTML, CSS, Javascript, Bootstrap, MongoDB, Express, NodeJs</p>
              </div>
            </div>
          </a>
        </div>
        <div className="flip-card col-md-6">
          <a href='https://github.com/gurmehar1553/GuruNanakCares' target='_blank'>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={gnc} alt="Avatar" />
              </div>
              <div className="flip-card-back">
                <h2><span>Guru Nanak Cares - Healthcare and Wellness Hub</span></h2>
                <p>Homeopathic Clinic Website dealing with its various services provided, booking appointments, admin section,etc.</p>
                <p><span>Technologies Used</span>: ReactJs, HTML, CSS, Javascript, Bootstrap, MongoDB, Express, NodeJs</p>
              </div>
            </div>
          </a>
        </div>
        <div className="flip-card col-md-6">
          <a href='https://agritech.jastagar.tech/' target='_blank'>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={agritech} alt="Avatar" width="100%" />
              </div>
              <div className="flip-card-back">
                <h2><span>Agritech</span></h2>
                <p>AgriTech offers a variety of services including supply-chain management, inventory management, and more to help farmers grow sustainably.

                  Use KissanCoin, our blockchain-based crypto-wallet, to easily and securely manage your finances, transactions, and assets.</p>
                <p><span>Technologies Used</span>: ReactJs, HTML, CSS, Javascript, Bootstrap, MongoDB, Express, NodeJs</p>
              </div>
            </div>
          </a>
        </div>
        <div className="flip-card col-md-6">
          <a href='https://github.com/gurmehar1553/E-commerce' target='_blank'>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={shop} alt="Avatar" width="100%" />
              </div>
              <div className="flip-card-back">
                <h2><span>Shop With Ease</span></h2>
                <p>An E-commerce Platform to buy products of various categories-Women, Men, Jewellery, Electronics</p>
                <p><span>Technologies Used</span>: ReactJs, HTML, CSS, Javascript, Bootstrap, MongoDB, Express, NodeJs</p>
              </div>
            </div>
          </a>
        </div>
        <div className="flip-card col-md-6">
          <a href='https://gurmehar1553.github.io/rock-paper-scissors/' target='_blank'>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={rock} alt="Avatar" width="100%" />
              </div>
              <div className="flip-card-back">
                <h2><span>Rock, Paper and Scissors Game</span></h2>
                <p>Play this fun-loving game which is loved by all.</p>
                <p><span>Technologies Used</span>: HTML, CSS, Javascript, Bootstrap</p>
              </div>
            </div>
          </a>
        </div>
        <div className="flip-card col-md-6">
          <a href='https://github.com/gurmehar1553/to-do-list' target='_blank'>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={todo} alt="Avatar" width="100%" />
              </div>
              <div className="flip-card-back">
                <h2><span>To-do list</span></h2>
                <p><span>Technologies Used</span>: ReactJs, HTML, CSS, Javascript, Bootstrap</p>
              </div>
            </div>
          </a>
        </div>

      </div>
    </div>
  )
}
