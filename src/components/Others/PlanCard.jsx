import React from 'react'
import { NavLink } from 'react-router-dom'

const PlanCard = ({ name, price, description, textColor, borderColor }) => {
    return (
        <div className={`${borderColor} flex flex-col w-72 h-96 border-2 rounded-xl shadow-md  text-center 
        justify-around space-y-4 bg-black bg-opacity-50`}>

            <h2 className={`${textColor} uppercase font-bold text-xl`}>{name}</h2>

            <p className='text-sm mx-2'>{description}</p>

            <p className='text-3xl text-green-500 ml-5'>{price}€ <span className='text-sm text-white'>/month</span></p>

            <NavLink to="/Home" className="uppercase text-xs text-orange-600 border border-orange-600 mx-auto rounded-md p-1">Select plan</NavLink>
        </div>
    )
}

export default PlanCard
