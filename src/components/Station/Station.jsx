import React from 'react'
import { Outlet } from 'react-router-dom'
import NavS from './NavS'




const Station = () => {
    return (
        <>
            <div className='flex justify-start items-start w-full h-full '>
                <NavS />

                <section className='w-full h-full overflow-y-scroll pt-8 sm:pt-14 pb-16'
                    style={{ marginTop: "0px" }}>
                    <Outlet />

                </section>
            </div>
        </>
    )
}

export default Station
