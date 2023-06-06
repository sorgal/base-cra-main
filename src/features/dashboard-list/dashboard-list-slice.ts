import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IInitState} from "./dashboard-list-types";
import {IDashboard} from "../../shared/types/types";

export const initialState: IInitState = {
    dashboardlist: []
};

export const DashboardListSlice = createSlice({
    name: 'CounterSlice',
    initialState,
    reducers: {
        setDashboardList: (state, action: PayloadAction<IDashboard[]>) => {
            state.dashboardlist = action.payload
        }
    }
});

export const {
    setDashboardList
} = DashboardListSlice.actions;

export const DashboardSliceReducer = DashboardListSlice.reducer;