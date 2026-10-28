import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


const   initialState:{inputVal:string,category:string}={
        inputVal:"",
        category:""
    }
const HeaderSlice=createSlice({
    name:"header",
  initialState,
    reducers:{
       getInput:(state,action:PayloadAction<string>)=>{
        state.inputVal=action.payload
       },
       getCategory:(state,action:PayloadAction<string>)=>{
        state.category=action.payload

       }
    }
})
export default HeaderSlice.reducer
export const {getInput,getCategory}=HeaderSlice.actions