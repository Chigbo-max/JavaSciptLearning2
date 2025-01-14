/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import quote from "../assets/quote.png";
import "../style/testimonies.css";

function testimonies() {
  return (
    <div className = "testimonies">
        <div className="testimonyBox">
            <div id="title">
                <h3>Joshua</h3>
                <img src={quote} alt="" />
            </div>
            <p>Kudos to OPay. I've been using OPay for two years now and I must say their transfer services are seamless and swift.</p>
        </div>

        <div className="testimonyBox">
            <div id="title">
                <h3>Ifeanyi</h3>
                <img src={quote} alt="" />
            </div>
            <p>I'm giving OPay five stars because of its seamless services! The best experience so far.</p>
        </div>

        <div className="testimonyBox">
            <div id="title">
                <h3>Ibrahim</h3>
                <img src={quote} alt="" />
            </div>
            <p>OPay helps make my daily business easier with its POS machines. The collection is fast and it drops to my account instantly.</p>
        </div>

    </div>
  )
}

export default testimonies
