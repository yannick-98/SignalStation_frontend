import React from 'react'
import "./NavStyle.css"
import { NavLink } from 'react-router-dom'
import dollar from '../../img/$.png'
import house from '../../img/houseicon.png'
import alert from '../../img/alert.png'

const NavS = () => {

    return (
        <>
            <section className='hidden sm:flex w-96 max-w-[250px] h-full bg-black bg-opacity-60 px-3 py-14 rounded-xl'>
                <div className='flex flex-col justify-between w-full h-full'>
                    <ul className='flex flex-col gap-2 h-40 w-full mx-2 text-lg '>
                        <li><NavLink to="/Station/Overview" className={({ isActive }) => (isActive ? "text-purple-400" : "")}>Overview</NavLink></li>
                        <li><NavLink to="/Station/Symbols" className={({ isActive }) => (isActive ? "text-purple-400" : "")}>Symbols</NavLink></li>
                        <li><NavLink to="/Station/Signals" className={({ isActive }) => (isActive ? "text-purple-400" : "")}>Signals</NavLink></li>
                        <li><NavLink to="/Station/MyAccount" className={({ isActive }) => (isActive ? "text-purple-400" : "")}>My account</NavLink></li>
                    </ul>
                    <div className='flex flex-col w-full max-h-[50vh] md:p-4 text-center rounded-xl bg-black bg-opacity-40 p-2'>
                        <h1 className='uppercase font-bold text-orange-600 '>Signals</h1>
                        <div className='hiddeBar text-xs overflow-y-scroll'>
                            {signalsList()}
                        </div>
                        <NavLink to="/Station/Signals" className='text-xl'>-{'>'}</NavLink>
                    </div>
                    <p className='w-full text-center text-sm'>@Yannick98</p>
                </div>
            </section>

            <section className='sm:hidden flex fixed bottom-0 w-full bg-black border-t-2'>
                <NavLink to={'/Station/Overview'} className='flex justify-center items-center w-full h-12 hover:scale-110'>
                    <img src={house} alt="" className='w-8 h-6' />
                </NavLink>
                <NavLink to="/Station/Symbols" className='flex justify-center items-center w-full h-12 hover:scale-110'>
                    <img src={dollar} alt="" className='w-4 h-6' />
                </NavLink>
                <NavLink to="/Station/Signals" className='flex justify-center items-center w-full h-12 hover:scale-110'>
                    <img src={alert} alt="" className='w-8 h-6' />
                </NavLink>
            </section>
        </>
    )
}

const signalsList = () => {
    const list = [];
    for (let i = 0; i < 100; i++) {
        list.push(<p key={i} className='text-green-400'>Cruce de medias <span className='text-white'>eur/usd - 12:26</span></p>)
    }
    return list;
}

export default NavS
