import React from 'react'
import Audit from '../components/Audit'
import BannerBottomIcons from '../components/BannerBottomIcons'
import BuyCoin from '../components/BuyCoin'
import EnterTheWorld from '../components/EnterTheWorld'
import FeelDonation from '../components/FeelDonation'
import Graphic from '../components/Graphic'
import HalfContent from '../components/HalfContent'
import HeroBanner from '../components/HeroBanner'
import HowToBuy from '../components/HowToBuy'
import JoinOur from '../components/JoinOur'
import LastestNews from '../components/LastestNews'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import MsStats from '../components/MsStats'
import Rewards from '../components/Rewards'
import RoadMap from '../components/RoadMap'
import SmartChain from '../components/SmartChain'
import Trust from '../components/Trust'
import AccountBalance from "../components/AccountBalance";
import ListOfStakes from "../components/ListOfStakes";
export default function home() {
    return (
        <React.Fragment>
            <Navbar/>
            <HeroBanner/>
            <BannerBottomIcons/>
            <EnterTheWorld/>
            <HalfContent/>
            <Rewards/>
            <BuyCoin/>
            <HowToBuy/>
            <FeelDonation/>
            <Audit/>
            <SmartChain/>
            <MsStats/>
            <Graphic/>
            <RoadMap/>
            <Trust/>
            <JoinOur/>
            <LastestNews/>
            <Footer/>
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
