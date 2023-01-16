import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {QuestsData} from '../../types/state';
import {fetchQuestsAction,
  fetchQuestDetailAction,
  fetchQuestBookingAction
} from '../api-action';

const initialState: QuestsData = {
  quests: [],
  isDataLoading: false,
  isSuccess: false,
};

export const questsData = createSlice({
  name: NameSpace.QuestsData,
  initialState,
  reducers: {
    cleanUpQuestDetail: (state) => {
      state.questDetail = undefined;
    }
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
      });
  }
});

export const {cleanUpQuestDetail} = questsData.actions;
