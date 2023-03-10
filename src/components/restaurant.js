import {IMG_CDN_URL} from '../config'

const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString
})=>{
    return (
        <div className="h-80 w-80 border-4 flex flex-col justify-between border-orange-400 p-2 rounded-lg bg-yellow-100 drop-shadow-lg">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
            <h2 className='text-2xl font-bold'>{name}</h2>
            <h3>{cuisines.join(" ")}</h3>
            <h4 className='font-semibold'>{lastMileTravelString}</h4>


        </div>
    )

}
export default RestaurantCard