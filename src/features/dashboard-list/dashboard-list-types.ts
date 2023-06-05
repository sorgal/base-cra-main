import {IDashboard} from "../../shared/types/types";

export interface IInitState {
    dashboardlist: IDashboard[]
}

export interface ICreateDashboardData {
    resultCode: number
    messages: string[]
    data: {
        item: IDashboard
    }
}

export interface IDeleteDashboardData {
    resultCode: number
    messages: string[]
    data: {}
}