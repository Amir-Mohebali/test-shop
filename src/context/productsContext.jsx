import {createContext, useReducer} from "react";
import { data } from '../utilities/products'

export const ProductsContext = createContext();
const productsReducer = (state,action)=>{
    switch(action.type){
        default:
            return state;
    }
}
const ProductsContextProvider = ({children}) => {
    const[productsState,dispatch] = useReducer(productsReducer,[data]);
    
    return (
        <ProductsContext.Provider value={{productsState,dispatch}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;