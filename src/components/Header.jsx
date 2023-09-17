
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { addlanguage } from '../utils/translateSlice';
import {FiSearch} from 'react-icons/fi'
import faviocn from './netflix.png'
// import { addlanguage } from '../utils/translateSlice';
import {BiLogOutCircle}  from 'react-icons/bi'

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const showGpt = useSelector(store => store.gpt.showGpt);

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
    const translatedText = useSelector((store) => store.txt.translatedText);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened
        });

    }

    const handleGptSearch = () => dispatch(toggleGptSearchView());
    const handleSelect = (event) => dispatch(addlanguage(event.target.value));


    return (
        <div className=' w-screen bg-gradient-to-b from-black flex flex-row md:items-center md:flex-row justify-between absolute z-[100]  pt-3 md:bg-transparent'>
            <img
                className='hidden md:block w-[250px] px-6 py-2 '
                src={LOGO}
                alt='netflix_logo'
            />
            <img
                className=' md:hidden w-[100px] px-6 py-2 '
                src={faviocn}
                alt='netflix_logo'
            />
            {user !== null && <div className='flex gap-[2vw] md:gap-4  items-center md:pr-6 '>

                <select id='select1' onChange={handleSelect} className=' outline-none px-4 py-1 text-black font-medium rounded-sm md:py-2 w-24 md:w-32'>
                    <option value="af">Afrikaans</option>
                    <option value="sq">Albanian</option>
                    <option value="am">Amharic</option>
                    <option value="ar">Arabic</option>
                    <option value="hy">Armenian</option>
                    <option value="as">Assamese</option>
                    <option value="az">Azerbaijani (Latin)</option>
                    <option value="bn">Bangla</option>
                    <option value="ba">Bashkir</option>
                    <option value="eu">Basque</option>
                    <option value="bs">Bosnian (Latin)</option>
                    <option value="bg">Bulgarian</option>
                    <option value="ca">Catalan</option>
                    <option value="lzh">Chinese (Literary)</option>
                    <option value="sn">chiShona</option>
                    <option value="hr">Croatian</option>
                    <option value="cs">Czech</option>
                    <option value="da">Danish</option>
                    <option value="prs">Dari</option>
                    <option value="dv">Divehi</option>
                    <option value="nl">Dutch</option>
                    <option value="en">English</option>
                    <option value="et">Estonian</option>
                    <option value="fo">Faroese</option>
                    <option value="fj">Fijian</option>
                    <option value="fil">Filipino</option>
                    <option value="fi">Finnish</option>
                    <option value="fr">French</option>
                    <option value="fr-ca">French (Canada)</option>
                    <option value="gl">Galician</option>
                    <option value="ka">Georgian</option>
                    <option value="de">German</option>
                    <option value="el">Greek</option>
                    <option value="gu">Gujarati</option>
                    <option value="ht">Haitian Creole</option>
                    <option value="ha">Hausa</option>
                    <option value="he">Hebrew</option>
                    <option value="hi">Hindi</option>
                    <option value="mww">Hmong Daw (Latin)</option>
                    <option value="hu">Hungarian</option>
                    <option value="is">Icelandic</option>
                    <option value="ig">Igbo</option>
                    <option value="id">Indonesian</option>
                    <option value="ikt">Inuinnaqtun</option>
                    <option value="iu">Inuktitut</option>
                    <option value="iu-Latn">Inuktitut (Latin)</option>
                    <option value="ga">Irish</option>
                    <option value="it">Italian</option>
                    <option value="ja">Japanese</option>
                    <option value="kn">Kannada</option>
                    <option value="kk">Kazakh</option>
                    <option value="km">Khmer</option>
                    <option value="rw">Kinyarwanda</option>
                    <option value="tlh-Latn">Klingon</option>
                    <option value="tlh-Piqd">Klingon (plqaD)</option>
                    <option value="gom">Konkani</option>
                    <option value="ko">Korean</option>
                    <option value="ku">Kurdish (Central)</option>
                    <option value="kmr">Kurdish (Northern)</option>
                    <option value="ky">Kyrgyz (Cyrillic)</option>
                    <option value="lo">Lao</option>
                    <option value="lv">Latvian</option>
                    <option value="lt">Lithuanian</option>
                    <option value="ln">Lingala</option>
                    <option value="dsb">Lower Sorbian</option>
                    <option value="lug">Luganda</option>
                    <option value="mk">Macedonian</option>
                    <option value="mai">Maithili</option>
                    <option value="mg">Malagasy</option>
                    <option value="ms">Malay (Latin)</option>
                    <option value="ml">Malayalam</option>
                    <option value="mt">Maltese</option>
                    <option value="mi">Maori</option>
                    <option value="mr">Marathi</option>
                    <option value="mn-Cyrl">Mongolian (Cyrillic)</option>
                    <option value="my">Myanmar</option>
                    <option value="ne">Nepali</option>
                    <option value="nb">Norwegian</option>
                    <option value="nya">Nyanja</option>
                    <option value="or">Odia</option>
                    <option value="ps">Pashto</option>
                    <option value="fa">Persian</option>
                    <option value="pl">Polish</option>
                    <option value="pt">Portuguese (Brazil)</option>
                    <option value="pt-pt">Portuguese (Portugal)</option>
                    <option value="pa">Punjabi</option>
                    <option value="otq">Queretaro Otomi</option>
                    <option value="ro">Romanian</option>
                    <option value="run">Rundi</option>
                    <option value="ru">Russian</option>
                    <option value="sm">Samoan (Latin)</option>
                    <option value="sr-Cyrl">Serbian (Cyrillic)</option>
                    <option value="sr-Latn">Serbian (Latin)</option>
                    <option value="st">Sesotho</option>
                    <option value="nso">Sesotho sa Leboa</option>
                    <option value="tn">Setswana</option>
                    <option value="sd">Sindhi</option>
                    <option value="si">Sinhala</option>
                    <option value="sk">Slovak</option>
                    <option value="sl">Slovenian</option>
                    <option value="so">Somali (Arabic)</option>
                    <option value="es">Spanish</option>
                    <option value="sw">Swahili (Latin)</option>
                    <option value="sv">Swedish</option>
                    <option value="ty">Tahitian</option>
                    <option value="ta">Tamil</option>
                    <option value="tt">Tatar (Latin)</option>
                    <option value="te">Telugu</option>
                    <option value="th">Thai</option>
                    <option value="bo">Tibetan</option>
                    <option value="ti">Tigrinya</option>
                    <option value="to">Tongan</option>
                    <option value="tr">Turkish</option>
                    <option value="tk">Turkmen (Latin)</option>
                    <option value="uk">Ukrainian</option>
                    <option value="hsb">Upper Sorbian</option>
                    <option value="ur">Urdu</option>
                    <option value="ug">Uyghur (Arabic)</option>
                    <option value="uz">Uzbek (Latin)</option>
                    <option value="vi">Vietnamese</option>
                    <option value="cy">Welsh</option>
                    <option value="xh">Xhosa</option>
                    <option value="yo">Yoruba</option>
                    <option value="yua">Yucatec Maya</option>
                    <option value="zu">Zulu</option>
                </select>
                <button className='hidden md:block md:px-4 py-2 md:bg-red-500 md:text-white md:rounded-sm' onClick={handleGptSearch}>
                    {translatedText && (!showGpt ? translatedText ? translatedText[6] : "GPT Search" : translatedText ? translatedText[11] : "Home")}
                    
                </button>
                <button className='px-4 py-2 bg-red-500 text-white rounded-md md:hidden' onClick={handleGptSearch}>
               <FiSearch className='text-[20px] '/>  
                </button>
                <img className='w-[38px] hidden md:block'
                    src={auth.currentUser.photoURL}
                    alt='avatar'
                />
                <button className=' hidden md:block text-red-700 text-xl md:bg-black md:rounded-sm px-4 py-2' onClick={handleSignOut}>
                    {translatedText ? translatedText[5] : "Sign Out"}
                </button>
                <button className='md:hidden mr-5 text-red-700 text-xl' onClick={handleSignOut}>
                    <BiLogOutCircle className='text-[40px]  bg-black px-1 py-1 rounded-md'/>
                </button>
            </div>
            }
        </div>
    )
}

export default Header
