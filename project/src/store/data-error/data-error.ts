import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {DataError} from '../../types/state';
import {fetchQuestsAction,
  fetchQuestDetailAction,
  loginAction,
  logoutAction
} from '../api-action';

const initialState: DataError = {
  isDataError: false,
};

export const dataError = createSlice({
  name: NameSpace.DataError,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.fulfilled, (state) => {
        state.isDataError = false;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.isDataError = true;
      })
      .addCase(fetchQuestDetailAction.fulfilled, (state) => {
        state.isDataError = false;
      })
      .addCase(fetchQuestDetailAction.rejected, (state) => {
        state.isDataError = true;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.isDataError = false;
      })
      .addCase(loginAction.rejected, (state) => {
        state.isDataError = true;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.isDataError = false;
      })
      .addCase(logoutAction.rejected, (state) => {
        state.isDataError = true;
      });
  }
});
