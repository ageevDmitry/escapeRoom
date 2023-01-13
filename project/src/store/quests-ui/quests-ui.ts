import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, DEFAULT_FILTERS_TYPE} from '../../const';
import {QuestsUI} from '../../types/state';

const initialState: QuestsUI = {
  filterType: DEFAULT_FILTERS_TYPE.GenresType,
};

export const questsUI = createSlice({
  name: NameSpace.QuestsUI,
  initialState,
  reducers: {
    changeFilterType: (state, action) => {
      state.filterType = action.payload.type;
    },
  }
});

export const {changeFilterType} = questsUI.actions;
