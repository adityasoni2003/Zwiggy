
import { useState } from "react"
import RestaurantCard from "./restaurant"
import { restaurantList } from "../config"

const filterData = (search,restaurants)=>{
    

    const filteredData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
    return filteredData ;

}

const Body = ()=>{

    const [searchVal , setSearchVal] = useState();
    const [restaurants,setRestaurants] = useState(restaurantList);

    return (
        <div className="body">
            <div className="searchBar">
                <input type="text" name="searchBar" value={searchVal} 
                onChange={(e)=>{
                    setSearchVal(e.target.value)
                }}/>
                <button className="searchBtn"
                onClick={()=>{
                    const data = filterData(searchVal,restaurants);
                    setRestaurants(data);

                }}>Search</button>
            </div>
            <div className="container">
                {
                    restaurants.map((restaurant)=>{
                        return (
                            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
                        )
                    })
                }

            </div>
        </div>

    )
}


export default Body