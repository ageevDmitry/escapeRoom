import {QuestLevel, QuestType, QuestDate} from '../const';

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
    today: TimeQuest[];
    tomorrow: TimeQuest[];
}

export type QuestBooking = {
    id: number;
    location: Location[];
    slots: SlotTime;
}

export type QuestBooked = {
    id: number;
    date: string;
    time: string;
    contactPerson: string;
    phone: string;
    withChildren: boolean;
    peopleCount: number;
    locationId: number;
    questId: number;
}

export type QuestReservation = {
        id: number;
        date: QuestDate;
        time: string;
        contactPerson: string;
        phone: string;
        withChildren: boolean;
        peopleCount: number;
        location: Location;
        quest: Quest;
    }
