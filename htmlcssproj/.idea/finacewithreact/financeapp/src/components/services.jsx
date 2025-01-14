// import React from 'react'

import industrialImg from "../assets/industrial.png";
import omnichannelImg from "../assets/omnichannel.png";
import bankingImg from "../assets/banking.png";
import onlineImg from "../assets/online.png";

import "../style/services.css";

function services() {
    return (
        <div className="services">

            <div className="servicesList">
                <div id="omnichannel">
                    <img src={omnichannelImg} alt="" />
                    <div className="textContainer">
                        <h3>Omnichannel Payments</h3>
                        <h6>Make payment collection safer, easier and faster via multiple channels
                        </h6>
                    </div>
                </div>
                <div id="industrial">
                    <img src={industrialImg} alt="" />
                    <div className="textContainer">
                        <h3>Industrial Payment Solutions
                        </h3>
                        <h6>Get a customized payment solution for your business</h6>
                    </div>
                </div>
                <div id="banking">
                    <img src={bankingImg} alt="" />
                    <div className="textContainer">
                        <h3>Banking & Bill Payments
                        </h3>
                        <h6>Enjoy financial inclusion and efficiency with the largest banking agent network</h6>
                    </div>
                </div>

                <div id="online">
                    <img src={onlineImg} alt="" />
                    <div className="textContainer">
                        <h3>Online Sales & Marketing
                        </h3>
                        <h6>Expand your sales channels from offline to online
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default services

