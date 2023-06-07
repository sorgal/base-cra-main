import {IDashboard, ITask} from "../../../shared/types/types";

export interface ISetTasksToDashboard {
    dashboardId: string
    taskList: ITask[]
}

export interface IInitState {
    dashboardList: IDashboard[]
    tasks: Record<string, ITask[]>
}