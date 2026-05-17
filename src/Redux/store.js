import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './Counter/CounterSlice';
import { BrandReducer } from './brand/BrandSlice';

export const store =configureStore({
    reducer:{
        counter:counterReducer,
        brand:BrandReducer
    },
})