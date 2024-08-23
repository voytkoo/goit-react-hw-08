import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    const { data } = await axios.post("/users/signup", credentials);
    return data;
  }
);

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const { data } = await axios.post("/users/login", credentials);
  return data;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await axios.post("/users/logout");
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    axios.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;
    const { data } = await axios.get("/users/current");
    return data;
  }
);
