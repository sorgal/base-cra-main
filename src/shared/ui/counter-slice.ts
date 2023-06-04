import {createSlice} from '@reduxjs/toolkit';
import {IInitState} from "../types/counter-types";
import type {PayloadAction} from '@reduxjs/toolkit';

export const initialState: IInitState = {
    easy_count: 0,
    hard_count: 0
};

export const CounterSlice = createSlice({
    name: 'CounterSlice',
    initialState,
    reducers: {
        addCount: (state) => {
            state.easy_count = state.easy_count + 1
        },
        subCount: (state) => {
            state.easy_count = state.easy_count - 1
        },
        multipleEasyCount: (state, action: PayloadAction<number>) => {
            state.easy_count = state.easy_count * action.payload
        },
        multipleHardCount: (state, action: PayloadAction<number>) => {
            state.hard_count = state.hard_count * action.payload
        },
        divCount: (state, action: PayloadAction<number>) => {
            if (action.payload != 0) {
                state.hard_count = state.hard_count / action.payload
            }
        },
        addAmount: (state, action: PayloadAction<number>) => {
            state.hard_count += action.payload
        },
        subAmount: (state, action: PayloadAction<number>) => {
            state.hard_count -= action.payload
        }
    }
});

export const {
    addCount,
    subCount,
    divCount,
    multipleHardCount,
    multipleEasyCount,
    addAmount,
    subAmount
} = CounterSlice.actions;

export const CounterSliceReducer = CounterSlice.reducer;