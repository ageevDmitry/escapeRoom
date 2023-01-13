import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {Quest, QuestDetail} from '../types/quest';
import {APIRoute} from '../const';

export const fetchQuestsAction = createAsyncThunk<Quest[], undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchQuests',
    async (_arg, {extra: api}) => {
      const {data} = await api.get<Quest[]>(APIRoute.Quests);
      return data;
    },
  );

export const fetchQuestDetailAction = createAsyncThunk<QuestDetail, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchQuestDetail',
    async (id, {extra: api}) => {
      const {data} = await api.get<QuestDetail>(`${APIRoute.Quests}/${id}`);
      return data;
    },
  );
