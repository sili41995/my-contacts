import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import initialState from '../initialState';
import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from './operations';

const handlePending = (state) => ({
  ...state,
  isLoading: true,
});

const handleRejected = (state, { payload }) => ({
  ...state,
  isLoading: false,
  error: payload,
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: initialState.contacts.error,
        items: payload,
      }))
      .addCase(addContact.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: [...state.items, payload],
      }))
      .addCase(deleteContact.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: state.items.filter(({ id }) => id !== payload.id),
      }))
      .addCase(updateContact.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: [...state.items.filter(({ id }) => id !== payload.id), payload],
      }))
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending,
          updateContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected,
          updateContact.rejected
        ),
        handleRejected
      );
  },
});

export default contactsSlice.reducer;
