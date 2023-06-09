import {AppThunk} from "../../../store/store";
import {AuthApi} from "../../api/auth/auth-api";
import {setMe, removeMe} from "./auth-slice";

export const getMeTC = (): AppThunk => async (dispatch) => {
    try {
        const res = await AuthApi.getMe()
        if (res.data.resultCode === 0) {
            dispatch(setMe(res.data))
        } else {
            alert(res.data.messages[0])
        }
    } catch (e) {
        alert(e)
    }
}

export const authMeTC = (email: string, password: string, rememberMe: boolean): AppThunk => async (dispatch) => {
    try {
        const res = await AuthApi.authMe(email, password, rememberMe)
        if (res.data.resultCode === 0) {
            dispatch(setMe(res.data))
        } else {
            alert(res.data.messages[0])
        }
    } catch (e) {
        alert(e)
    }
}

export const logoutMe = (): AppThunk => async (dispatch) => {
    try {
        const res = await AuthApi.getMe()
        if (res.data.resultCode === 0) {
            dispatch(removeMe())
        } else {
            alert(res.data.messages[0])
        }
    } catch (e) {
        alert(e)
    }
}

