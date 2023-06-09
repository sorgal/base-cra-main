import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from "../../../entities/types/types";
import {IInitState} from "./auth-types";

export const initialState: IInitState = {
    user: {}
};


export const AuthSlice = createSlice({
    name: 'CounterSlice',
    initialState,
    reducers: {
        setMe: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
        },
        removeMe: (state) => {
            delete state.user
        }
    }
});

export const {
    setMe,
    removeMe
} = AuthSlice.actions;

export const AuthSliceReducer = AuthSlice.reducer;