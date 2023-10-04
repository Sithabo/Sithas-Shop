import { createSlice } from "@reduxjs/toolkit";
import { items } from "../data/data";

const cartSlice = createSlice({
    name: 'cart',
    initialState: items,
    reducers: {
        cartIncrement: (state, action) => {
           let indexOfItem = state.findIndex(item => item.title === action.payload.title);
           state[indexOfItem].order += 1

        },
        cartDecrement: (state, action) => {
           let indexOfItem = state.findIndex(item => item.title === action.payload.title);
           state[indexOfItem].order -= 1;
        },
        removeOrder: (state, action) => {
           let indexOfItem = state.findIndex(item => item.title === action.payload.title);
           state[indexOfItem].order = 0
        },
        removeAllOrders: (state) => {
            state.forEach(
                item => {
                    item.order = 0;
                }
            )
        },
        addWishlist: (state, action) => {
            let indexOfItem = state.findIndex(item => item.title === action.payload.title);
            if (state[indexOfItem].order === 0) {
                state[indexOfItem].order += 1
            }
            else {
                alert('Item is already in the cart, proceed to the cart')
            }
        }
    }
})

export default cartSlice.reducer;
export const { cartDecrement, cartIncrement, removeOrder, removeAllOrders, addWishlist } = cartSlice.actions;