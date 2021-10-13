import React from 'react'
import cat1 from "../assets/images/cat1.png";
import cat2 from "../assets/images/cat2.png";
import cat3 from "../assets/images/cat3.png";
export default function HalfContent() {
    return (
        <React.Fragment>
            <div className="half-content pt-40 pb-50 ms">
                <div className="container-lg">
                    <div className="row align-items-center">
                        <div className="col-md-6 order-md-1 mb-4">
                            <div className="cat-left-text ms text-center text-md-start">
                                <h3>Stake MsDoge to get the Cryptoloria Governance Token</h3>
                                <p>Safefuarding token values, prospectus investment for the long term and project accountability.</p>
                                <div className="border-cat-butn ms mt-4">
                                    <a href="#" className="d-inline-block">Button title</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-2 mb-4">
                            <div className="image-cat ms fw-100">
                            <img src={cat1} alt="cat-run"/>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-4 mb-4">
                            <div className="cat-left-text ms text-center text-md-start">
                                <h3>More than a Meme coin, this is a world</h3>
                                <p>Safefuarding token values, prospectus investment for the long term and project accountability.</p>
                                <div className="border-cat-butn ms mt-4">
                                    <a href="#" className="d-inline-block">Button title</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-3 mb-4">
                            <div className="image-cat ms fw-100">
                            <img src={cat2} alt="cat-run"/>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-5 mb-4">
                            <div className="cat-left-text ms text-center text-md-start">
                                <h3>Ownerships into a crypto franchise</h3>
                                <p>Safefuarding token values, prospectus investment for the long term and project accountability.</p>
                                <div className="border-cat-butn ms mt-4">
                                    <a href="#" className="d-inline-block">Button title</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-6 mb-4">
                            <div className="image-cat ms fw-100">
                            <img src={cat3} alt="cat-run"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
