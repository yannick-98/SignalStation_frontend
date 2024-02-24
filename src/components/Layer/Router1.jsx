import React from 'react'
import Nav1 from './Nav1'
import Home from '../Pages/Home'
import Station from "../Station/Station"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Symbols from '../Station/Symbols'
import Signals from '../Station/Signals'
import MyAccount from '../Station/MyAccount'
import Overview from '../Station/Overview'

const Router1 = () => {
    return (
        <BrowserRouter >
            <div className='flex justify-center w-screen h-[4vh] '>
                <Nav1 />
            </div>
            <div className='h-[96vh] mx-auto px-2'>
                <Routes>
                    <Route path='/' element={<Home />} />

                    <Route path="/Station" element={<Station />}>
                        <Route index element={<Navigate to="Overview" />} />
                        <Route path='Overview' element={<Overview />} />
                        <Route path='Symbols' element={<Symbols />} />
                        <Route path='Signals' element={<Signals />} />
                        <Route path='MyAccount' element={<MyAccount />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>

    )
}



export default Router1
