export interface IDashboard {
    id: string
    title: string
    addedDate: string
    order: number
}

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

export interface ITask {
    description: string
    title: string
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}