import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


const   initialState:{inputVal:string}={
        inputVal:""
    }
const HeaderSlice=createSlice({
    name:"header",
  initialState,
    reducers:{
       getInput:(state,action:PayloadAction<string>)=>{
        state.inputVal=action.payload
       }
    }
})
export default HeaderSlice.reducer
export const {getInput}=HeaderSlice.actions