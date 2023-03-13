
import { useEffect, useState,useContext } from "react"
import RestaurantCard from "./restaurant"


import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import {filterRestaurant} from '../utils/helper'
import useIsOnline from "../utils/useIsOnline";
import { locationContext } from "../main";



const Body = ()=>{

    const [searchVal , setSearchVal] = useState();
    const [allRestaurants,setAllRestaurants] = useState([]);
    const cordinates = useContext(locationContext);
   
    let filteredRestaurants = filterRestaurant(allRestaurants,searchVal);
    
    //useEffect to get the restaurants from API
    useEffect(()=>{
        getRestaurants();   
    },[cordinates])
    
    
    
    
    
    
    
  

    async function getRestaurants (){
        try {
            const res = await fetch(`https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=${cordinates?.latitude}&lng=${cordinates?.longitude}&page_type=DESKTOP_WEB_LISTING`);
            const dataJson = await res.json();
            setAllRestaurants(dataJson?.data?.cards[2]?.data?.data?.cards);
            
        } catch (error) {
            console.log(error);
            
        }

        

    }

    const isOnline = useIsOnline();
    if(!isOnline) return <>
    <h1 className="text-4xl font-semibold m-4">🛑 You are Offline.Please Turn On Your Internet</h1>
    <Shimmer/>

    </>

    return (
        <div className="mt-4 mx-12">
            <div className="my-4">
                <input type="text" className="text-black w-80 font-medium text-xl rounded-lg p-1 border-2 border-black" name="searchBar" value={searchVal} placeholder='Search Restaurant'
                onChange={(e)=>{
                    setSearchVal(e.target.value)
                }}/>
                
            </div>

            {
            (allRestaurants?.length === 0 || cordinates.latitude == undefined )? (
                
                

                    <Shimmer/>
                    
            ):(
            <div className="flex flex-wrap gap-10">
                {
                    filteredRestaurants?.map((restaurant)=>{

                        return(
                            <Link to={`restaurant/${restaurant.data.id}`}>
                                <RestaurantCard key={restaurant.data.id} {...restaurant.data} />

                            </Link>
                            
                           
                            
                        )
                    })
                }

            </div>
            )}
        </div>

    )
}


export default Body