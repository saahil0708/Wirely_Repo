import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Outlet from "./Outlet"
// import Home from "../Pages/Home"
// import Service from "../Pages/Service"
// import Contact from "../Pages/Contact"
// import Register from "../Pages/Register"
// import About from "../Pages/About"
// import ServicesPage from "../Components/ServicesPage"
// import Profile from "../Pages/Profile"

const Home = React.lazy(() => import ('../Pages/Home'))
const Service = React.lazy(() => import ('../Pages/Service'))
const Contact = React.lazy(() => import ('../Pages/Contact'))
const Register = React.lazy(() => import ('../Pages/Register'))
const About = React.lazy(() => import ('../Pages/About'))
const ServicesPage = React.lazy(() => import ('../Components/ServicesPage'))
const Profile = React.lazy(() => import ('../Pages/Profile'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <Outlet />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About / >
            },
            {
                path: '/service',
                element: <Service />,
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/service/*',
                element: <ServicesPage />
            },
            {
                path: '/profile',
                element: <Profile />
            }
        ]
    }
])

export default router