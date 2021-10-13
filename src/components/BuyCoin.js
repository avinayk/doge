import React from 'react'
import settingIcon from "../assets/images/setting.png";
export default function BuyCoin() {
    return (
        <React.Fragment>
            <div className="buy-box ms py-60">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 mb-4 mb-md-0">
                            <div className="text-block-heading ms text-center text-md-start">
                            <h6 className="mb-3 rel">Swap</h6>
                            <h3 className="text-white">Buy the coin from our swap</h3>
                            <p className="text-white">the next evolution in DeFi platforms. ShibaSwap gives users the ability to provide liquidity, stake, and swap tokens to gain returns through our
                            <br/>
                            <br/>
                            the next evolution in DeFi platforms. ShibaSwap gives users the ability to provide liquidity, stake, and swap tokens to gain returns through our</p>
                            </div>
                            <div className="yellow-butn ms mt-4 text-center text-md-start">
                                <a href="#" className="d-inline-block py-3 px-4 text-center rounded-3">Open EdenSwap</a>
                            </div>         
                        </div>
                 
                        <div className="col-md-6 col-lg-5 offset-lg-2">
                            <div className="swap-box ms p-4 bg-white">
                                <div className="row align-items-center">
                                    <div className="col-8">
                                        <h2 className="swap-head-text">Swap Tokens</h2>
                                    </div>
                                    <div className="col-4 text-end">
                                        <a href="#"><img src={settingIcon} alt="setting-icon"/></a>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <h6 className="sub-text">Swap your tokens for other tokens</h6>
                                    </div>
                                </div>
                                <div className="vcenter-arrow rel">
                                <div className="bottom-box-sel my-3 p-3">
                                    <div className="row align-items-center">
                                        <div className="col-6">
                                            <select className="">
                                                <option>btc</option>
                                                <option>btc</option>
                                                <option>btc</option>
                                            </select>
                                        </div>
                                        <div className="col-6 text-end">
                                            <h4>0.00</h4>
                                        </div>
                                        <div className="col-12">
                                            <p className="mt-2">Balance: 0.05449 BTC (Max)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-box-sel my-3 p-3">
                                    <div className="row align-items-center">
                                        <div className="col-6">
                                            <select className="">
                                                <option>MSDOGE</option>
                                                <option>MSDOGE</option>
                                                <option>MSDOGE</option>
                                            </select>
                                        </div>
                                        <div className="col-6 text-end">
                                            <h4>0.00</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="enter-amount-text mt-5">
                                    <input type="text" placeholder="Enter an amount"/>
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
