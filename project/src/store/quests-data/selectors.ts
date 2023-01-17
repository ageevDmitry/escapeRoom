import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Quest, QuestDetail, QuestBooking, QuestReservation} from '../../types/quest';

export const getQuests = (state: State): Quest[] => state[NameSpace.QuestsData].quests;
export const getQuestDetail = (state: State): QuestDetail | undefined => state[NameSpace.QuestsData].questDetail;
export const getQuestBooking = (state: State) : QuestBooking | undefined => state[NameSpace.QuestsData].questBooking;
export const getQuestReservation = (state: State) : QuestReservation[] | undefined => state[NameSpace.QuestsData].questsReservation;
