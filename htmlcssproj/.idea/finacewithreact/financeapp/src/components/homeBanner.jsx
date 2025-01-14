// import React from 'react'
import cbnLogo from "../assets/icon-cbn.png";
import ndicLogo from "../assets/icon-ndic-1b3b5877.png"
import opayBanner from "../assets/opayBanner.png";
import "../style/homeBanner.css"

function homeBanner() {
  return (
    <div className = "banner">
       <div className="textContainer">
        <h1>Reliable, Fast & Safe Payments</h1>
        <h6>Get omnichannel payment solutions to grow your business better!</h6>
        <button><h3>Contact Us</h3></button>
        <div className="licenseAndInsurance">
            <div id="license">
                <h4>Licensed by CBN</h4>
                <img src={cbnLogo}/>
            </div>
            <div id="insurance">
                <h7>|</h7>
                <h4>Insured by </h4>
                <img src={ndicLogo}/>
            </div>
        </div>
        </div> 
       <div className="imageContainer">
        <img src={opayBanner}/>
       </div>
    </div>
  )
}

export default homeBanner
