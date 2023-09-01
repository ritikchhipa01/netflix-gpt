import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
           
            navigate("/");
        }).catch((error) => {
            // An error happened.
            
        });
        
    }
    return (
        <div className=' w-screen bg-gradient-to-b from-black flex justify-between'>
            <img
                className='w-[250px] px-6 py-2 '
                src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
                alt='netflix_logo'
            />
          {user !== null && <div className='flex gap-5 items-center mr-10'>
                <img className='w-[30px] '
                    src={auth.currentUser.photoURL}
                    alt='avatar'
                />
                <button className=' text-red-700 text-xl' onClick={handleSignOut}>
                    Sign out
                </button>
            </div>
          }
        </div>
    )
}

export default Header
