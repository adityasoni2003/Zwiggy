import { useDispatch } from "react-redux"
import { IMG_CDN_URL } from "../config"
import { deleteItem } from "../utils/cartSlice";


const CartItem = (item)=>{

    const dispatch = useDispatch();
    const handleDelete=(id)=>{
        dispatch(deleteItem(id))


    }
    return (
        <div className="h-80 w-80 border-4 flex flex-col justify-between border-orange-400 p-2 rounded-lg bg-yellow-100 drop-shadow-lg">
            <button className="absolute top-1 right-1 " onClick={()=>handleDelete(item.id)}><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
</svg>
</button>
            <h1 className='text-2xl font-bold'>{item.name}</h1>
            <img src={IMG_CDN_URL + item.cloudinaryImageId } alt="Dish Image" />
            <p className='font-semibold'>{item.category}</p>
            <p className='font-bold text-xl'>{(item.price)/100 +"Rs."}</p>
            </div>

        
    )
}

export default CartItem