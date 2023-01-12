import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {OffersData} from '../../types/state';
import {fetchOffersAction,
} from '../api-action';

const initialState: OffersData = {
  offers: [],
  isDataLoading: false,
  isSuccess: false,
};

export const offersData = createSlice({
  name: NameSpace.OffersData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offers = [];
      });
  }
});
