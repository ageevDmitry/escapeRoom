import {Offer} from '../types/offer';
import {store} from '../store';

export type OffersData = {
    offers: Offer[];
    propertyOffer?: Offer;
    selectedOffer?: Offer;
    isDataLoading: boolean;
    isSuccess: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

