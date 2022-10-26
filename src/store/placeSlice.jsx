import { getPlaces, insertPlace } from "../db/DbIndex";

import Place from "../models/Place";
import { URL_GEOCODING } from "../utils/maps";
import { createSlice } from "@reduxjs/toolkit";
import { get } from "react-native/Libraries/Utilities/PixelRatio";

const initialState = {
    place: [],
};

const placeSlice = createSlice({
    name: 'place',
    initialState,
    reducers: {
        addPlace: (state, action) => {
            const newPlace = new Place(
                action.payload.id.toString(),
                action.payload.title,
                action.payload.image,
                action.payload.address,
                action.payload.coords,
            );
            setPlaces: (state, action) => {
                state.places = action.payload;
            },
        },
    },
});
export const { addPlace, setPlaces} = placeSlice.actions;

export const savePlace = (title, image, coords) => {
    return async (dispatch) => {
        const response = await fetch(URL_GEOCODING(coords?.lat, coords?.lng)),
        if(!response.ok) throw new Error('No se ha podido conectar con el servidor');

        const data = await response.json();
        if(!data.results) throw new Error('No se ha podido encontrar la dirección');
        const address = data.results[0].formatted_address;
        try {
            const result = await insertPlace( title, image, address, coords);
            dispatch(addPlace({ id: result.insertId, title, image, address, coords}));
        } catch (error) {
            console.log('error', error);
            throw error;
        }
    };
};
export const loadPlaces = () => {
    return async (dispatch) => {
        try {
            const result = await getPlaces();
            dispatch(setPlaces(result?.rows?.array));
        }catch (error) {
            console.warn(error);
            throw error;
        }
    };
};
export default placeSlice.reducer;