// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { faNairaSign } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import PhoneIcon from '@material-ui/icons/Phone';
import ProfessionalDashboardImg from "../assets/professionaldashboard.png";
import {Link} from "react-router-dom";


import "../style/ProfessionalDashboard.css";

function ProfessionalDashboard() {
    return (
        <div className="ProfessionalDashboard">
            <div className="professionalBodyContainer">
                <div className="title">
                    <h1>Get A <span>Professional Dashboard</span> with
                        Visualizations & Business Intelligence</h1>
                </div>
                <div className="imageContainer">
                    <img src={ProfessionalDashboardImg} alt="" />
                </div>
                <div className="secondTitle">
                    <h2>Digitalize the way you handle your business operations</h2>
                </div>

                <div className="businessOperations">
                    <div className="operationsContainer">
                        <div id="socials">
                            <FontAwesomeIcon icon={faBullseye} />
                        </div>
                        <div id="desc">
                            <p>Real-time performance tracking & regular reports</p>
                        </div>
                    </div>

                    <div className="operationsContainer">
                        <div id="socials">
                            <FontAwesomeIcon icon={faSitemap} />
                        </div>
                        <div id="desc">
                            <p>Branch and employee management with ease</p>
                        </div>
                    </div>

                    <div className="operationsContainer">
                        <div id="socials">
                            <FontAwesomeIcon icon={faNairaSign} />
                        </div>
                        <div id="desc">
                            <p>Corporate funds management & flexible settlement configuration</p>
                        </div>
                    </div>

                    <div className="operationsContainer">
                        <div id="socials">
                            <FontAwesomeIcon icon={faListCheck} />                    </div>
                        <div id="desc">
                            <p>Payroll management & more value-added services</p>
                        </div>
                    </div>
                </div>

                <div className="thirdTitle">
                    <h2>Get insights about your business
                    </h2>
                    <div id="desc">
                        <p>Access a comprehensive data analysis of your business to help you discover your business opportunities and customer purchase behaviour. Save time, boost sales and earn more money by getting insights on your best-selling products and highest-spending customers.</p>
                    </div>
                </div>

                <div className="buttonContainer">
                    <button id="contactButton">
                        <div id="icon">
                            < PhoneIcon />
                        </div>
                        <h3>Contact OPay</h3>
                    </button>

                    <div id="bottom-desc">
                        <Link to = "/"><p>Get in touch with us to learn more</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalDashboard
