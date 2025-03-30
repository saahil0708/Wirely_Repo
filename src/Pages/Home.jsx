import Model from '../Components/Model'
import Testimonials from '../Components/Testimonials'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/footer'
import ServicesPage from '../Components/ServicesPage'

export default function() {
    return (
        <>
            <Navbar />
            <ServicesPage/>
            <Hero />
            <Model />
            <Testimonials />
            <Footer />
            
        </>
    )
}