import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        addToWishList: (state, action) => {
            if(state.every(
                item => {
                    return item.title !== action.payload.title
                }
            )) {
                state.push(action.payload)
            }
        },
        removeWishList: (state, action) => {
            const indexOfObject = state.findIndex(item => item.title === action.payload.title)
            state.splice(indexOfObject, 1)
        }
    }
})

export default wishListSlice.reducer;
export const {addToWishList, removeWishList} = wishListSlice.actions;