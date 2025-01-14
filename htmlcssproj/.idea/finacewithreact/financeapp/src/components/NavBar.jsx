// import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../assets/q3ui7mk4.png"
import "../style/NavBarStyle.css"

function NavBar() {
    return (
        <div className="NavBar-container">
            <div className='leftSide'>
            <img src={Logo}/>
            </div>
            <div className='rightSide'>
                <Link to="/">Home</Link>
                <Link to="/payments">Payments</Link>
                <Link to="/solutions">Solutions</Link>
                <Link to="/about">About Us </Link>
            </div>
        </div>
    )
}

export default NavBar
