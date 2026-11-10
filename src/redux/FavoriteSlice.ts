import { createSlice } from "@reduxjs/toolkit";
import type productType from "../typescript/ProductsType";
const initialState:{favoriteProducts:productType[]}={
     favoriteProducts:JSON.parse(localStorage.getItem("favoritesProduct")||"[]")

}

const favoriteSlice=createSlice({
    name:"favorite",
    initialState,
    reducers:{
        addFavorites:(state,action)=>{
            state.favoriteProducts.push(action.payload)
localStorage.setItem("favoritesProduct",JSON.stringify(state.favoriteProducts))
        },
        removeFavorites:(state,action)=>{
            const filterProducts=state.favoriteProducts.filter((Item:productType)=>Item.id!==action.payload.id)
            

            localStorage.setItem("favoritesProduct",filterProducts)
        }
    
    }
})
export default favoriteSlice.reducer
export const {addFavorites,removeFavorites}=favoriteSlice.actions