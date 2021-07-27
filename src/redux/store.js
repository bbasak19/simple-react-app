import {configureStore } from "@reduxjs/toolkit";
import counterReducer from "./state_slices/counter/counterSlice";
import adminReducer from "./state_slices/admin/adminSlice";


export default configureStore({
    reducer:{
        admin: adminReducer,
        counter: counterReducer,
        
    }, 
})