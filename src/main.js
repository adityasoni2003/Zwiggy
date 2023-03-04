import React from 'react'
import ReactDOM  from 'react-dom/client'

import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'
import { createBrowserRouter , Outlet, RouterProvider } from 'react-router-dom'
import Error from './components/error'
import About from './components/about'
import Contact from './components/contact'
import RestaurantMenu from './components/restaurantMenu'




const App = ()=>{
    return (<>
    <Header/>
    <Outlet/>
    <Footer/>
    
    </>)
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<Error/>,
    children:[
      {path: "/",
      element: <Body/>,},
      {path: "/about",
      element: <About/>,},
      {path: "/contact",
      element: <Contact/>,},
      {path:"/restaurant/:id",
      element:<RestaurantMenu/>,}
    ]
  },
]);



const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={router}/>);