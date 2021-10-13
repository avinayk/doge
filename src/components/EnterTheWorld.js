import React from 'react'
import fullcat from "../assets/images/fullcat.png";
import person1 from "../assets/images/person1.png";
import person2 from "../assets/images/person2.png";
import person3 from "../assets/images/person3.png";
export default function EnterTheWorld() {
    return (
        <React.Fragment>
            <div className="enter-world ms py-60">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-12 text-center mb-4">
                            <div className="main-heading-center ms">
                                <h6 className="mb-3 rel d-inline-block">Welcome to cryptoloria</h6>
                                <h2>Enter the world of cryptoloria</h2>
                            </div>
                        </div>
                        <div className="col-12 p-0 mb-5">
                            <div className="img-fullcat ms fw-100">
                                <img src={fullcat} alt="fullcat"/>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 d-none d-md-block">
                            <div className="s-person ms rel">
                                <div className="person-image fw-100 ms overflow-hidden rounded-3">
                                    <img src={person1} alt="person"/>
                                </div>
                                <div className="text-person text-center">
                                    <h3>Watch the trailer</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 d-none d-md-block">
                            <div className="s-person ms rel">
                                <div className="person-image fw-100 ms overflow-hidden rounded-3">
                                    <img src={person3} alt="person"/>
                                </div>
                                <div className="text-person text-center">
                                    <h3>Pre-order the Comics</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 d-none d-md-block">
                            <div className="s-person ms rel">
                                <div className="person-image fw-100 ms overflow-hidden rounded-3">
                                    <img src={person2} alt="person"/>
                                </div>
                                <div className="text-person text-center">
                                    <h3>Meet the Characters</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-md-5 d-none d-md-block">
                            <div className="blue-butn text-center">
                                <a href="#" className="d-inline-block text-white">ExploreCrytoloria</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
