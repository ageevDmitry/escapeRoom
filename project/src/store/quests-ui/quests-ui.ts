import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, DEFAULT_FILTERS_TYPE} from '../../const';
import {QuestsUI} from '../../types/state';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState: QuestsUI = {
  filterGenreType: DEFAULT_FILTERS_TYPE.GenresType,
  filterLevelType: DEFAULT_FILTERS_TYPE.DifficultyType
};

export const questsUI = createSlice({
  name: NameSpace.QuestsUI,
  initialState,
  reducers: {
    changeFilterGenreType: (state, action: PayloadAction<{ type: string}>) => {
      state.filterGenreType = action.payload.type;
    },
    changeFilterLevelType: (state, action: PayloadAction<{ type: string}>) => {
      state.filterLevelType = action.payload.type;
    },
  }
});

export const {changeFilterGenreType, changeFilterLevelType} = questsUI.actions;
