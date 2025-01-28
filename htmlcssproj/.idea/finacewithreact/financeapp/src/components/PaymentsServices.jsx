// import React from 'react'
import Terminals from "../assets/pos.png";
import TransferNumber from "../assets/transferNumber.png";
import AppImg from "../assets/app.png";
import GooglePlay from "../assets/googlePlay.png";
import "../style/PaymentsServices.css"

function PaymentsServices() {
    return (
        <div className="paymentServices">
            <div className="paymentChannels">
                <div id="paymentChannelsTitle">
                    <h1>Upgrade Your Business with OPay
                        <span> Omnichannel</span> Payments</h1>
                </div>

                <div className="terminals">
                    <div id="paymentsTextContainer">
                        <h2>POS Terminals</h2>
                        <h6>Get POS terminals that meet your specific needs</h6>
                        <ul>
                            <li><p>Best network uptime & lowest charges</p></li>
                            <li><p>No delay in receiving payments
                            </p></li>
                            <li><p>Automated dispute resolution</p>
                            </li>
                            <li><p>Durable hardware & strong battery</p>
                            </li>
                            <li><p>EOD reports for easier reconciliation</p>
                            </li>
                            <li><p>Bill payments & more value-added services</p>
                            </li>
                        </ul>
                        <div id="terminalButton">
                            <button><h4>Apply for POS</h4></button>
                        </div>
                    </div>
                    <div id="paymentsImageContainer">
                        <img src={Terminals} alt="" />
                    </div>
                </div>
                <div className="transferNumber">
                    <div id="paymentsImageContainer">
                        <img src={TransferNumber} alt="" />
                    </div>
                    <div id="paymentsTextContainer">
                        <h2>Transfer Number</h2>
                        <h6>Receive transfers in a safer & faster way
                        </h6>
                        <ul>
                            <li><p>Receive funds safely with masked accounts</p></li>
                            <li><p>Instant voice notifications</p>
                            </li>
                            <li><p>100% transaction success rate</p>
                            </li>
                            <li><p>Instant confirmation by branch employees</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="businessApp">
                    <div id="paymentsTextContainer">
                        <h2>OPay Business App</h2>
                        <h6>Manage your business at your fingertips</h6>
                        <ul>
                            <li><p>Collect Payments via multiple channels</p></li>
                            <li><p>Check transaction history & details in real-time</p>
                            </li>
                            <li><p>Manage branches, employees & customers</p>
                            </li>
                            <li><p>Get access to online sales & more value-added services</p>
                            </li>
                        </ul>
                        <div id="AppButton">
                            <img src={GooglePlay} alt="" />
                        </div>
                    </div>
                    <div id="paymentsImageContainer">
                        <img src={AppImg} alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PaymentsServices
