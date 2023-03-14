import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem :(state,action)=>{ state.items.push(action.payload) },
        deleteItem :(state,action)=>{ state.items = state.items.filter((item)=> item.id !== action.payload) },
        clearCart :(state) =>{state.items = []}
    }
})


export const {addItem,deleteItem,clearCart} = cartSlice.actions
export default cartSlice.reducer