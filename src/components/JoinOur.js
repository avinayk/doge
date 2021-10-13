import React from 'react'
import smicon1 from "../assets/images/icon1.png";
import smicon2 from "../assets/images/icon2.png";
import smicon3 from "../assets/images/icon3.png";
import smicon4 from "../assets/images/icon4.png";
import smicon5 from "../assets/images/icon5.png";
import smicon6 from "../assets/images/icon6.png";

export default function JoinOur() {
    return (
        <React.Fragment>
            <div className="join-our ms py-60">
                <div className="container-lg">
                    <div className="row">
                            <div className="col-12 col-md-10 offset-md-1 mb-5 text-center mb-5">
                                <div className="text-block-heading ms headingbox-center">
                                    <h6 className="mb-3 rel">Community</h6>
                                    <h3>Join Our Community</h3>
                                    <h5 className="my-3">100,000+ Twitter Followers <i class="fas fa-circle"></i> 100,000+ Telegram Members</h5>
                                    <p>Extremely active community that loves our mission. Our telegram channel is filled with community members 24/7 that would love to help you. Do not trust random messages of people claiming to be “support” or ever give out your wallet info to anyone.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-4">                       
                                <div className="s-inline-box p-4">
                                    <div className="d-flex">
                                        <div className="sm-icon me-3">
                                            <img src={smicon4} alt="sm"/>
                                        </div>
                                        <div className="sm-text">
                                            <h5>Discord</h5>
                                            <p>Chat in real time with the Eden community</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="s-inline-box p-4">
                                    <div className="d-flex">
                                        <div className="sm-icon me-3">
                                            <img src={smicon3} alt="sm"/>
                                        </div>
                                        <div className="sm-text">
                                            <h5>Twitter</h5>
                                            <p>Chat in real time with the Eden community</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="s-inline-box p-4">
                                    <div className="d-flex">
                                        <div className="sm-icon me-3">
                                            <img src={smicon1} alt="sm"/>
                                        </div>
                                        <div className="sm-text">
                                            <h5>Telegram</h5>
                                            <p>Chat in real time with the Eden community</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="s-inline-box p-4">
                                    <div className="d-flex">
                                        <div className="sm-icon me-3">
                                            <img src={smicon2} alt="sm"/>
                                        </div>
                                        <div className="sm-text">
                                            <h5>Reddit</h5>
                                            <p>Chat in real time with the Eden community</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="s-inline-box p-4">
                                    <div className="d-flex">
                                        <div className="sm-icon me-3">
                                            <img src={smicon5} alt="sm"/>
                                        </div>
                                        <div className="sm-text">
                                            <h5>Instagram</h5>
                                            <p>Chat in real time with the Eden community</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="s-inline-box p-4">
                                    <div className="d-flex">
                                        <div className="sm-icon me-3">
                                            <img src={smicon6} alt="sm"/>
                                        </div>
                                        <div className="sm-text">
                                            <h5>Facebook</h5>
                                            <p>Chat in real time with the Eden community</p>
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
