import React, { lazy, Suspense } from 'react'
import ReactDOM  from 'react-dom/client'

import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'
import { createBrowserRouter , Outlet, RouterProvider } from 'react-router-dom'
import Shimmer from './components/shimmer'

const RestaurantMenu = lazy(()=>import('./components/restaurantMenu'));
const Contact = lazy(()=>import('./components/contact'));
const About = lazy(()=>import('./components/about'));
const Profile = lazy(()=> import('./components/profile'));
const Error = lazy(()=>import('./components/error'));


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
    errorElement:<Suspense><Error/></Suspense>,
    children:[
      {path: "/",
      element: <Body/>,},
      {path: "/about",
      element: <Suspense fallback={<Shimmer/>}><About/></Suspense>,
      children:[{
        path:'profile',
        element:<Suspense><Profile/></Suspense>,
      }]},
      {path: "/contact",
      element: <Suspense fallback={<Shimmer/>}><Contact/></Suspense>,},
      {path:"/restaurant/:id",
      element:<Suspense fallback={<Shimmer/>}><RestaurantMenu/></Suspense>,}
    ]
    
  },
]);



const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={router}/>);