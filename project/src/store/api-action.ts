import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {Quest} from '../types/quests';
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
