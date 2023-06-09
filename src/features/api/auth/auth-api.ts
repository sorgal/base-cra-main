import {axiosInstance} from "../../../shared/api/axios";
import {IResponseData} from "../../../shared/types/types";
import {IUser} from "../../../entities/types/types";

export const AuthApi = {
    /**
     * Получение информации о текущем пользователе
     */
    getMe: () => axiosInstance.get<IResponseData<IUser>>('/auth/me'),
    /**
     * Логин пользователя
     * @param email - Email пользователя
     * @param password - Пароль пользователя
     * @param rememberMe - Флаг "Запомнить меня"
     */
    authMe: (email: string, password: string, rememberMe: boolean = false) => axiosInstance.post<IResponseData<IUser>>('/auth/me', { email, password, rememberMe }),
    /**
     * Выход пользователя из системы
     */
    logoutMe: () => axiosInstance.delete<IResponseData>('/auth/me')
}