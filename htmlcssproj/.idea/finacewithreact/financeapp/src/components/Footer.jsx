// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import FooterLogo from "../assets/footer-logo.png";
import { Link } from "react-router-dom";
import "../style/Footer.css"



// import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import FacebookIcon from '@material-ui/icons/Facebook';



function Footer() {
    return (
        <div className="footer">
            <div className="leftSideFooter">
                <img src={FooterLogo}/>
            </div>
            <div className="rightSideFooter">
                <div className="threeOptions">
                    <Link to = "/payments"><h3>Payments</h3></Link>
                    <Link to = "/solutions"><h3>Solutions</h3></Link>
                    <Link to = "/about"><h3>About OPay</h3></Link>
                </div>
                <div id="line"></div>
                <div className="address">
                    <div className="location">
                        <div className="LocationIcon">
                            <LocationOnIcon />
                            <h5>Lagos</h5>
                        </div>
                        <p>Plot 9, Dr. Nurudeen Olowopopo Avenue, Central Business District, Alausa 100212, Ikeja, Lagos, Nigeria</p>
                        <p>Over 24 physical branches across the nation.
                        </p>

                        {/* <FontAwesomeIcon className = "locationSymbol" icon ={faLocationDot}/> */}
                    </div>
                    <div className="contact">
                        <p>contact with us</p>
                        <p>pos-service@opay-inc.com</p>

                        <div className="socials">
                            <div className="instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                            </div>
                            <div className="facebook">
                                <FontAwesomeIcon icon={faFacebook} />                            </div>
                            <div className="twitter">
                                <FontAwesomeIcon icon={faSquareXTwitter} />                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
