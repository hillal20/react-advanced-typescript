import {  Reducer, UnknownAction, createSlice } from "@reduxjs/toolkit";
import { PRODUCTS , ERROR_FETCHING_PRODUCTS} from "../actions/actionTypes";


type StateType = {
    products : string[]
    error: string | null

}
const initialState: StateType | undefined = {
     products: [],
     error: null
}




export const appReducer: Reducer<StateType, UnknownAction>  = (state: StateType= initialState, action: UnknownAction )  => {
    const payload = action.payload  as {products : {title: string }[], error: string}
    const {error} = payload || ''

    const type = action.type 
    switch (type) {
        case PRODUCTS:
            let newProducts = [] as string []
            if(payload && payload.products?.length){
                newProducts = payload.products.map(e => e.title)
            }
        return  {
            error: null,
           products: newProducts
        } 
        case ERROR_FETCHING_PRODUCTS:
        return  {
            error: error,
           products: [],
        } 

        default:
            return state

    }
}



