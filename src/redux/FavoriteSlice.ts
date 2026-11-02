import { createSlice } from "@reduxjs/toolkit";


const favoriteSlice=createSlice({
    name:"favorite",
    initialState:{
        favoriteProducts:JSON.parse(localStorage.getItem("favoritesProduct")||"[]")
    },
    reducers:{
        addFavorites:(state,action)=>{
            const favorites=state.favoriteProducts.push(action.payload)
localStorage.setItem("favoritesProduct",favorites)
        }
    }
})
export default favoriteSlice.reducer