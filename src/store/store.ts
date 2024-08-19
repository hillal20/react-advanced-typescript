import { Reducer, UnknownAction, configureStore, combineReducers } from '@reduxjs/toolkit';
import { appReducer } from './reducer';
import { reduxThunkReducer} from './reduxThunkReducer';
import logger from 'redux-logger'


const rootReducer =  combineReducers({
    appReducer ,
    reduxThunkReducer 
});

export const store = configureStore({
    reducer: rootReducer as unknown as Reducer<any, UnknownAction, any>,
    middleware: (getDefaultMiddleware: any) =>  getDefaultMiddleware().concat(logger), // Add logger middleware
    devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


