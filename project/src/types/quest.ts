import {QuestLevel, QuestType} from '../const';

export type Quest = {
        id: number;
        title: string;
        previewImg: string;
        previewImgWebp: string;
        level: QuestLevel;
        type: string;
        peopleMinMax: number[];
    }

export type QuestDetail = {
    id: number;
        title: string;
        description: string;
        previewImg: string;
        previewImgWebp: string;
        coverImg: string;
        coverImgWebp: string;
        level: QuestLevel;
        type: QuestType;
        peopleMinMax: number[];
}

type TimeQuest = {
    time: string;
    isAvailable: boolean;
}

type Location = {
    id: number;
    address: string;
    coords: number[];
}

type SlotTime = {
    today: TimeQuest;
    tomorrow: TimeQuest;
}

export type QuestBooking = {
    id: number;
    location: Location[];
    slots: SlotTime[];
}
