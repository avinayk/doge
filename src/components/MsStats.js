import React from 'react'

export default function MsStats() {
    return (
        <React.Fragment>
            <div className="ms-stats ms py-60">
                <div className="container-lg">
                    <div className="row align-items-center">
                        <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="text-block-heading ms headingbox-center">
                            <h6 className="mb-3 rel">Coin METRICS</h6>
                            <h3>MsDoge Stats</h3>
                            <p>MsDoge is a viral movement. Take a look at how the movement is growing with these MsDoge statistics!</p>
                            </div>
                        </div>
                        <div className="col-lg-7 offset-lg-1">
                            <div className="row">
                                <div className="col-md-6 mb-4 mb-md-0">
                                    <div className="s-box tw ms p-5 h-100">
                                    <i class="fab fa-twitter"></i>
                                        <h3>48,000 +</h3>
                                        <h5>#Msdoge<br/>
                                        follow us on Twitter</h5>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                <div className="s-box yel-box ms p-5 text-white mb-4">
                                        <h3 className="mb-3">80,000 +</h3>
                                        <h5>Proud MsDoge Holders</h5>
                                    </div>
                                    <div className="s-box gren-box ms p-5 text-white">
                                        <h3 className="mb-3">500,000 +</h3>
                                        <h5>Followers reached via influencer networ</h5>
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
