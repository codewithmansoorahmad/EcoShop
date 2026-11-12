import { createSlice } from "@reduxjs/toolkit";
import type productType from "../typescript/ProductsType";

const initialState:{allProducts:productType[]}={
    allProducts:JSON.parse((localStorage.getItem("productsAll")||"[]"))
}


const productSlice=createSlice({
    name:"Products",
    initialState,
    reducers:{
        AllProducts:(state)=>{
            

        }
    }
})
export default productSlice.reducer