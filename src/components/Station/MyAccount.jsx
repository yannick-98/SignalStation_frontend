import React from 'react'
import { NavLink } from 'react-router-dom'

const MyAccount = () => {
    return (
        <div className='flex flex-col px-4 pt-1 text-lg'>
            <p className='text-sm text-orange-600'>Personal info:</p>
            <p>Username: Yannick98</p>
            <p>Name: Yannick Castaño</p>
            <p>Email: yannick@gmail.com</p>
            <p>Current plan: PRO</p>
            <br />
            <p className='text-sm text-orange-600'>Options:</p>
            <NavLink>Change password</NavLink>
            <NavLink>Delete account</NavLink>
        </div>
    )
}

export default MyAccount
