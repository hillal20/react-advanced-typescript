import { Reducer, UnknownAction } from "@reduxjs/toolkit";

type InitialStateType = {
    products: string[]
} 
const initialState: InitialStateType | undefined = {
     products: []
}
type StatType = {
    products : string[]
}



export const appReducer: Reducer<StatType, UnknownAction>  = (state: StatType = initialState, action: UnknownAction )  => {
    const payload = action.payload  as {products : {title: string }[]}
    const type = action.type 
    switch (type) {
        case "PRODUCTS":
            let newProducts = [] as string []
            if(payload && payload.products?.length){
                console.log("p ===> ", payload.products)
                newProducts = payload.products.map(e => e.title)
            }
        return  {
           products: newProducts
        } 
        default:
            return state

    }
}
