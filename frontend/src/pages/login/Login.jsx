import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useLogin} from "../../hooks/useLogin.js"
const Login = () => {

  const [inputs, setInputs]= useState({
    username:"",
    password:""
  })
  const {login, loading} = useLogin(); 
  const handleSubmit = async(e)=>{
    e.preventDefault();
    await login(inputs);
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Login
          <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text  text-white'>Username</span>
            </label>
            <input 
            type="text"  
            placeholder="Enter username" 
            className=' w-full input input-bordered h-10 bg-neutral-800 text-white'
            value={inputs.username}
            onChange={(e)=> setInputs({...inputs, username:e.target.value})}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text   text-white'>Password</span>
            </label>
            <input 
            type="password"  
            placeholder="Enter password" 
            className=' w-full input input-bordered h-10 bg-neutral-800 text-white'
            value={inputs.password}
            onChange={(e)=> setInputs({...inputs, password:e.target.value})}
            />
          </div>
          <div>
          <Link to={"/signup"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block  text-white' >
            {"Don't"} have an account?
          </Link>
          </div>

          <div>
            <button className='btn btn-block btn-sm mt-2' disabled = {loading}>
            {
                loading? <span className=' bg-white loading loading-spinner'></span>:"Login"
              }
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Login