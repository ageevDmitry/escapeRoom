import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {QuestsData} from '../../types/state';
import {fetchQuestsAction,
  fetchQuestDetailAction,
  fetchQuestBookingAction,
  sendQuestBookedAction,
  fetchQuestsReservationAction
} from '../api-action';
// import type {PayloadAction} from '@reduxjs/toolkit';

const initialState: QuestsData = {
  quests: [],
  questsReservation: [],
  isDataLoading: false,
  isSuccess: false,
};

export const questsData = createSlice({
  name: NameSpace.QuestsData,
  initialState,
  reducers: {
    cleanUpQuestDetail: (state) => {
      state.questDetail = undefined;
    },
    // setQuestBookingMinMax: (state, action: PayloadAction<{type: number[]}>) => {
    //   state.questBookingMinMax = action.payload.type;
    // },
    // cleanQuestBookingMinMax: (state) => {
    //   state.questBookingMinMax = undefined;
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.quests = [];
      })
      .addCase(fetchQuestDetailAction.fulfilled, (state, action) => {
        state.questDetail = action.payload;
      })
      .addCase(fetchQuestBookingAction.fulfilled, (state, action) => {
        state.questBooking = action.payload;
      })
      .addCase(sendQuestBookedAction.pending, (state) => {
        state.isDataLoading = true;
        state.isSuccess = false;
      })
      .addCase(sendQuestBookedAction.fulfilled, (state, action) => {
        state.isDataLoading = false;
        state.isSuccess = true;
      })
      .addCase(sendQuestBookedAction.rejected, (state) => {
        state.isDataLoading = false;
        state.isSuccess = false;
      })
      .addCase(fetchQuestsReservationAction.fulfilled, (state, action) => {
        state.questsReservation = action.payload;
      })
      .addCase(fetchQuestsReservationAction.rejected, (state) => {
        state.questsReservation = [];
      });
  }
});

export const {cleanUpQuestDetail} = questsData.actions;
