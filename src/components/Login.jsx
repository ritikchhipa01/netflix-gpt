import React, { useState } from 'react'
import Header from './Header';

import "../App.css";

const Login = () => {

  const [isSignIn, setisSignIN] = useState(true);
  const isSignInForm = () => {
    setisSignIN(!isSignIn);
  }
  return (
    <div className=' banner flex h-[100vh] justify-center items-center relative '>
      <div className='w-full h-full bg-black/50 absolute' />

      <div className='absolute top-0 left-0'>
        <Header />
      </div>

      <form className='relative p-12 bg-black/80 rounded-md  flex flex-col justify-center items-center w-[30%]'>
        <h1 className='text-white self-start text-3xl font-semibold'>{isSignIn ? "Sign In" : "Sign Up"} </h1>

        {!isSignIn &&
          <input
            type='text'
            placeholder='Full Name'
            className=' text-white py-3 px-4 w-full border-none rounded-sm bg-[#333333] mt-8 outline-none' />
        }
        <input type='text' placeholder='Email or phone number' className={ `text-white py-3 px-4 w-full border-none rounded-sm bg-[#333333] ${isSignIn ? "mt-8" : "mt-5"}  outline-none` }/>
        <input type='password' placeholder='Password' className='py-3 px-4 text-white rounded-sm  w-full bg-[#333333] mt-5 outline-none' />

        <button className='text-white bg-red-500 w-full py-2 mt-14 rounded-sm' onClick={isSignInForm}>
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className='py-4 text-white self-start cursor-pointer' onClick={isSignInForm}>{isSignIn ? "New to Netfilx? Sign Up" : "Already have an account? Sign In"} </p>
      </form>
    </div>


  )
}

export default Login;
