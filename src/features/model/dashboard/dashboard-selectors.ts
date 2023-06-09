import {RootState} from "../../../store/store";
import {createSelector} from "@reduxjs/toolkit";
import {sortByOrder} from "../../../shared/lib/sort-by-order";

export const getDashboardState = (state: RootState) => state.dashboard

export const getDashboardList = createSelector(
    [getDashboardState],
    (dashboard) => [...dashboard.dashboardList].sort( sortByOrder)
)

export const getTaskList = createSelector(
    [getDashboardState],
    (dashboard) => dashboard.tasks
)

export const getTaskListExt = (state: RootState, id: string) => {
    const taskList = getTaskList(state)[id]
    if (!taskList) {
        return []
    }
    return[...taskList].sort(sortByOrder)
}