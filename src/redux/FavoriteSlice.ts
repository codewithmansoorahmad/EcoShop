import { createSlice } from "@reduxjs/toolkit";


const favoriteSlice=createSlice({
    name:"favorite",
    initialState:{
        favoriteProducts:JSON.parse(localStorage.getItem("favorites")||"[]")
    },
    reducers:{
        addFavorites:(state,action)=>{

        }
    }
})
export default favoriteSlice.reducer