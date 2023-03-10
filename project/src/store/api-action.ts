import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {Quest, QuestDetail, QuestBooking, QuestBooked, QuestReservation} from '../types/quest';
import {APIRoute, AppRoute} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {saveToken, dropToken} from '../services/token';
import {redirectToRoute} from './action';

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

export const fetchQuestBookingAction = createAsyncThunk<QuestBooking, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchQuestBooking',
    async (id, {extra: api}) => {
      const {data} = await api.get<QuestBooking>(`${APIRoute.Quests}/${id}/booking`);
      return data;
    },
  );

export const sendQuestBookedAction = createAsyncThunk<QuestBooked, QuestBooked, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/sendQuestBooked',
    async (questBooked, {dispatch, extra: api}) => {
      const {data} = await api.post<QuestBooked>(`${APIRoute.Quests}/${questBooked.id}/booking`, questBooked);
      dispatch(redirectToRoute(AppRoute.MyQuests));
      dispatch(fetchQuestsReservationAction());
      return data;
    },
  );

export const fetchQuestsReservationAction = createAsyncThunk<QuestReservation[], undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchQuestReservation',
    async (_arg, {extra: api}) => {
      const {data} = await api.get<QuestReservation[]>(APIRoute.Reservation);
      return data;
    },
  );

export const deleteQuestBookingAction = createAsyncThunk<string, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/deleteQuestReservation',
    async (id, {dispatch, extra: api}) => {
      const {data} = await api.delete<string>(`${APIRoute.Reservation}/${id}`);
      dispatch(fetchQuestsReservationAction());
      return data;
    },
  );

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/checkAuthAction',
    async (_arg, {dispatch, extra: api}) => {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(fetchQuestsReservationAction());
      return data;
    },
  );

export const loginAction = createAsyncThunk<UserData, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/login',
    async ({login: email, password}, {dispatch, extra: api}) => {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(redirectToRoute(AppRoute.Main));
      dispatch(fetchQuestsReservationAction());
      return data;
    },
  );

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/logout',
    async (_arg, {dispatch, extra: api}) => {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(fetchQuestsAction());
    },
  );
