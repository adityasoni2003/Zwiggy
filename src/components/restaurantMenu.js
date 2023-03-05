import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { SWIGGY_MENU_URL } from "../config";
import Shimmer from "./shimmer";
import { IMG_CDN_URL } from "../config";




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
        console.log(data);

        }
    return (!restaurant)? <Shimmer/> :(
        <div>
            <h1>Restaurant Name : {restaurant.data.name}</h1>
            <img src={IMG_CDN_URL+restaurant.data.cloudinaryImageId} alt="Restaurant Image" />
            <h3>Cuisines : {restaurant.data.cuisines.join(',')}</h3>
            <h2>Menu</h2>
            <div className="restaurantDishes">{Object.values(restaurant?.data?.menu?.items).map((dish)=>{
                return <p>{dish.name}</p>
            })}</div>
            
        </div>


    )
}


export default RestaurantMenu