import { Suspense } from 'react'
import Loader from './Loader/Loader'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Router from './Routes/AppLayout'

const Home = React.lazy(() => import ('./Pages/Home'))
const Service = React.lazy(() => import ('./Pages/Service'))
const Contact = React.lazy(() => import ('./Pages/Contact'))
const Register = React.lazy(() => import ('./Pages/Register'))
           

export default() => {
    return (
        <>
            <Suspense fallback={
                <div className='w-full h-screen flex items-center justify-center'>
                    <Loader />
                </div>
            }>
                <RouterProvider router={Router} />
            </Suspense>
        </>
    )
}