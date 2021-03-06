import React from 'react'
import AccountBalance from '../components/AccountBalance';
import Navbar from "../components/layout/Navbar";
import ListOfStakes from '../components/ListOfStakes';

export default function coin() {
    return (
        <React.Fragment>
            <Navbar/>
            <div className="coin-main py-60 ms">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-md-5 col-lg-4">
                            <AccountBalance/>
                        </div>
                        <div className="col-md-7 col-lg-8">
                            <ListOfStakes/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
