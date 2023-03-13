import { useDispatch } from "react-redux"
import {addItem} from "../utils/cartSlice"
import { IMG_CDN_URL } from "../config"

const Dishes = (dish)=>{
    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
        dispatch(addItem(item))
    }
    
    
    
    return (
        <div className="flex justify-items-center  justify-start">
            <img src={ IMG_CDN_URL + dish.cloudinaryImageId} alt="" srcset="" className="h-20 w-20 object-cover" />
            <p className="font-semibold text-xl self-center place-self-end ml-4">{dish.name}</p>
            <p className="self-center ml-auto">{dish.price}</p>
            
            <button  onClick={()=>handleAddItem(dish)}>
                <svg className="fill-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </button>
        </div>
    )
}

export default Dishes