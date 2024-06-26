import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
  updateContactThunk,
} from "./operations";
import { selectNameFilter } from "../filters/slice";
import toast from "react-hot-toast";
import { userLogoutThunk } from "../auth/operations";

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    isError: false,
  },
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  selectors: {
    selectContacts: (state) => state.contacts.items,
    selectIsLoading: (state) => state.contacts.isLoading,
    selectIsError: (state) => state.contacts.isError,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          (item) => item.id !== payload.id
        );
      })
      .addCase(updateContactThunk.fulfilled, (state, { payload }) => {
        const index = state.contacts.items.findIndex((item) => {
          return item.id === payload.id;
        });

        state.contacts.items[index] = payload;
      })

      .addCase(userLogoutThunk.fulfilled, () => {
        return initialState;
      })
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.pending,
          addContactThunk.pending,
          deleteContactThunk.pending,
          updateContactThunk.pending,
          userLogoutThunk.pending
        ),
        (state) => {
          state.contacts.isLoading = true;
          state.contacts.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.fulfilled,
          addContactThunk.fulfilled,
          deleteContactThunk.fulfilled,
          updateContactThunk.fulfilled,
          userLogoutThunk.fulfilled
        ),
        (state) => {
          state.contacts.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          addContactThunk.rejected,
          deleteContactThunk.rejected,
          updateContactThunk.rejected,
          userLogoutThunk.rejected
        ),
        (state) => {
          state.contacts.isLoading = false;
          state.contacts.isError = true;
          toast.error("This didn't work.");
        }
      );
  },
});

export const { selectContacts, selectIsLoading, selectIsError } =
  contactsSlice.selectors;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (items, { name }) =>
    items.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))
);

export const contactsReducer = contactsSlice.reducer;
