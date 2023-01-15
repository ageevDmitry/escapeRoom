import {NameSpace, DEFAULT_FILTERS_TYPE} from '../../const';
import {State} from '../../types/state';
import {createSelector} from '@reduxjs/toolkit';
import {Quest} from '../../types/quest';

const getQuests = (state: State): Quest[] => state[NameSpace.QuestsData].quests;
export const getFilterGenreType = (state: State): string => state[NameSpace.QuestsUI].filterGenreType;
export const getFilterLevelType = (state: State): string => state[NameSpace.QuestsUI].filterLevelType;

const getFilterGenreQuests = createSelector(
  [getQuests, getFilterGenreType],
  (quests: Quest[], filterType: string) => {

    let filteredQuests = quests.slice();

    if (filterType !== DEFAULT_FILTERS_TYPE.GenresType) {
      filteredQuests = quests.filter((item: Quest) => item.type === filterType).slice();
    }

    return filteredQuests;
  }
);

export const getFilterQuests = createSelector(
  [getFilterGenreQuests, getFilterLevelType],
  (quests: Quest[], filterType: string) => {

    let filteredQuests = quests.slice();

    if (filterType !== DEFAULT_FILTERS_TYPE.DifficultyType) {
      filteredQuests = quests.filter((item: Quest) => item.level === filterType).slice();
    }

    return filteredQuests;
  }
);
