import Model from '../Components/Model'
import Testimonials from '../Components/Testimonials'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/footer'
import ServicesPage from '../Components/ServicesPage'
import Service from '../Components/Service'

export default function() {
    return (
        <>
            <Navbar />
            <Service/>
            <ServicesPage/>
            <Hero />
            <Model />
            <Testimonials />
            <Footer />
            
        </>
    )
}