import React from 'react'
import catPlay from "../assets/images/catplay.png";
export default function SmartChain() {
    return (
        <React.Fragment>
            <div className="smart-chain ms py-60">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 mb-5 text-center mb-5">
                            <div className="text-block-heading ms headingbox-center">
                            <h6 className="mb-3 rel">Tokenomics</h6>
                            <h3>Experience DeFi on the Eden Smart Chain</h3>
                            <p>the next evolution in DeFi platforms. ShibaSwap gives users the ability to provide liquidity, stake, and swap tokens to gain returns through our sophisticated and innovative passive income reward system</p>
                            </div>
                        </div>
                        </div>
                        <div className="row align-items-center">
                        <div className="col-md-6">
                            <div class="accordion accbox-textbox" id="accordionExample">
                            <div class="accordion-item mb-4">
                            <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Review the Gemini dollar smart
                            </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            <p>the next evolution in DeFi platforms. ShibaSwap gives users the ability to provide liquidity, stake, and swap tokens to gain returns through our sophisticated and innovative passive income reward system</p>
                            </div>
                            </div>
                            </div>
                            <div class="accordion-item mb-4">
                            <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Review the Gemini dollar smart
                            </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            <p>Pariatur ad nostrud ut non sint occaecat aliqua quis ullamco labore. Pariatur ad nostrud ut non sint occaecat aliqua quis ullamco labore. Pariatur ad nostrud ut non sint occaecat aliqua quis ullamco labore.</p>
                            </div>
                            </div>
                            </div>
                            <div class="accordion-item mb-4">
                            <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Review the Gemini dollar smart
                            </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            <p>Pariatur ad nostrud ut non sint occaecat aliqua quis ullamco labore. Pariatur ad nostrud ut non sint occaecat aliqua quis ullamco labore. Pariatur ad nostrud ut non sint occaecat aliqua quis ullamco labore.</p>

                            </div>
                            </div>
                            </div>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="image-box ms fw-100">
                                <img src={catPlay} alt="catplay"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
