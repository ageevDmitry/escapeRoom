import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Quest, QuestDetail} from '../../types/quest';

export const getQuests = (state: State): Quest[] => state[NameSpace.QuestsData].quests;
export const getQuestDetail = (state: State): QuestDetail | undefined => state[NameSpace.QuestsData].questDetail;
