import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/selectors';

export const selectContacts = (state) => state.contacts.items;

export const selectError = (state) => state.contacts.error;

export const selectIsLoading = (state) => state.contacts.isLoading;

const selectors = [selectContacts, selectFilter];

const filteredContacts = (contacts, filter) =>
  filter ? contacts.filter(({ name }) => name.includes(filter)) : contacts;

export const selectFilteredContacts = createSelector(
  selectors,
  filteredContacts
);
