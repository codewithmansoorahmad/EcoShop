
import { configureStore } from "@reduxjs/toolkit"
import headerReducer from "./HeaderSlice"
const store =configureStore({
    reducer:{
    header:headerReducer
    }  
})
export default store