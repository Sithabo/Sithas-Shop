import { createSlice } from "@reduxjs/toolkit";

const filterReducer = createSlice({
    name: 'filter',
    initialState: {key: 'All'},
    reducers: {
        filterGrocery: (state, action) => {
            state.key = action.payload
        }
    }
})

export default filterReducer.reducer;
export const { filterGrocery } = filterReducer.actions;