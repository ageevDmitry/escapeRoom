import {AuthorizationStatus} from '../const';
import {UserData} from '../types/user-data';
import {Quest} from './quest';
import {QuestDetail, QuestBooking, QuestBooked, QuestReservation} from './quest';
import {store} from '../store';

export type UserProcess = {
    authorizationStatus: AuthorizationStatus;
    userData: UserData | null;
  };

export type QuestsData = {
    quests: Quest[];
    questDetail?: QuestDetail;
    questBooking?: QuestBooking;
    questBooked?: QuestBooked;
    questsReservation: QuestReservation[];
    isDataLoading: boolean;
    isSuccess: boolean;
};

export type QuestsUI = {
    filterGenreType: string;
    filterLevelType: string;
}

export type DataError = {
    isDataError: boolean;
  };

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
