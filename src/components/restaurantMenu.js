import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { SWIGGY_MENU_URL } from "../config";
import Shimmer from "./shimmer";




const RestaurantMenu = ()=>{
    const params = useParams();

    const {id } = params;

    const [restaurant,setRestaurant] = useState(null);

    useEffect(()=>{
        getRestaurantInfo();

    },[])
    async function getRestaurantInfo(){
        const res = await fetch(`${SWIGGY_MENU_URL}${id}`);
        const data = await res.json();
        setRestaurant(data);
        console.log(restaurant);

        }
    return (!restaurant)? <Shimmer/> :(
        <div>
            <h1>Restaurant Name : {restaurant.data.name}</h1>
            
        </div>


    )
}


export default RestaurantMenu