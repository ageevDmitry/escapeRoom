export const CONTACTS = {
  address: 'Санкт-Петербург, Набережная реки Карповка, д 5П',
  mode: 'Ежедневно, c 10:00 до 22:00',
  phone: '8 (000) 111-11-11',
  phoneHref: 'tel:88003335599',
  mail: 'info@escape-room.ru',
  mailHref: 'mailto:info@escape-room.ru'
};

export const NAV_PAGES = [
  {
    title: 'Квесты',
    href: 'index.html',
  },
  {
    title: 'Контакты',
    href: 'contacts.html',
  },
  {
    title: 'Мои бронирования',
    href: 'my-quests.html',
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
    type: 'adventure',
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
    type: 'sciFi',
    svgLink: 'sci-fi',
  },
];

export const DIFFICULTY_LEVELS = [
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
    type: 'middle',
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

export enum AppRoute {
  Main = '/',
  Quest = '/quest:id',
  Contacts = '/contacts',
  Login = '/login',
  Booking = '/booking',
  MyQuests = '/my-quests',
  NotFound = '/404',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Quests = 'escape-room/quest',
}

export enum NameSpace {
  QuestsData = 'QUESTS-DATA',
  QuestsUI = 'QUESTS-UI',
  DataError = 'DATA-ERROR',
}

export enum QuestLevel {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export const VIEW_QUEST_LEVEL = {
  [QuestLevel.Easy]: 'легкий',
  [QuestLevel.Medium]: 'средний',
  [QuestLevel.Hard]: 'сложный',
} as const;
