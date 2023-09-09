
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user.uid;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse")

            }
            else {
                dispatch(removeUser());
                navigate("/");
            }
        })

        //unsubscribe when component unmounts
        return () => unSubscribe();
    }, []);

    const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.


        }).catch((error) => {
            // An error happened.

        });

    }
    
    const handleGptSearch = () => {
        dispatch(toggleGptSearchView());
    }

    return (
        <div className=' w-screen bg-gradient-to-b from-black flex justify-between absolute z-[100]'>
            <img
                className='w-[250px] px-6 py-2 '
                src={LOGO}
                alt='netflix_logo'
            />
            {user !== null && <div className='flex gap-5 items-center mr-10'>
                <button className='px-4 py-2 bg-yellow-500 rounded-sm' onClick={handleGptSearch}>
                GPT Search
                </button>
                <img className='w-[38px] '
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
