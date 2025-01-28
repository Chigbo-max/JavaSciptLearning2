// import React from 'react'
import guiness from "../assets/Guinness-logo.png";
import fedex from "../assets/fedex-logo.png";
import genesis from "../assets/Genesis-logo.png";
import shafa from "../assets/Shafa-logo.png";
import filmhouse from "../assets/filmhouse-logo.png";
import medplus from "../assets/medplus-logo.png";
import hmedix from "../assets/H-MEDIX-logo.png";
import marketsquare from "../assets/market-square-logo.png";
import kilimanjaro from "../assets/kilimanjar-logo.png";
import electromart from "../assets/ELECTR-MART-logo.png";
import nett from "../assets/nettpharmacy-logo.png";

import "../style/Partners.css";

function Partners() {
  return (
    <div className = "partners">
        <div className="title">
            <h1>Trusted by over <span>1,000,000</span> businesses across Nigeria</h1>
        </div>

        <div className="logoContainer">
            <img src={guiness}  />
            <img src={fedex}  />
            <img src={genesis}  />
            <img src={shafa}  />
            <img src={filmhouse}  />
            <img src={medplus}  />
        </div>
        <div className="secondLogoContainer">
            <img src={hmedix}  />
            <img src={marketsquare}  />
            <img src={kilimanjaro}  />
            <img src={electromart}  />
            <img src={nett}  />
            <h6>and more...</h6>
        </div>
      
    </div>
  )
}

export default Partners
