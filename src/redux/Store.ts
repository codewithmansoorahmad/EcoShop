
import { configureStore } from "@reduxjs/toolkit"
import headerReducer from "./HeaderSlice"
import favoriteReducer from "./FavoriteSlice"
import cartReducer from "./CartSlice"
import ProductsReducer from "./LocalStorageSlice"
const store =configureStore({
    reducer:{
    header:headerReducer,
    favorites:favoriteReducer,
    cart:cartReducer,
    products:ProductsReducer
    }  
})
export type RootState=ReturnType<typeof store.getState>;
export default store