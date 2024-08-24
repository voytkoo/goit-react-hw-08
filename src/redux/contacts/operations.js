import { createAsyncThunk } from "@reduxjs/toolkit";
import { configApi } from "../../config/configApi.jsx";

export const fetchContactsThunk = createAsyncThunk(
  "contacts/fetchAll",
  async (__, thunkAPI) => {
    try {
      const { data } = await configApi.get("contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await configApi.post("contacts", contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      await configApi.delete(`contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
