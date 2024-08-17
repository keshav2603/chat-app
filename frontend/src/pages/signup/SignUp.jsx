import React from 'react'
import GenderCheckBox from './GenderCheckBox.jsx'
const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          SignUp
          <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Full Name</span>
            </label>
            <input 
            type="text"  
            placeholder="Keshav Singla" 
            className=' w-full input input-bordered h-10 bg-neutral-800 text-white'
             />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Username</span>
            </label>
            <input 
            type="text"  
            placeholder="Keshavsingla123" 
            className=' w-full input input-bordered h-10 bg-neutral-800 text-white'
             />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Password</span>
            </label>
            <input 
            type="password"  
            placeholder="Enter password" 
            className=' w-full input input-bordered h-10 bg-neutral-800 text-white'
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Confirm Password</span>
            </label>
            <input 
            type="password"  
            placeholder="Confirm password" 
            className=' w-full input input-bordered h-10 bg-neutral-800 text-white'
            />
          </div>
          <GenderCheckBox/>
          <div>
            <a href="#" className='text-sm hover:underline hover:text-blue-600  inline-block text-white' >
              already have an account?
            </a>
          </div>
          <div>
            <button className='btn btn-block btn-sm mt-2  '>
              SignUp
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default SignUp