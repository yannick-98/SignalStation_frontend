import React from 'react'

const SignCard = () => {
    return (
        <div className="w-72 h-96 border border-orange-600 rounded-xl shadow-md bg-black bg-opacity-40 shadow-orange-600 text-center 
                justify-around space-y-4 ">
            <h2 className='mt-5 uppercase font-bold text-orange-600 ]'>Sign In</h2>

            <form className='flex flex-col text-black mx-10 space-y-2'>
                <input type="email" placeholder='Email' className='rounded bg-orange-200 ' />
                <input type="password" placeholder='Password' className='rounded bg-orange-200' />
                <input type="submit" value="Sign In" className='text-white border rounded-lg p-0.5' />
            </form>

            <p className='text-xs'> or</p>

            <h2 className='mt-5 uppercase font-bold text-orange-600'>Create Account</h2>

            <form className='flex flex-col text-black mx-10 space-y-2'>
                <input type="text" placeholder='Full Name' className='rounded bg-orange-200 ' />
                <input type="email" placeholder='Email' className='rounded bg-orange-200' />
                <input type="password" placeholder='Password' className='rounded bg-orange-200' />
                <input type="submit" value="New Account" className='text-white border rounded-lg p-0.5' />
            </form>

        </div>
    )
}

export default SignCard
