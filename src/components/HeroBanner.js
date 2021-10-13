import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  
import hero from "../assets/images/hero.png";
export default function HeroBanner() {
    return (
        <React.Fragment>
            <div className="hero-banner ms py-5">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-md-5 mb-4 mb-md-0">
                            <div className="hero-text-box ms text-center text-md-start">
                                <div className="top-title-text">
                                    <h6>welcome to msdoge</h6>
                                </div>
                                <h1>Meet MsDoge, the new community  meme coin!</h1>
                                <p>Safefuarding token values, prospectus investment for the long term and project accountability. Safefuarding token values, prospectus investment for the long term and project accountability. </p>
                            </div>
                            <div className="yellow-butn ms mt-4 text-center text-md-start">
                                <Link to="/coin" className="d-inline-block py-3 px-4 text-center rounded-3">Download Whitepaper</Link>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="hero-image ms fw-100">
                              <img src={hero} alt="hero-Banner"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
