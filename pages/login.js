import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import HeaderThree from '../components/Layouts/HeaderThree';
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'
// import PageTitle from '../components/pricing/PageTitle'
import PricingPlan from '../components/home-one/Pricing'
import LoginComp from '../components/auth/LoginComp'

class Pricing extends React.Component {
    render() {
        return (
            <Preloader>
                <Placeholder>
                    <div className="preloader">
                        <div className="spinner"></div>
                    </div>
                </Placeholder>
                <HeaderThree />
                {/* <PageTitle /> */}
                <LoginComp />
                {/* <Footer /> */}
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </Preloader>
        )
    }
}

export default Pricing