import React from 'react'
import './whatweDo.css'
import villas from '../../assets/wedo1.jpg';
import Mansions from '../../assets/wedo2.png';
import Appartments from '../../assets/wedo3.jpg';
import commercial from '../../assets/wedo4.jpg';
import landdev from '../../assets/wedo5.png';
import convensions from '../../assets/wedo6.jpg';


const WhatweDo = () => {
  return (
    <div className="wedo-container">
    <div className="wedo">
      <div className="wedo-left">
        <h1 className="wedoHead">
          WHAT WE BUILD <br />
          DEFINES US.
        </h1>
      </div>

      <div className="wedo-right">
        <div className="step-row top-row">
          <div className="step-item first">
            <img src={villas} alt="Project 1" />
            <div className="step-label">Villas</div>
          </div>
          <div className="step-item second">
            <img src={Mansions} alt="Project 2" />
          </div>
          <div className="step-item third">
            <img src={Appartments} alt="Project 3" />
          </div>
        </div>

        <div className="step-row bottom-row">
          <div className="step-item first">
            <img src={convensions} alt="Project 4" />
          </div>
          <div className="step-item second">
            <img src={landdev} alt="Project 5" />
          </div>
          <div className="step-item third">
            <img src={commercial} alt="Project 6" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default WhatweDo
