
import { useEffect, useState } from "react"
import RestaurantCard from "./restaurant"
import { SWIGGY_API_URL } from "../config"
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import {filterRestaurant} from '../utils/helper'



const Body = ()=>{

    const [searchVal , setSearchVal] = useState();
    const [allRestaurants,setAllRestaurants] = useState([]);

    
    
    let filteredRestaurants = filterRestaurant(allRestaurants,searchVal)
    

    //useEffect to get the restaurants from API
    useEffect(()=>{
        getRestaurants();
    },[])




    async function getRestaurants (){
        try {
            const res = await fetch(SWIGGY_API_URL);
            const dataJson = await res.json();
            setAllRestaurants(dataJson?.data?.cards[2]?.data?.data?.cards);
            
        } catch (error) {
            console.log(error);
            
        }

        

    }

    return (
        <div className="body">
            <div className="searchBar">
                <input type="text" name="searchBar" value={searchVal} placeholder='Search Restaurant'
                onChange={(e)=>{
                    setSearchVal(e.target.value)
                }}/>
                
            </div>

            {
            allRestaurants.length === 0 ? (
                
                

                    <Shimmer/>
                    
            ):(
            <div className="container">
                {
                    filteredRestaurants.map((restaurant)=>{

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