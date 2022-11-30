import {configureStore} from '@reduxjs/toolkit';
import typeReducer from './slices/typeSlice';

export default configureStore({
    reducer: {
        type: typeReducer
    }
})