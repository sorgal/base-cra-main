import {axiosInstance} from "../../shared/api/axios";
import {IDashboard, IGetTasksData, IResponseData, ITask} from "../../shared/types/types";
import {ICreateDashboardData} from '../ui/dashboard-list/dashboard-list-types'

export const DashboardApi = {
    /**
     * Get all todolists for authorized user
     */
    getDashboard: () => axiosInstance.get<IDashboard[]>('/todo-lists'),
    /**
     * Создание тудулиста
     * @param title - название тудулиста
     */
    createDashboard: (title: string) => axiosInstance.post<IResponseData<ICreateDashboardData>>('/todo-lists', { title }),
    /**
     * Обновление тудулиста
     * @param id - ID тудулиста
     * @param title - название тудулиста
     */
    updateDashboard: (title: string, id: string) => axiosInstance.put<IResponseData>(`/todo-lists/${ id }`, { title }),
    /**
     * Удаление тудулиста
     * @param id - ID тудулиста
     */
    deleteDashboard: (id: string) => axiosInstance.delete<IResponseData>(`/todo-lists/${ id }`),
    /**
     * Получить таски для тудулиста
     * @param dashboardId - ID тудулиста
     * @param page - номер страницы с задачами
     * @param count - количество задач на странице
     */
    getDashboardTasks: (dashboardId: string, page: number = 1, count: number = 10) => axiosInstance.get<IGetTasksData>(`/todo-lists/${ dashboardId }/tasks`, {
        params: { count: count, page: page }
    }),
    /**
     * Создание таски для тудулиста
     * @param dashboardId - ID тудулиста
     * @param title - название таски
     */
    createDashboardTask: (dashboardId: string, title: string) => axiosInstance.post<IResponseData<ITask>>(`/todo-lists/${ dashboardId }/tasks`, { title }),
    /**
     * Удаление таски
     * @param dashboardId - ID тудулиста
     * @param taskId - ID таски
     */
    deleteTask: (dashboardId: string, taskId: string) => axiosInstance.delete<IResponseData>(`/todo-lists/${ dashboardId }/tasks/${ taskId }`),
}