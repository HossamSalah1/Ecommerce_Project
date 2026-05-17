import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


let initialState = {
    loding: false,
    isError: null,
    brandData: []
}

export let getBrands = createAsyncThunk("brand/getBrand",
    async () => {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
        return data.data
    }
)

let BrandSlice = createSlice({
    name: "brand",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getBrands.pending, (state) => {
            state.loding = true
        })
        builder.addCase(getBrands.fulfilled, (state, action) => {
            state.brandData = action.payload
            state.loding = false
        })
        builder.addCase(getBrands.rejected, (state, action) => {
            state.isError = action.payload
            state.loding = false
        })
    }
})


 export let BrandReducer = BrandSlice.reducer