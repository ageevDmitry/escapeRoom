import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, DEFAULT_FILTERS_TYPE} from '../../const';
import {QuestsUI} from '../../types/state';

const initialState: QuestsUI = {
  filterGenreType: DEFAULT_FILTERS_TYPE.GenresType,
  filterLevelType: DEFAULT_FILTERS_TYPE.DifficultyType
};

export const questsUI = createSlice({
  name: NameSpace.QuestsUI,
  initialState,
  reducers: {
    changeFilterGenreType: (state, action) => {
      state.filterGenreType = action.payload.type;
      // state.filterGenreType = 'All';
    },
    changeFilterLevelType: (state, action) => {
      state.filterLevelType = action.payload.type;
      // state.filterLevelType = 'Any';
    },
  }
});

export const {changeFilterGenreType, changeFilterLevelType} = questsUI.actions;
