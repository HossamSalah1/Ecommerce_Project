import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 5,
    userName: ""
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increase: (state, action) => {
            console.log(action);
            
            state.counter += 1;

        },
        decrease: (state, action) => {
            state.counter -= 1;

        }
        ,
        increaseByAmount:(state,action)=>{
            console.log(action);
            state.counter += action.payload
            

        }
    }

})
export const counterReducer = counterSlice.reducer;
export const { increase,decrease,increaseByAmount } = counterSlice.actions