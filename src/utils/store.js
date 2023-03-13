import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const zwiggyStore = configureStore({
    reducer : {
        cart : cartSlice
    }

});

export default zwiggyStore