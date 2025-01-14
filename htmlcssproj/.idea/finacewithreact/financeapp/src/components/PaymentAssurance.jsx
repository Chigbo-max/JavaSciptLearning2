// import React from 'react'
import { Link } from "react-router-dom";
import PaymentOptions from "../assets/paymentOptions.png";
import FraudDetection from "../assets/fraudDetection.png";
import CustomerCare from "../assets/customerCare.png";
import "../style/PaymentAssurance.css";



function PaymentAssurance() {
  return (
    <div className="paymentAssurance">
      <div id="textContainer">
        <h1>Online Payments For Everyone</h1>
      </div>
      <div className="assuranceContainer">
        <div id ="assurance" style = {{backgroundImage: `url(${PaymentOptions})`}}>
          <div id="title">
            <h3>Full suite of payment options</h3>
          </div>
          <div id="desc">
            <p>Accept payments anytime and everywhere. Payments are made easier with OPay.</p>
          </div>
        </div>
        <div id="assurance" style = {{backgroundImage: `url(${FraudDetection})`}}>
          <div id="title1">
            <h3>Fraud detection</h3>
          </div>
          <div id="desc">
            <p>We enable Level 1 PCI compliance and set custom fraud protections.
            </p>
          </div>
        </div>

        <div id="assurance" style = {{backgroundImage: `url(${CustomerCare})`}}>
          <div id="title">
            <h3>24/7 customer care</h3>
          </div>
          <div id="desc">
            <p>Our team of experts are ready to handle your concerns according to your business models all day long.
            </p>
          </div>
        </div>

      </div>
      <div id="bottom-text">
      <h6>Let your customers choose their preferred payment methods and accept payments anytime, everywhere.
      </h6>
      </div>
      <div id="apply">
      <Link to="/"><h3>Apply for OPay Online Gateway {`>`} </h3></Link>
      </div>
    </div>
  )
}

export default PaymentAssurance
