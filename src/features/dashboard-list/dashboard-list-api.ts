import {axiosInstance} from "../../shared/api/axios";
import {IDashboard} from "../../shared/types/types";
import {ICreateDashboardData, IDeleteDashboardData} from './dashboard-list-types'

export const DashboardListApi = {
    /**
     * Get all todolists for authorized user
     */
    getDashboardList: () => axiosInstance.get<IDashboard[]>('/todo-lists'),
    /**
     * Создание тудулиста
     * @param title - название тудулиста
     */
    createDashboard: (title: string) => axiosInstance.post<ICreateDashboardData>('/todo-lists', { title }),
    /**
     * Обновление тудулиста
     * @param id - ID тудулиста
     * @param title - название тудулиста
     */
    updateDashboard: (title: string, id: string) => axiosInstance.put<any>(`/todo-lists/${ id }`, { title }),
    /**
     * Удаление тудулиста
     * @param id - ID тудулиста
     */
    deleteDashboard: (id: string) => axiosInstance.delete<IDeleteDashboardData>(`/todo-lists/${ id }`)
}