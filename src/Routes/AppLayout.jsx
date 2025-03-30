import { createBrowserRouter } from "react-router-dom"
import Outlet from "./Outlet"
import Home from "../Pages/Home"
import Service from "../Pages/Service"
import Contact from "../Pages/Contact"
import Register from "../Pages/Register"
import About from "../Pages/About"
import ServicesPage from "../Components/ServicesPage"

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
            }
        ]
    }
])

export default router