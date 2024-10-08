import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            let tempcart = state.filter((item) => item.id === action.payload.id);
            if(tempcart < 1){
                state.push(action.payload)
            } else {
                alert("Already Exist")
                return state
            }
        },
        removeProduct: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        },
        increaseQn: (state, action) => {
            let tempcart = state.map((item) => {
                if(item.id === action.payload.id) {
                    return {...item, quantity: item.quantity+1}
                }
                return item;
            })
            return tempcart;
        },
        decreaseQn: (state, action) => {
            let tempcart = state.map((item) => {
                if(item.id === action.payload.id) {
                    return {...item, quantity: item.quantity-1}
                }
                return item;
            })
            return tempcart;
        }
    },
})

export const { addProduct, removeProduct, increaseQn, decreaseQn } = cartSlice.actions;
export default cartSlice.reducer;