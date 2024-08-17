import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox.jsx'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup.js'
const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:""
  })
  
  const { signup, loading } = useSignup(); // Use the custom hook

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          SignUp
          <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Full Name</span>
            </label>
            <input 
            type="text"  
            placeholder="Keshav Singla" 
            className=' w-full input input-bordered h-10 bg-neutral-800 text-white'
            value={inputs.fullName}
            onChange={(e)=> setInputs({...inputs, fullName:e.target.value})}
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
            value={inputs.username}
            onChange={(e)=> setInputs({...inputs, username:e.target.value})}
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
            value={inputs.password}
            onChange={(e)=> setInputs({...inputs, password:e.target.value})}
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
            value={inputs.confirmPassword}
            onChange={(e)=> setInputs({...inputs, confirmPassword:e.target.value})}
            />
          </div>
          <GenderCheckBox onCheckBoxChange ={handleCheckBoxChange} selectGender={inputs.gender}/>
          <div>
            <Link to={"/login"} className='text-sm hover:underline hover:text-blue-600  inline-block text-white' >
              already have an account?
            </Link>
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