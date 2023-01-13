import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {createSelector} from '@reduxjs/toolkit';
import {Quest} from '../../types/quest';

const getQuests = (state: State): Quest[] => state[NameSpace.QuestsData].quests;
export const getFilterGenreType = (state: State): string => state[NameSpace.QuestsUI].filterGenreType;
export const getFilterLevelType = (state: State): string => state[NameSpace.QuestsUI].filterLevelType;

export const getFilterQuests = createSelector(
  [getQuests, getFilterGenreType],
  (quests: Quest[], filterType: string) => {

    let filteredQuests = quests.slice();

    if (filterType !== 'all') {
      filteredQuests = quests.filter((item: Quest) => item.type === filterType).slice();
    }

    return filteredQuests;
  }
);
