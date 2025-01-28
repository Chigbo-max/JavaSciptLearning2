// import { useState } from 'react'
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Payments from "./pages/Payments";
import Footer from "./components/Footer";
import Solutions from "./pages/Solutions"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path = "/" exact element ={<Home/>} />;
          <Route path ="/about" exact element = {<About/>} />;
          <Route path = "/payments" exact element ={<Payments/>}/>;
          <Route path = "/solutions" exact element ={<Solutions/>}/>;
        </Routes>
        <Footer/>
      </Router>

    </div>
  )

}

export default App
