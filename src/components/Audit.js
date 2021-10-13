import React from 'react'
import logoBrand from "../assets/images/brand.png"
export default function Audit() {
    return (
        <React.Fragment>
            <div className="audit-box py-60 ms">
                <div className="container-lg">
                    <div className="row align-items-center">
                        <div className="col-lg-4 offset-lg-1 order-lg-2 mb-4 mb-lg-0">
                        <div className="text-block-heading ms text-center text-md-start">
                                <h6 className="mb-3 rel">Audit</h6>
                                <h3>Audit Report</h3>
                                <p>The token has been certified as fully safe by Solidity.</p>
                            <div className="two-butns ms mt-4">
                                <div className="row">
                                <div className="col-6">
                                    <a href="#" className="btn-audit btn-yel">
                                    Binance smart chain
                                    </a>
                                </div>
                                <div className="col-6">
                                <a href="#" className="btn-audit btn-yel-border">
                                Ethereum block chain
                                    </a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-7 order-lg-1">
                            <div className="aud-white-box ms p-5 shadow ">
                                <p>“The Msdoge contract has been audited by Solidity and passed with flying colours. The new contract was designed by @themoontography.<br/><br/>
                                The new contract is FULLY SAFE as Certified by Solidity!”</p>
                                <div className="d-flex mt-4 align-items-center">
                                    <div className="logo-img fw-100">
                                        <img src={logoBrand} alt="au"/>
                                    </div>
                                    <div className="ms-3">
                                        <h5>Solidity Finance</h5>
                                        <p>Smart Contract Auditing Services</p>
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
