import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartItem from "./CartItem";
import { clearCart } from "../utils/cartSlice";


const Cart = ()=>{
    const cartItems = useSelector(store => store?.cart?.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    };
    return (
        <div className="min-h-[50vh] w-full mt-10 ">
            <div className="flex justify-center  gap-10">
            <h1 className="text-center text-4xl font-bold ">Your Cart</h1>
            <button className="text-xl rounded-md p-2 font-bold bg-violet-500 text-white" onClick={()=>handleClearCart()}>Clear Cart</button>
            

            </div>

            
            <div className="flex flex-wrap gap-10">
                {cartItems.map((item)=>{
                    return <CartItem {...item} key={item.id}/>
                })}

            </div>
            
        </div>
        
    )
}

export default Cart