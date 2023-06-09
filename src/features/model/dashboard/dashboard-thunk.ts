import {DashboardApi} from '../../api/dashboard/dashboard-api'
import {AppThunk} from '../../../store/store'
import {setDashboardList, setTasksToDashboard, removeDashboardTasksTC} from './dashboard-slice'

export const getDashboardListTC = (): AppThunk => async (dispatch) => {
    try {
        const res = await DashboardApi.getDashboard()
        dispatch(setDashboardList(res.data))
    } catch (e) {
        alert(e)
    }
}

export const createDashboardTC = (title: string): AppThunk => async (dispatch) => {
    try {
        const res = await DashboardApi.createDashboard(title)
        if (res.data.resultCode === 0) {
            dispatch(getDashboardListTC())
        } else {
            alert(res.data.messages[0])
        }
    } catch (e) {
        alert(e)
    }
}

export const updateDashboardTC = (title: string, id: string): AppThunk => async (dispatch) => {
    try {
        await DashboardApi.updateDashboard(title, id)
        dispatch(getDashboardListTC())
    } catch (e) {
        alert(e)
    }
}

export const deleteDashboardTC = (id: string): AppThunk => async (dispatch) => {
    try {
        const res = await DashboardApi.deleteDashboard(id)
        if (res.data.resultCode === 0) {
            dispatch(getDashboardListTC())
        } else {
            alert(res.data.messages[0])
        }
    } catch (e) {
        alert(e)
    }
}

export const getTasksForDashboardTC = (dashboardId: string, page?: number, count?: number): AppThunk => async (dispatch) => {
    try {
        const res = await DashboardApi.getDashboardTasks(dashboardId, page, count)
        const taskList = res.data.items
        dispatch(setTasksToDashboard({dashboardId, taskList}))
    } catch (e) {
        alert(e)
    }
}

export const createTasksForDashboardTC = (dashboardId: string, title: string): AppThunk => async (dispatch) => {
    try {
        const res = await DashboardApi.createDashboardTask(dashboardId, title)
        if (res.data.resultCode === 0) {
            dispatch(getTasksForDashboardTC(dashboardId))
        } else {
            alert(res.data.messages[0])
        }
    } catch (e) {
        alert(e)
    }
}

export const deleteTasksForDashboardTC = (dashboardId: string, taskId: string): AppThunk => async (dispatch) => {
    try {
        const res = await DashboardApi.deleteTask(dashboardId, taskId)
        if (res.data.resultCode === 0) {
            dispatch(getTasksForDashboardTC(dashboardId))
            dispatch(removeDashboardTasksTC(dashboardId))
        } else {
            alert(res.data.messages[0])
        }
    } catch (e) {
        alert(e)
    }
}

export const updateTasksForDashboardTC = (dashboardId: string, taskId: string, title: string, status: boolean): AppThunk => async (dispatch) => {
    try {
        const res = await DashboardApi.updateTask(dashboardId, taskId, title, status)
        if (res.data.resultCode === 0) {
            dispatch(getTasksForDashboardTC(dashboardId))
        } else {
            alert(res.data.messages[0])
        }
    } catch (e) {
        alert(e)
    }
}