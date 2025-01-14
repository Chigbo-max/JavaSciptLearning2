// import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import "../style/contact.css";

function contact() {
  return (
    <div className = "contacUs">
        <div id="textContainer">
        <h3>Join Us & Grow Your Business Faster
        </h3>
        </div>

        <button id = "contactButton">
            <div id ="icon">
            < PhoneIcon/>
            </div>
            <h3>Contact OPay</h3>
        </button>
      
    </div>
  )
}

export default contact
