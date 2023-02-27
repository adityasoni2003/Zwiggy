import React from 'react'
import ReactDOM  from 'react-dom/client'


const Header = ()=>{
    return (
        <div className='header'>
            <img src="" alt="Logo"  className='logo'/>
            <ul className='nav-list'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>

        </div>
    )
}


const App = ()=>{
    return (<>
    <Header/>
    
    </>)
}

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<App/>);