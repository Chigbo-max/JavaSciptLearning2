// import React from 'react'
// import Banner from "../components/homeBanner";
// import Services from "../components/services";
import Partners from "../components/Partners";
import Testimonies from "../components/testimonies";
import Contact from "../components/contact";
import cbnLogo from "../assets/icon-cbn.png";
import ndicLogo from "../assets/icon-ndic-1b3b5877.png"
import opayBanner from "../assets/opayBanner.png";
import industrialImg from "../assets/industrial.png";
import omnichannelImg from "../assets/omnichannel.png";
import bankingImg from "../assets/banking.png";
import onlineImg from "../assets/online.png";
import "../style/Home.css";

function Home() {
  return (
    <>
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
                <Partners/>
                <Testimonies/>
                <Contact/> 
    </>

  )
}

export default Home
