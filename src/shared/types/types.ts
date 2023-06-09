import {ITask} from "../../entities/types/types";

export interface IResponseData<T = {}> {
    resultCode: number
    messages: string[]
    data: T
}

export interface IGetTasksData {
    items: ITask[]
    totalCount: number
    error: string | null
}