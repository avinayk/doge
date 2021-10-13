import React from 'react'
import ftlogo from "../../assets/images/favicon.png";
export default function Footer() {
    return (
        <React.Fragment>
        <div className="footer-box ms">
            <div className="container-lg">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="ft-border-top ms py-3 d-none d-md-block">
                            <div className="row align-items-center">
                            <div className="col-md-4 col-lg-2">
                            <a href="#" className="ftlogo fw-100">
                            <img src={ftlogo} alt="Logo" /> <span>MsDoge</span>
                            </a>
                            </div>
                            <div className="col-md-8 col-lg-8">
                                <div className="mx-auto d-table text-center">
                                <ul className="ft-nav d-flex p-0 ls">
                                    <li>@2021 Eden Smart Chain</li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms of Service</a></li>
                                </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-2">
                                <select className="language-select">
                                    <option>English</option>
                                    <option>English</option>
                                    <option>English</option>
                                </select>
                            </div>
                            </div>                 
                        </div>
                        <div className="d-block d-md-none">
                            <div className="logo-outer d-flex flex-column justify-content-center border-top border-bottom py-4 text-center">
                            <a href="#" className="ftlogo fw-100 mx-auto mb-3">
                            <img src={ftlogo} alt="Logo" /> <span>MsDoge</span>
                            </a>
                            <ul className="ft-nav d-flex p-0 ls mx-auto">
                                    <li>@2021 Eden Smart Chain</li>
                                </ul>
                            </div>
                            <div className="last-sel py-4">
                            <ul className="ft-nav d-flex align-items-center p-0 ls  justify-content-center">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                                <li> <select className="language-select">
                                <option>English</option>
                                <option>English</option>
                                <option>English</option>
                                </select></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}
