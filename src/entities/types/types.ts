export interface IDashboard {
    id: string
    title: string
    addedDate: string
    order: number
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

export interface IUser {
    id: number
    email?: string
    login?: string
}