import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { SWIGGY_MENU_URL } from "../config";

import { IMG_CDN_URL } from "../config";
import DetailShimmer from "./detailshimmer";






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


    
    return  !restaurant  ?<DetailShimmer/>  : (
        <div className="flex flex-col gap-10 mx-10">
            <h1 className="font-bold text-4xl text-center my-4">Restaurant Name : {restaurant.data.name}</h1>
            <img src={IMG_CDN_URL+restaurant.data.cloudinaryImageId} alt="Restaurant Image" className="w-96 rounded-lg mr-auto ml-auto"/>
            <h3 className="font-semibold  text-2xl">Cuisines : {restaurant.data.cuisines.join(',')}</h3>
            <h2 className="font-bold text-3xl underline">Menu</h2>
            <div className="w-[500px] h-[500px] overflow-y-scroll flex flex-col gap-4 ">{Object.values(restaurant?.data?.menu?.items).map((dish)=>{
                return (
                    <div className="flex justify-items-center  justify-start">
                    <img src={ IMG_CDN_URL + dish.cloudinaryImageId} alt="" srcset="" className="h-20 w-20 object-cover" />
                    <p className="font-semibold text-xl self-center place-self-end ml-4">{dish.name}</p>
                    <p className="self-center ml-auto">{dish.price}</p>
                    </div>
                )
            })}</div>
            
        </div>


    )
}


export default RestaurantMenu