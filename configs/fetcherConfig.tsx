import { axiosInstance } from "./axiosConfig";

export default async function fetcher(endpoint: string) {
  const res = await axiosInstance.get(`${endpoint}`).then((res) => res.data);
  return res;
}
