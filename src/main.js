import React from 'react'
import ReactDOM  from 'react-dom/client'

import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'



const App = ()=>{
    return (<>
    <Header/>
    <Body/>
    <Footer/>
    
    </>)
}

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<App/>);