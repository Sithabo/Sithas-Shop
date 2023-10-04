import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {value: ''},
    reducers: {
        searchItems: (state, action) => {
            state.value = action.payload
        }
    }
})

export default searchSlice.reducer;
export const {searchItems} = searchSlice.actions;