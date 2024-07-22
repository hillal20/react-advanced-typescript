import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './reducer';
import logger from 'redux-logger'


export const store = configureStore({
    reducer: {
        appReducer
    },
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware().concat(logger), // Add logger middleware
    devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


