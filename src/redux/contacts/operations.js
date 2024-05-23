import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi, updateAuthHeader } from "../../config/goitApi";

export const fetchContactsThunk = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { auth } = thunkAPI.getState();

      updateAuthHeader(auth.token);

      const { data } = await goitApi.get("contacts");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const { auth } = thunkAPI.getState();

      updateAuthHeader(auth.token);

      const { data } = await goitApi.post("contacts", contact);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const { auth } = thunkAPI.getState();

      updateAuthHeader(auth.token);

      const { data } = await goitApi.delete(`contacts/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContactThunk = createAsyncThunk(
  "contacts/updateContact",
  async (id, body, thunkAPI) => {
    try {
      const { auth } = thunkAPI.getState();

      updateAuthHeader(auth.token);

      const { data } = await goitApi.patch(`contacts/${id}`, body);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
