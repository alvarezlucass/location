import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import placeReducer from './placeSlice';

export const store = configureStore({
    reducer: {
        place: placeReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
