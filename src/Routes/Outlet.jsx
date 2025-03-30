import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import CTA from '../Components/CTA'

export default() => {
    return (
        <>
            <Navbar />
            <Outlet />
            <CTA />
            <Footer />  
        </>
    )
}