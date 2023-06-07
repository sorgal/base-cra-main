import {getDashboardListTC} from "./dashboard-thunk";
import {RootState} from "../../../store/store";
import {createSelector} from "@reduxjs/toolkit";

export const getDashboardState = (state: RootState) => state.dashboard

export const getDashboardList = createSelector(
    [getDashboardState],
    (dashboard) => [...dashboard.dashboardlist].sort( (a, b) => b.order - a.order)
)

export const getTaskList = createSelector(
    getDashboardState,
    (dashboard) => dashboard.tasks
)