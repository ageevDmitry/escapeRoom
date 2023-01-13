import {Quest} from './quest';
import {store} from '../store';

export type QuestsData = {
    quests: Quest[];
    isDataLoading: boolean;
    isSuccess: boolean;
};

export type QuestsUI = {
    filterType: string;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

