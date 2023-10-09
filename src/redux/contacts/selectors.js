import { createSelector } from '@reduxjs/toolkit';
import { selectFilter, selectIsAscSortType } from '../filter/selectors';

export const selectContacts = (state) => state.contacts.items;

export const selectError = (state) => state.contacts.error;

export const selectIsLoading = (state) => state.contacts.isLoading;

const sortedSelectors = [selectContacts, selectIsAscSortType];

const sortedContacts = (contacts, isAscSortType) =>
  [...contacts].sort(({ name: prevName }, { name: nextName }) =>
    isAscSortType
      ? prevName.localeCompare(nextName)
      : nextName.localeCompare(prevName)
  );

const selectSortedContacts = createSelector(sortedSelectors, sortedContacts);

const filteredSelectors = [selectSortedContacts, selectFilter];

const filteredContacts = (contacts, filter) =>
  filter ? contacts.filter(({ name }) => name.includes(filter)) : contacts;

export const selectFilteredContacts = createSelector(
  filteredSelectors,
  filteredContacts
);
