import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IInitState} from "../../ui/dashboard-list/dashboard-list-types";
import {IDashboard, ITask} from "../../../shared/types/types";
import {ISetTasksToDashboard} from "./dashboard-types";

export const initialState: IInitState = {
    dashboardlist: [],
    tasks: {}
};


export const DashboardSlice = createSlice({
    name: 'CounterSlice',
    initialState,
    reducers: {
        setDashboardList: (state, action: PayloadAction<IDashboard[]>) => {
            state.dashboardlist = action.payload
        },
        setTasksToDashboard: (state, action: PayloadAction<ISetTasksToDashboard>) => {
            const {dashboardId, taskList} = action.payload
            state.tasks[dashboardId] = taskList
        }
    }
});

export const {
    setDashboardList,
    setTasksToDashboard
} = DashboardSlice.actions;

export const DashboardSliceReducer = DashboardSlice.reducer;