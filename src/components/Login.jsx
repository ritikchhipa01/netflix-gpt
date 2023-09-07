import Header from './Header';
import React, { useRef, useState } from 'react'
import "../App.css";
import { Validate } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { User_Avatar } from '../utils/constant';


const Login = () => {
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const displayName = useRef(null);
  const handleButtonClick = () => {
    let response = Validate(email.current.value, password.current.value);
    seterrorMessage(response);
    if (response) return;

    if (!isSignIn) {
      //signup 
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredentials) => {
          const user = userCredentials.user;

          updateProfile(auth.currentUser, {
            displayName: displayName.current.value, photoURL: User_Avatar
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid,
                email,
                displayName,
                photoURL
              }));

          }).catch((error) => {
            // An error occurred
            // ...
          });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.Message;
          seterrorMessage(errorCode + " " + errorMessage);
        });

    }
    else {
      //sign IN 
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredentials) => {
          const user = userCredentials.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " " + errorMessage)
        })
    }
  }

  const [errorMessage, seterrorMessage] = useState(null);

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

      <form onSubmit={(e) => e.preventDefault()}
        className='relative p-12 bg-black/80 rounded-md  flex flex-col justify-center items-center w-[30%]'>
        <h1 className='text-white self-start text-3xl font-semibold'>{isSignIn ? "Sign In" : "Sign Up"} </h1>

        {!isSignIn &&
          <input
            ref={displayName}
            type='text'
            placeholder='Full Name'
            className=' text-white py-3 px-4 w-full border-none rounded-sm bg-[#333333] mt-8 outline-none' />
        }
        <input
          ref={email}
          type='text'
          placeholder='Email or phone number'
          className={`text-white py-3 px-4 w-full border-none rounded-sm bg-[#333333] ${isSignIn ? "mt-8" : "mt-5"}  outline-none`} />
        <input
          ref={password}
          type='password'
          placeholder='Password'
          className='py-3 px-4 text-white rounded-sm  w-full bg-[#333333] mt-5 outline-none'
        />


        <p className='text-red-500 font-bold text-lg self-start items-center mt-2'>
          {errorMessage == null ? "" : `${errorMessage}`}
        </p>
        <button
          className='text-white bg-red-500 w-full py-2 mt-14 rounded-sm' onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p
          className='py-4 text-white self-start cursor-pointer' onClick={isSignInForm}>{isSignIn ? "New to Netfilx? Sign Up" : "Already have an account? Sign In"}
        </p>
      </form>
    </div>


  )
}

export default Login;
