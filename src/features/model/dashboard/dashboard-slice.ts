import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IDashboard} from "../../../shared/types/types";
import {ISetTasksToDashboard, IInitState} from "./dashboard-types";

export const initialState: IInitState = {
    dashboardList: [],
    tasks: {}
};


export const DashboardSlice = createSlice({
    name: 'CounterSlice',
    initialState,
    reducers: {
        setDashboardList: (state, action: PayloadAction<IDashboard[]>) => {
            state.dashboardList = action.payload
        },
        setTasksToDashboard: (state, action: PayloadAction<ISetTasksToDashboard>) => {
            const {dashboardId, taskList} = action.payload
            state.tasks[dashboardId] = taskList
        },
        removeDashboardTasksTC: (state, action: PayloadAction<string>) => {
            delete state.tasks[action.payload]
        }
    }
});

export const {
    setDashboardList,
    setTasksToDashboard,
    removeDashboardTasksTC
} = DashboardSlice.actions;

export const DashboardSliceReducer = DashboardSlice.reducer;