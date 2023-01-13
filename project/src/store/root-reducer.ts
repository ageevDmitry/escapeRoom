import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {questsData} from './quests-data/quests-data';
import { questsUI } from './quests-ui/quests-ui';

export const rootReducer = combineReducers({
  [NameSpace.QuestsData]: questsData.reducer,
  [NameSpace.QuestsUI]: questsUI.reducer,
});
