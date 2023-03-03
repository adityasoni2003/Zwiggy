
import { useEffect, useState } from "react"
import RestaurantCard from "./restaurant"
import { SWIGGY_API_URL } from "../config"
import Shimmer from "./shimmer";




const Body = ()=>{

    const [searchVal , setSearchVal] = useState();
    const [allRestaurants,setAllRestaurants] = useState([]);

    let filteredRestaurants = allRestaurants.filter((restaurant) =>{

        return restaurant?.data?.name?.toLowerCase().includes(searchVal?.toLowerCase());
    })
    if(!searchVal){
        filteredRestaurants = allRestaurants;
    }
    
    


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
                            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
                        )
                    })
                }

            </div>
            )}
        </div>

    )
}


export default Body