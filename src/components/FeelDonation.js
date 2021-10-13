import React from 'react'
import qrCode from "../assets/images/qr-code.png";
import qrCat from "../assets/images/qr-cat.png";
export default function FeelDonation() {
    return (
        <React.Fragment>
            <div className="feel-donation py-60 ms">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-md-5">
                        <div className="text-block-heading ms text-center text-md-start">
                                <h6 className="mb-3 rel">Donation</h6>
                                <h3>Feel like donating?</h3>
                                    <p>the next evolution in DeFi platforms. ShibaSwap gives users the ability to provide liquidity, stake, and swap tokens to gain returns through our
                                    <br/>
                                    <br/>
                                    As a community-powered project, MsDoge runs thanks to its amazing volunteers and generous donors. If you would like to pitch in, use the official ERC20 donation wallet here:
                                    <br/>
                                    <br/>
                                    0xB7852D285f31B740318CAb51B<br/>
                                    d0E5E7936073725
                                    <br/><br/>
                                   <b>Accepted:</b> Any ERC20 token<br/>
                                    <b>Preferred:</b> $ETH, $USDC, $MsDoge</p>
                            </div>
                        </div>
                        <div className="col-md-5 offset-md-2">
                            <div className="qr-code ms fw-100 rel">
                                <img src={qrCode} alt="qr-code"/>
                                <div className="qr-cat-box fw-100">
                                <img src={qrCat} alt="qr-car"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
