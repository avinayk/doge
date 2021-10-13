import React from 'react'
//Owl Carousel Libraries and Module
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Owl Carousel Settings
const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 5,
        }
    },
  };
export default function Rewards() {
    return (
        <React.Fragment>
            <div className="reward-box py-60 ms">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="text-block-heading ms text-center text-md-start">
                                <h6 className="mb-3 rel">Rewards</h6>
                                <h3>Experience DeFi on the Eden Smart Chain</h3>
                                <p>the next evolution in DeFi platforms. ShibaSwap gives users the ability to provide liquidity, stake, and swap tokens to gain returns through our</p>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 d-none d-md-block">
                           <div className="icon-text-block-cri p-4">
                              <div className="cri-box mb-3"></div> 
                              <h4 className="mb-2">Review the Gemini dollar smart contract.</h4>
                              <p>the next evolution in DeFi platforms. ShibaSwap gives users the ability to provide liquidity, stake, and swap tokens to gain returns through our sophisticated and innovative passive income reward system</p>
                           </div> 
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 d-none d-md-block">
                           <div className="icon-text-block-cri p-4">
                              <div className="cri-box mb-3"></div> 
                              <h4 className="mb-2">Review the Gemini dollar smart contract.</h4>
                              <p>the next evolution in DeFi platforms. ShibaSwap gives users the ability to provide liquidity, stake, and swap tokens to gain returns through our sophisticated and innovative passive income reward system</p>
                           </div> 
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 d-none d-md-block">
                           <div className="icon-text-block-cri p-4">
                              <div className="cri-box mb-3"></div> 
                              <h4 className="mb-2">Review the Gemini dollar smart contract.</h4>
                              <p>the next evolution in DeFi platforms. ShibaSwap gives users the ability to provide liquidity, stake, and swap tokens to gain returns through our sophisticated and innovative passive income reward system</p>
                           </div> 
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 d-none d-md-block">
                           <div className="icon-text-block-cri p-4">
                              <div className="cri-box mb-3"></div> 
                              <h4 className="mb-2">Review the Gemini dollar smart contract.</h4>
                              <p>the next evolution in DeFi platforms. ShibaSwap gives users the ability to provide liquidity, stake, and swap tokens to gain returns through our sophisticated and innovative passive income reward system</p>
                           </div> 
                        </div>
                        <div className="col-12 d-block d-md-none">
<OwlCarousel className="slider-items owl-carousel" {...options}>
    <div class="item">
        <div className="icon-text-block-cri p-4">
        <div className="cri-box mb-3"></div> 
        <h4 className="mb-2">Review the Gemini dollar smart contract.</h4>
        <p>the next evolution in DeFi platforms. ShibaSwap gives users the ability to provide liquidity, stake, and swap tokens to gain returns through our sophisticated and innovative passive income reward system</p>
        </div>  
    </div>
    <div class="item">
        <div className="icon-text-block-cri p-4">
        <div className="cri-box mb-3"></div> 
        <h4 className="mb-2">Review the Gemini dollar smart contract.</h4>
        <p>the next evolution in DeFi platforms. ShibaSwap gives users the ability to provide liquidity, stake, and swap tokens to gain returns through our sophisticated and innovative passive income reward system</p>
        </div>  
    </div>
    <div class="item">
        <div className="icon-text-block-cri p-4">
        <div className="cri-box mb-3"></div> 
        <h4 className="mb-2">Review the Gemini dollar smart contract.</h4>
        <p>the next evolution in DeFi platforms. ShibaSwap gives users the ability to provide liquidity, stake, and swap tokens to gain returns through our sophisticated and innovative passive income reward system</p>
        </div>  
    </div>
    <div class="item">
        <div className="icon-text-block-cri p-4">
        <div className="cri-box mb-3"></div> 
        <h4 className="mb-2">Review the Gemini dollar smart contract.</h4>
        <p>the next evolution in DeFi platforms. ShibaSwap gives users the ability to provide liquidity, stake, and swap tokens to gain returns through our sophisticated and innovative passive income reward system</p>
        </div>  
    </div>
</OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
