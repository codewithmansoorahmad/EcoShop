
import { configureStore } from "@reduxjs/toolkit"
import headerReducer from "./HeaderSlice"
import favoriteReducer from "./FavoriteSlice"
const store =configureStore({
    reducer:{
    header:headerReducer,
    favorites:favoriteReducer
    }  
})
export type RootState=ReturnType<typeof store.getState>;
export default store