import axios, { type AxiosInstance } from "axios";
import {type FetchResponse } from "../models/fetch-types";

const apiClient: AxiosInstance =  axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "d76e95778a424c16a85d0803c89f2cd4", 
  },
});

// Функция для получения игр, скрывает детали реализации 
export const getGames = () => {
    return apiClient.get<FetchResponse>("games").then(res => res.data.results);
}

export default apiClient;