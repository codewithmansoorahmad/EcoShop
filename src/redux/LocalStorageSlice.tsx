import { createSlice } from "@reduxjs/toolkit";
import type productType from "../typescript/ProductsType";

const initialState:{allProducts:{products:productType[],categoryProducts:productType[]}}={
    allProducts:{products:JSON.parse((localStorage.getItem("productsAll")||"[]")),
        categoryProducts:JSON.parse((localStorage.getItem("productsAll")||"[]"))

    }
}


const productSlice=createSlice({
    name:"Products",
    initialState,
    reducers:{
        AllProducts:(state,action)=>{
            state.allProducts.products=action.payload
            localStorage.setItem("productsAll",JSON.stringify(state.allProducts))
        }
    }
})
export default productSlice.reducer
export const {AllProducts}=productSlice.actions
