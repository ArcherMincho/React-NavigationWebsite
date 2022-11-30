import { createSlice } from "@reduxjs/toolkit";
import { websites, types, subtypeMap, firstSubtypes } from '../WebsitesData';

export const typeSlice = createSlice({
    name: 'type',
    initialState: {
        curType: types[0],
        curSubtypes: firstSubtypes,
    },
    reducers: {
        setCurType: (state, action) => {
            state.curType = action.payload
        }
    }
});

export const { setCurType } = typeSlice.actions;

export default typeSlice.reducer;