import { configureStore } from "@reduxjs/toolkit"
import  counterSlice  from "../Features/Todo/CounterSlice"
export const store = configureStore({
    reducer:counterSlice
})