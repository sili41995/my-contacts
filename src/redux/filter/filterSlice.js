import { createSlice } from '@reduxjs/toolkit';
import initialState from '../initialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    changeFilter: (state, action) => ({ ...state, filter: action.payload }),
    changeIsAscSortType: (state) => ({
      ...state,
      isAscSortType: !state.isAscSortType,
    }),
  },
});

export const { changeFilter, changeIsAscSortType } = filterSlice.actions;
export default filterSlice.reducer;
