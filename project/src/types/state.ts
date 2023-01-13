import {Quest} from './quest';
import {QuestDetail} from './quest';
import {store} from '../store';

export type QuestsData = {
    quests: Quest[];
    questDetail?: QuestDetail;
    isDataLoading: boolean;
    isSuccess: boolean;
};

export type QuestsUI = {
    filterGenreType: string;
    filterLevelType: string;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

