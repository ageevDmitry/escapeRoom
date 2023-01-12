import {Quest} from './quests';
import {store} from '../store';

export type QuestsData = {
    quests: Quest[];
    isDataLoading: boolean;
    isSuccess: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

