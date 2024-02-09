import {configureStore} from "@reduxjs/toolkit"
import countrySlice from "./countrySlice"
import themeSlice from "./themeSlice"

export const store=configureStore({
    reducer:{
        card:countrySlice,
        theme:themeSlice
    }
})