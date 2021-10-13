import React from 'react'
import yarrow from "../../src/assets/images/y-arrow.png";
import icon1 from "../../src/assets/images/icon1.png";
import icon2 from "../../src/assets/images/icon2.png";
import icon3 from "../../src/assets/images/icon3.png";
import icon4 from "../../src/assets/images/icon4.png";
import icon5 from "../../src/assets/images/icon5.png";
import icon6 from "../../src/assets/images/icon6.png";
export default function BannerBottomIcons() {
    return (
        <React.Fragment>
            <div className="baner-icons ms mt-3">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-lg-9 mb-0 mb-md-0">
                            <div className="row">
                                <div className="col-4 col-sm-4 col-md-2 mb-4 mb-md-0">
                                    <a href="#" className="s-icon-box text-center ms py-4">
                                        <div className="icon-img w-100 mb-3">
                                          <img src={icon1} alt="icon"/>
                                        </div>
                                        <h5>Telegram</h5>
                                    </a>
                                </div>
                                <div className="col-4 col-sm-4 col-md-2 mb-4 mb-md-0">
                                    <a href="#" className="s-icon-box text-center ms py-4">
                                        <div className="icon-img w-100 mb-3">
                                          <img src={icon2} alt="icon"/>
                                        </div>
                                        <h5>Reddit</h5>
                                    </a>
                                </div>
                                <div className="col-4 col-sm-4 col-md-2 mb-4 mb-md-0">
                                    <a href="#" className="s-icon-box text-center ms py-4">
                                        <div className="icon-img w-100 mb-3">
                                          <img src={icon3} alt="icon"/>
                                        </div>
                                        <h5>Twitter</h5>
                                    </a>
                                </div>
                                <div className="col-4 col-sm-4 col-md-2 mb-4 mb-md-0">
                                    <a href="#" className="s-icon-box text-center ms py-4">
                                        <div className="icon-img w-100 mb-3">
                                          <img src={icon4} alt="icon"/>
                                        </div>
                                        <h5>Discord</h5>
                                    </a>
                                </div>
                                <div className="col-4 col-sm-4 col-md-2 mb-4 mb-md-0">
                                    <a href="#" className="s-icon-box text-center ms py-4">
                                        <div className="icon-img w-100 mb-3">
                                          <img src={icon5} alt="icon"/>
                                        </div>
                                        <h5>Instagram</h5>
                                    </a>
                                </div>
                                <div className="col-4 col-sm-4 col-md-2 mb-4 mb-md-0">
                                    <a href="#" className="s-icon-box text-center ms py-4">
                                        <div className="icon-img w-100 mb-3">
                                          <img src={icon6} alt="icon"/>
                                        </div>
                                        <h5>Facebook</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="yellow-cat ms px-5 py-4">
                                <h3>Join our<br/> community</h3>
                                <a href="#" className="y-arrow ms">Join now <img src={yarrow} alt="arrow-y"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )       
}
