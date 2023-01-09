import axios, { AxiosInstance } from 'axios'
import { API_URL } from '../environments';

export const axiosClient: AxiosInstance = axios.create({
    baseURL: API_URL + '/api/v1/'
});