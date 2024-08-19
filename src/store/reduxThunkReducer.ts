import { Reducer, createSlice } from "@reduxjs/toolkit";
import { REDUX_THUNK, REDUX_THUNK_ERROR } from "../actions/actionTypes";


const initialState: ThunkStateType  = {
    message: "",
    version: "",
    error: null
}

type ThunkStateType = {
    message: string;
    version: string;
    error: string | null
}

type ThunkActionType = { type: string; payload : { data: ThunkStateType , error: string}}
export const reduxThunkReducer: Reducer<ThunkStateType , ThunkActionType> = (state: ThunkStateType  = initialState, action: ThunkActionType )=> {
   switch(action.type){
    case REDUX_THUNK: 
     return {
        ... action?.payload?.data,
        error: null
     }
     case REDUX_THUNK_ERROR:
        return {
            message: '',
            version: '',
            error: action?.payload?.error

        }
     default :
     return state
   }
}


