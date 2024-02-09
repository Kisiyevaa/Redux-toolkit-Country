import {createSlice} from "@reduxjs/toolkit"

const initialState={
   mode:JSON.parse(localStorage.getItem("darkMode")) || false
}

const ThemeSlice=createSlice({
    name:"theme",
    initialState,
    reducers:{
      toggleDarkMode:(state)=>{
      state.mode=!state.mode
      localStorage.setItem("darkMode",JSON.stringify(state.mode))
      }
    }
})

export const {toggleDarkMode}=ThemeSlice.actions
export default ThemeSlice.reducer