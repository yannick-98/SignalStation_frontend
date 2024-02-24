import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav1 = () => {


  return (
    <section id='nav1' className='flex items-center justify-center w-full p-4 fixed top-0 bg-gradient-to-b
     from-black via-black to-transparent  text-white font-bold gap-3 '>
      <div className=' w-full flex justify-between items-center text-center'>
        <NavLink to={'/Station/Overview'}>
          <img src="/src/img/logo1.png" alt="" className='w-40' />
        </NavLink>
        <NavLink className={'text-xs'}>Log in</NavLink>
      </div>
    </section>
  )
}

export default Nav1
