
import { configureStore } from "@reduxjs/toolkit"
import headerReducer from "./HeaderSlice"
import favoriteReducer from "./FavoriteSlice"
import cartReducer from "./CartSlice"

const store =configureStore({
    reducer:{
    header:headerReducer,
    favorites:favoriteReducer,
    cart:cartReducer
    }  
})
export type RootState=ReturnType<typeof store.getState>;
export default store