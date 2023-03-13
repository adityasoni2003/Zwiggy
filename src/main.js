import React, { createContext, lazy, Suspense,useState,useEffect } from 'react'
import ReactDOM  from 'react-dom/client'
import { Provider } from 'react-redux'

import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'
import { createBrowserRouter , Outlet, RouterProvider } from 'react-router-dom'
import Shimmer from './components/shimmer'
import zwiggyStore from './utils/store'

const RestaurantMenu = lazy(()=>import('./components/restaurantMenu'));
const Contact = lazy(()=>import('./components/contact'));
const About = lazy(()=>import('./components/about'));
const Profile = lazy(()=> import('./components/profile'));
const Error = lazy(()=>import('./components/error'));
const Cart = lazy(()=>import('./components/Cart'))


export const locationContext = createContext();
export const getLocation = (setState) => {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      setState(pos.coords);
      return pos.coords;
    },
    (err) => {
      throw new Error("allow location to see rest near u");
    }
  );
};


const App = ()=>{
  const [location, setLocation] = useState({});

  useEffect(() => {
    getLocation(setLocation);
  }, []);
    return (<>
    <Provider store={zwiggyStore}>

    <locationContext.Provider value={location}>
      <Header/>
      <Outlet/>
      <Footer/>
    </locationContext.Provider>
    
    </Provider>
    
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
      {path:"/cart",
      element:<Suspense fallback={<Shimmer/>}><Cart/></Suspense>
        
      },
      {path:"/restaurant/:id",
      element:<Suspense fallback={<Shimmer/>}><RestaurantMenu/></Suspense>,}
    ]
    
  },
]);



const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={router}/>);