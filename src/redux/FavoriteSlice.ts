import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";


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
            const filterProducts=state.favoriteProducts.filter((Item)=>Item.id!==action.payload.id)
            localStorage.setItem("favoritesProducts",filterProducts)
        }
    
    }
})
export default favoriteSlice.reducer