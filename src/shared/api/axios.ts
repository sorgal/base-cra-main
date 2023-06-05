import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true,
    headers: { "API-KEY": 'af9a348c-19ae-48fb-90d4-f2cbcadc08a9' }
})