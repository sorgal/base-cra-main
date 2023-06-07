import {IDashboard, ITask} from "../../../shared/types/types";

export interface IInitState {
    dashboardlist: IDashboard[]
    tasks: Record<string, ITask[]>
}

export interface ICreateDashboardData {
    item: IDashboard
}