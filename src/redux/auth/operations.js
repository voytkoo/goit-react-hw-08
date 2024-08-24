import { createAsyncThunk } from "@reduxjs/toolkit";
import { configApi, setToken, clearToken } from "../../config/configApi";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await configApi.post("/users/signup", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await configApi.post("/users/login", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await configApi.post("/users/logout");
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (savedToken === null) {
      return thunkAPI.rejectWithValue("Please authenticate");
    }
    try {
      setToken(savedToken);
      const { data } = await configApi.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
