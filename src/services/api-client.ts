import axios, { type AxiosInstance } from "axios";

const apiClient: AxiosInstance =  axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "d76e95778a424c16a85d0803c89f2cd4", 
  },
});

export default apiClient;