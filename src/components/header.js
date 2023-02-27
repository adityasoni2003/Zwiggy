import logo from '../assets/logo.png'

const Header = ()=>{
    return (
        <div className='header'>
            <img src={logo} alt="Logo"  className='logo'/>
            <ul className='nav-list'>
                <li><a href="">Home</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">Cart</a></li>
            </ul>

        </div>
    )
}

export default Header