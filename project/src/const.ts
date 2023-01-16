export enum AppRoute {
  Main = '/',
  Quest = '/quest/:id',
  Contacts = '/contacts',
  Login = '/login',
  Booking = '/quest/:id/booking',
  MyQuests = '/my-quests',
  NotFound = '/404',
}

export const CONTACTS = {
  address: 'Санкт-Петербург, Набережная реки Карповка, д 5П',
  mode: 'Ежедневно, c 10:00 до 22:00',
  phone: '8 (000) 111-11-11',
  phoneHref: 'tel:88003335599',
  mail: 'info@escape-room.ru',
  mailHref: 'mailto:info@escape-room.ru',
  lat: 59.968137,
  lng: 30.316272,
};

export const NAV_PAGES = [
  {
    title: 'Квесты',
    href: AppRoute.Main,
  },
  {
    title: 'Контакты',
    href: AppRoute.Contacts,
  },
  {
    title: 'Мои бронирования',
    href: AppRoute.MyQuests,
  },
];

export const GENRES = [
  {
    title: 'Все квесты',
    type: 'all',
    svgLink: 'all-quests',
  },
  {
    title: 'Приключения',
    type: 'adventures',
    svgLink: 'adventure',
  },
  {
    title: 'Ужасы',
    type: 'horror',
    svgLink: 'horror',
  },
  {
    title: 'Детектив',
    type: 'mystic',
    svgLink: 'mystic',
  },
  {
    title: 'Мистика',
    type: 'detective',
    svgLink: 'detective',
  },
  {
    title: 'Sci-fi',
    type: 'sci-fi',
    svgLink: 'sci-fi',
  },
];

export const LEVELS = [
  {
    title: 'Любой',
    type: 'any',
  },
  {
    title: 'Легкий',
    type: 'easy',
  },
  {
    title: 'Средний',
    type: 'medium',
  },
  {
    title: 'Сложный',
    type: 'hard',
  },
];

export const SOCIAL_LINKS = [
  {
    type: 'Skype',
    svgLink: 'skype',
    href: 'https://www.skype.com/ru/'
  },
  {
    type: 'ВКонтакте',
    svgLink: 'vk',
    href: 'https://vk.com/'
  },
];

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Quests = 'escape-room/quest',
  Login = 'escape-room/login',
  Logout = 'escape-room/logout',
}

export enum NameSpace {
  UserProcess = 'USER-PROCESS',
  QuestsData = 'QUESTS-DATA',
  QuestsUI = 'QUESTS-UI',
  DataError = 'DATA-ERROR',
}

export enum QuestLevel {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export enum QuestType {
  Adventures = 'adventures',
  Horror = 'horror',
  Detective = 'detective',
  Mystic = 'mystic',
  SciFi = 'sci-fi',
}

export const VIEW_QUEST_LEVEL = {
  [QuestLevel.Easy]: 'легкий',
  [QuestLevel.Medium]: 'средний',
  [QuestLevel.Hard]: 'сложный',
} as const;

export const VIEW_QUEST_TYPE = {
  [QuestType.Adventures]: 'приключения',
  [QuestType.Horror]: 'ужасы',
  [QuestType.Detective]: 'детектив',
  [QuestType.Mystic]: 'мистика',
  [QuestType.SciFi]: 'sci-fi',
} as const;

export enum QuestCardType {
  Main = 'main',
  MyQuests = 'my-quests',
}

export const IS_MY_QUESTS_CARD_TYPE = true;

export enum DEFAULT_FILTERS_TYPE {
  GenresType = 'all',
  DifficultyType = 'any'
}

export const LENGTH_QUEST_DESCRIPTION = 300;

export const MY_QUESTS = 'Мои бронирования';

export enum UrlMapMarket {
  Default = 'img/svg/pin-default.svg',
  Current = 'img/svg/pin-active.svg',
}
