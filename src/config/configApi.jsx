import axios from "axios";

export const configApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const setToken = (token) => {
  configApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  configApi.defaults.headers.common.Authorization = ``;
};
