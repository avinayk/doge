import React from 'react'
import tick from "../assets/images/tick.png";
import closeimg from "../assets/images/closeimg.png";
import dogimg from "../assets/images/dog.png";
export default function RoadMap() {
    return (
        <React.Fragment>
            <div className="road-map ms py-60">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-12 mb-5 text-center">
                            <h1 className="road-heading text-white">Roadmap</h1>
                        </div>
                        <div className="col-md-3 mb-4 mb-md-5">
                            <div className="check-step ms">
                                <div className="check-tick mb-3 color1">
                                    <img src={tick} alt="tick"/>
                                </div>
                                <h4 className="mb-3 text-white">First steps</h4>
                                <ul className="check-list ms ls p-0">
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                            <div className="ch-box color4 me-3">
                                                <img src={tick} alt="check"/>
                                            </div>
                                                <h5>Baby cake is born</h5>
                                        </div>
                                    </li>
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                            <div className="ch-box color4 me-3">
                                                <img src={tick} alt="check"/>
                                            </div>
                                            <h5>Website launched</h5>
                                        </div>
                                    </li>
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                            <div className="ch-box color4 me-3">
                                                <img src={tick} alt="check"/>
                                            </div>
                                            <h5>Whitepaper released </h5>
                                        </div>
                                    </li>
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                            <div className="ch-box color4 me-3">
                                                <img src={tick} alt="check"/>
                                            </div>
                                            <h5>Brand development</h5>
                                        </div>
                                    </li>
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                            <div className="ch-box color4 me-3">
                                                <img src={tick} alt="check"/>
                                            </div>
                                            <h5>Socials created</h5>
                                        </div>
                                    </li>
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                            <div className="ch-box color4 me-3">
                                                <img src={tick} alt="check"/>
                                            </div>
                                            <h5>Organic awareness campaign</h5>
                                        </div>
                                    </li>
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                            <div className="ch-box color4 me-3">
                                                <img src={tick} alt="check"/>
                                            </div>
                                            <h5>1000 Telegram members</h5>
                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4 mb-md-5">
                            <div className="check-step ms">
                                <div className="check-tick mb-3 color2">
                                    <img src={tick} alt="tick"/>
                                </div>
                                <h4 className="mb-3 text-white">Development stages</h4>
                                <ul className="check-list ms ls p-0">
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                            <div className="ch-box color4 me-3">
                                                <img src={tick} alt="check"/>
                                            </div>
                                                <h5>️CoinMarketCap</h5>
                                        </div>
                                    </li>
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                            <div className="ch-box color4 me-3">
                                                <img src={tick} alt="check"/>
                                            </div>
                                            <h5>CoinGecko</h5>
                                        </div>
                                    </li>
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                            <div className="ch-box color4 me-3">
                                                <img src={tick} alt="check"/>
                                            </div>
                                            <h5>Techrate Audit</h5>
                                        </div>
                                    </li>
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                            <div className="ch-box color5 me-3">
                                                <img src={closeimg} alt="check"/>
                                            </div>
                                            <h5>Certik Audit</h5>
                                        </div>
                                    </li>
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                            <div className="ch-box color5 me-3">
                                                <img src={closeimg} alt="check"/>
                                            </div>
                                            <h5>Influencer marketing push</h5>
                                        </div>
                                    </li>
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                            <div className="ch-box color4 me-3">
                                                <img src={closeimg} alt="check"/>
                                            </div>
                                            <h5>Baby Cake Dashboard (earnings tracking)</h5>
                                        </div>
                                    </li>
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                            <div className="ch-box color4 me-3">
                                                <img src={tick} alt="check"/>
                                            </div>
                                            <h5>10000 Telegram members</h5>
                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4 mb-md-5">
                            <div className="check-step ms">
                                <div className="check-tick mb-3 color3">
                                    <img src={tick} alt="tick"/>
                                </div>
                                <h4 className="mb-3 text-white">Learning to speak</h4>
                                <ul className="check-list ms ls p-0">
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                            <div className="ch-box color4 me-3">
                                                <img src={tick} alt="check"/>
                                            </div>
                                                <h5>Influencers</h5>
                                        </div>
                                    </li>
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                            <div className="ch-box color4 me-3">
                                                <img src={tick} alt="check"/>
                                            </div>
                                            <h5>PooCoin Ads</h5>
                                        </div>
                                    </li>
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                            <div className="ch-box color4 me-3">
                                                <img src={tick} alt="check"/>
                                            </div>
                                            <h5>DexTools Trending</h5>
                                        </div>
                                    </li>
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                            <div className="ch-box color4 me-3">
                                                <img src={tick} alt="check"/>
                                            </div>
                                            <h5>Website Revamp</h5>
                                        </div>
                                    </li>
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                            <div className="ch-box color4 me-3">
                                                <img src={tick} alt="check"/>
                                            </div>
                                            <h5>Community Building</h5>
                                        </div>
                                    </li>
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                            <div className="ch-box color4 me-3">
                                                <img src={tick} alt="check"/>
                                            </div>
                                            <h5>Massive Cake pay-outs</h5>
                                        </div>
                                    </li>
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                            <div className="ch-box color4 me-3">
                                                <img src={tick} alt="check"/>
                                            </div>
                                            <h5>5000 Telegram members</h5>
                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4 mb-md-5">
                            <div className="check-step ms">
                                <div className="check-tick mb-3 color5">
                                    <img src={tick} alt="tick"/>
                                </div>
                                <h4 className="mb-3 text-white">Growing up</h4>
                                <ul className="check-list ms ls p-0">
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                        <div className="ch-box color5 me-3">
                                                <img src={closeimg} alt="check"/>
                                            </div>
                                                <h5>Baby Cake Swap</h5>
                                        </div>
                                    </li>
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                        <div className="ch-box color5 me-3">
                                                <img src={closeimg} alt="check"/>
                                            </div>
                                            <h5>Baby Cake merch shop</h5>
                                        </div>
                                    </li>
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                        <div className="ch-box color5 me-3">
                                                <img src={closeimg} alt="check"/>
                                            </div>
                                            <h5>Baby Cake AR gaming app</h5>
                                        </div>
                                    </li>
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                        <div className="ch-box color5 me-3">
                                                <img src={closeimg} alt="check"/>
                                            </div>
                                            <h5>Building NFT Platform</h5>
                                        </div>
                                    </li>
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                        <div className="ch-box color5 me-3">
                                                <img src={closeimg} alt="check"/>
                                            </div>
                                            <h5>Massive influencer partnerships</h5>
                                        </div>
                                    </li>
                                    <li className="bg-white p-3">
                                        <div className="d-flex">
                                        <div className="ch-box color4 me-3">
                                                <img src={tick} alt="check"/>
                                            </div>
                                            <h5>20000 Telegram members</h5>
                                        </div>
                                    </li>
                                 
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <p className="moreanno ms">More to be announced <img src={dogimg} alt="dog"/></p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
