import { createBrowserRouter } from "react-router-dom"
import Outlet from "./Outlet"
import Home from "../Pages/Home"
import Service from "../Pages/Service"
import Contact from "../Pages/Contact"
import Register from "../Pages/Register"

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
                path: '/service',
                element: <Service />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default router