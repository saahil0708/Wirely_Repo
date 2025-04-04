import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import CTA from '../Components/CTA'
import NavbarOriginal from '../Components/NavOriginal'

export default() => {
    return (
        <>
            <Navbar />
            {/* <NavbarOriginal /> */}
            <Outlet />
            <CTA />
            <Footer />  
        </>
    )
}