import Model from '../Components/Model'
import Testimonials from '../Components/Testimonials'
import Hero from '../Components/Hero'
import FeaturesSection from '../Components/Features'
import FamousServices from '../Components/FamousServices'
import HowItWorks from '../Components/HowItWorks'
import EmergencyServices from '../Components/EmergencyServices'
import WhyChooseUs from '../Components/WhyChooseUs'

export default function() {
    return (
        <>
            <Hero />
            {/* <EmergencyServices /> */}
            <FamousServices />
            {/* <WhyChooseUs /> */}
            <FeaturesSection />
            <HowItWorks />
            <Model />
            <Testimonials />
        </>
    )
}