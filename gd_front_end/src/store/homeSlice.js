import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    gd:[],
    refresh: false,
  },
  reducers: {
    getGd: (state,action)=>{
        state.gd = action.payload
    },
    getRefreshState: (state,action)=>{
        state.refresh = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { getGd, getRefreshState
 } = homeSlice.actions

export default homeSlice.reducer