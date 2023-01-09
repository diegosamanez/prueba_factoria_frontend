import { axiosClient } from "../config/axios.config";
import Image from "../entities/Image.interface";

export const getImages = async (): Promise<Image[]> => {
    const response = await axiosClient.get<Image[]>('/images');
    return response.data;
}

export const createImage = async (image: FormData): Promise<Image> => {
    const response = await axiosClient.post<Image>('/images', image);
    return response.data;
}

export const updateImage = async (id: number, image: FormData): Promise<Image> => {
    const response = await axiosClient.put<Image>(`/images/${id}`, image);
    return response.data
}

export const removeImage = async (id: number) => {
    const response = await axiosClient.delete(`/images/${id}`)
    if (response.status === 204) return true
    return false
}