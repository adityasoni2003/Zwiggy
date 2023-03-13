import { useSelector } from "react-redux";


const Cart = ()=>{
    const cartItems = useSelector(store => store?.cartSlice?.items);
    return (
        <div>
            
        </div>
        
    )
}

export default Cart