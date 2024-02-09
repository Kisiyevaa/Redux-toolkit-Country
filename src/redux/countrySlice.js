import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../api/api";
import { STATUS } from "../utils/Status";


const initialState = {
    countryItem: [],
    countryItemStatus:STATUS.IDLE,
    countryData:[],
    countryDataStatus:STATUS.IDLE
}

export const getCountry=createAsyncThunk("country",async()=>{
    const response = await fetch(`${API}all`);
    const data = await response.json();
    return data;
})

export const getDataCountry = createAsyncThunk("countryData", async (id) => {
    try {
        const response = await fetch(`${API}/alpha/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching country data:", error);
        throw error;
    }
});


const countrySlice = createSlice({
    name: "card",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        console.log(builder);
        builder.addCase(getCountry.fulfilled, (state, action) => {
            state.countryItem = action.payload
            state.countryItemStatus=STATUS.SUCCESS
        })
        builder.addCase(getCountry.rejected, (state, action) => {
            state.countryItemStatus=STATUS.FAIL
        })
        builder.addCase(getCountry.pending, (state, action) => {
            state.countryItemStatus = STATUS.LOADING
        })
        .addCase(getDataCountry.fulfilled, (state, action) => {
            state.countryDataStatus=STATUS.SUCCESS
            state.countryData  = action.payload
        })
        .addCase(getDataCountry.pending, (state, action) => {
            state.countryDataStatus  = STATUS.LOADING
        })
        .addCase(getDataCountry.rejected, (state, action) => {
            state.countryDataStatus  = STATUS.FAIL
        })
      
    },
});

export default countrySlice.reducer;
