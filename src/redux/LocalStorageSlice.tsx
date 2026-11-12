import { createSlice } from "@reduxjs/toolkit";
import type productType from "../typescript/ProductsType";

const initialState:{allProducts:productType[]}={
    allProducts:JSON.parse((localStorage.getItem("productsAll")||"[]"))
}


const productSlice=createSlice({
    name:"Products",
    initialState,
    reducers:{
        AllProducts:(state,action)=>{
            state.allProducts=action.payload
            localStorage.setItem("productsAll",JSON.stringify(state.allProducts))
        }
    }
})
export default productSlice.reducer
export const {AllProducts}=productSlice.actions
