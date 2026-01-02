import { createSlice } from "@reduxjs/toolkit";

 const cartSlice =  createSlice({
    name : "cart",
    initialState : [{id:1}],
    reducers :  {
        addItem (state,action){
            state.push(action.payload)

        },
        removeItem(state,action){
            let newProducts = state.filter(cartProduct =>cartProduct.id !== action.payload )
            return newProducts
        }
    }
});

export default cartSlice.reducer

 export let {addItem,removeItem} = cartSlice.actions~