import {ITask} from "../../../shared/types/types";

export interface ISetTasksToDashboard {
    dashboardId: string
    taskList: ITask[]
}