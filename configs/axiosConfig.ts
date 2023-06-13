import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.interceptors.request.use((config: any) => {
  //   const token = localStorage.getItem("token");

  config.headers = {
    // token: token ? `Bearer ${token}` : "",
    "Content-Type": config.headers["Content-Type"] || "application/json",
  };
  const method = config.method?.toUpperCase();

  console.log(method);
  
  return config;
});

axiosInstance.interceptors.response.use(
  (response: any) => {
    const {
      config: { method, url },
      data,
    } = response;
    return response;
  },
  (error) => {
    const {
      config: { method, url },
      data,
    } = error.response;

    return Promise.reject(data);
  }
);
