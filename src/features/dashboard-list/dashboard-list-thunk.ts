import {DashboardListApi} from './dashboard-list-api'
import {AppThunk} from '../../store/store'
import {setDashboardList} from './dashboard-list-slice'

export const getDashboardListTC = (): AppThunk => async (dispatch) => {
    try {
        const res = await DashboardListApi.getDashboardList()
        dispatch(setDashboardList(res.data))
    } catch (e) {
        alert(e)
    }
}

export const createDashboardTC = (title: string): AppThunk => async (dispatch) => {
    try {
        const res = await DashboardListApi.createDashboard(title)
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
        await DashboardListApi.updateDashboard(title, id)
        dispatch(getDashboardListTC())
    } catch (e) {
        alert(e)
    }
}

export const deleteDashboardTC = (id: string): AppThunk => async (dispatch) => {
    try {
        const res = await DashboardListApi.deleteDashboard(id)
        if (res.data.resultCode === 0) {
            dispatch(getDashboardListTC())
        } else {
            alert(res.data.messages[0])
        }
    } catch (e) {
        alert(e)
    }
}