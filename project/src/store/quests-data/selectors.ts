import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Quest} from '../../types/quests';

export const getQuests = (state: State): Quest[] => state[NameSpace.QuestsData].quests;
