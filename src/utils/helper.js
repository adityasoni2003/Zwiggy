
export const filterRestaurant = (allRestaurants,searchVal)=>{

    let filteredRestaurants = allRestaurants.filter((restaurant) =>{

        return restaurant?.data?.name?.toLowerCase().includes(searchVal?.toLowerCase());
    })
    if(!searchVal){
        filteredRestaurants = allRestaurants;
    }
    return filteredRestaurants
}


