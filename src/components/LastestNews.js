import React from 'react'
import newsimg from "../assets/images/newsletter.png";
export default function LastestNews() {
    return (
        <React.Fragment>
            <div className="News-box ms py-60">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="get-start ms px-3 py-5 p-md-5">
                                <div className="row">
                                <div className="col-8 offset-2 col-md-4 offset-md-0 col-lg-3 offset-lg-1 order-md-2 mb-4 mb-md-0">
                                        <div className="newsletter-img ms fw-100">
                                            <img src={newsimg} alt="newsletter"/>
                                        </div>
                                    </div>
                                    <div className="col-md-8 order-md-1">
                                        <div className="get-textbox ms text-center text-md-start">
                                            <h6 className="mb-3 get-tag-box">Eden Smart Chain newsletter</h6>
                                        <h3>Stay updated with the lastest news</h3>
                                        <p>The Eden Smart Chain is a low latency, cross platform smart contract chain for digital assets, fiat on-ramping and dApps.</p>
                                        <div className="form-noti d-flex flex-column flex-md-row  justify-content-between align-items-center mt-4">
                                            <input type="text" placeholder="Email address"/>
                                            <button type="button">Get started</button>
                                        </div>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
