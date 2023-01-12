import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from './const';
import {questsData} from './store/quests-data/quests-data';

export const rootReducer = combineReducers({
  [NameSpace.QuestsData]: questsData.reducer,
});
