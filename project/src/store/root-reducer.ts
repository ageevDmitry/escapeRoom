import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import { dataError } from './data-error/data-error';
import {questsData} from './quests-data/quests-data';
import {questsUI} from './quests-ui/quests-ui';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.UserProcess]: userProcess.reducer,
  [NameSpace.QuestsData]: questsData.reducer,
  [NameSpace.QuestsUI]: questsUI.reducer,
  [NameSpace.DataError]: dataError.reducer,
});
