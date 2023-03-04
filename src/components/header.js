import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'

const Header = ()=>{
    const [isLoggedIn , setLogStatus] = useState(false);

    return (
        <div className='header'>
            <img src={logo} alt="Logo"  className='logo'/>
            <ul className='navList'>
                <Link to={"/"}>
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
                (!isLoggedIn)?<button className="logIn" onClick={() => setLogStatus(true)}>Login</button>:<button className="logOut" onClick={() => setLogStatus(false)}>Logout</button>
            }
            

        </div>
    )
}

export default Header