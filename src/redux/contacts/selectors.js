import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectIsError = (state) => state.contacts.error;

export const selectContactNameFilter = (state) => state.filters.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectContactNameFilter],
  (contacts, filter) => {
    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
