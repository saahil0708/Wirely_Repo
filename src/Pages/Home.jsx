import Model from '../Components/Model'
import Testimonials from '../Components/Testimonials'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import FeaturesSection from '../Components/Features'
import StatsSection from '../Components/Features2'
import Footer from '../Components/Footer'

export default function() {
    return (
        <>
            <Hero />
            <FeaturesSection />
            <StatsSection />
            <Model />
            <Testimonials />
        </>
    )
}