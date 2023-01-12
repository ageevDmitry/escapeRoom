import {QuestLevel} from '../const';

export type Quest = {
        id: number;
        title: string;
        previewImg: string;
        previewImgWebp: string;
        level: QuestLevel;
        type: string;
        peopleMinMax: number[];
    }
