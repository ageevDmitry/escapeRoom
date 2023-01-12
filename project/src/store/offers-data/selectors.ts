import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offer} from '../../types/offer';

export const getOffers = (state: State): Offer[] => state[NameSpace.OffersData].offers;
export const getPropertyOffer = (state: State): Offer | undefined => state[NameSpace.OffersData].propertyOffer;
export const getIsDataLoading = (state: State): boolean => state[NameSpace.OffersData].isDataLoading;
export const getIsSuccess = (state: State): boolean => state[NameSpace.OffersData].isSuccess;
export const getSelectedOffer = (state: State): Offer | undefined => state[NameSpace.OffersData].selectedOffer;
