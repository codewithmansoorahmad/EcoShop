import { createSlice } from "@reduxjs/toolkit";
import type productType from "../typescript/ProductsType";


const favoriteSlice=createSlice({
    name:"favorite",
    initialState:{
        favoriteProducts:JSON.parse(localStorage.getItem("favoritesProduct")||"[]")
    },
    reducers:{
        addFavorites:(state,action)=>{
            const favorites=state.favoriteProducts.push(action.payload)
localStorage.setItem("favoritesProduct",favorites)
        },
        removeFavorites:(state,action)=>{
            const filterProducts=state.favoriteProducts.filter((Item:productType)=>Item.id!==action.payload.id)
            localStorage.setItem("favoritesProducts",filterProducts)
        }
    
    }
})
export default favoriteSlice.reducer
export const {addFavorites,removeFavorites}=favoriteSlice.actions