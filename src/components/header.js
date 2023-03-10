import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logoModified.png'
import useIsOnline from '../utils/useIsOnline'

const Header = ()=>{
    const [isLoggedIn , setLogStatus] = useState(false);
    const isOnline = useIsOnline();

    return (
        <div className='flex w-full justify-between bg-pink-300 shadow-lg  '>
            <Link to={"/"} >
            <img src={logo} alt="Logo"  className='h-[150px] '/>
            </Link>
            <ul className='flex w-[50vw] justify-between self-center text-2xl font-bold '>
                <h1>{isOnline ?'🟢': '🛑'}</h1>
               
                <Link to={"/"} >
                <li>Home</li>
                </Link>
                <Link to={"/about"}>
                <li>About Us</li>
                </Link>
                <Link to={"/contact"}>
                <li>Contact Us</li>
                </Link>
                <Link to={"/cart"}>
                <li>Cart</li>
                </Link>
            </ul>
            {
                (!isLoggedIn)?<button className=" h-10 text-white p-2 hover:cursor-pointer bg-blue-600 rounded w-20 self-center mr-5"  onClick={() => setLogStatus(true)}>Login</button>:<button className=" h-10 w-20 hover:cursor-pointer mr-5 text-white p-2 bg-blue-600 rounded self-center" onClick={() => setLogStatus(false)}>Logout</button>
            }
            

        </div>
    )
}

export default Header