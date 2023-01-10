import { IImage } from "./IImage"
import { IScoreStats } from "./IScore"
import { IStatusStats } from "./IStatus"
import { IGenres } from "./IGenres"

export interface IFullRanobe {
    id: number,
    name: string,
    russian: string,
    image: IImage,
    url: string,
    kind: string,
    score: string,
    status: string,
    volumes: number,
    chapters: number,
    aired_on: string,
    released_on: string,
    english: [string],
    japanese: [string],
    synonyms: [string],
    license_name_ru: null | string,
    description: string,
    description_html: string & HTMLElement,
    description_source: string,
    franchise: string,
    favoured: boolean,
    anons: boolean,
    ongoing: boolean,
    thread_id: number,
    topic_id: number,
    myanimelist_id: number,
    rates_scores_stats: [IScoreStats],
    rates_statuses_stats: [IStatusStats],
    genres: [IGenres],
    publishers: [ ],
    user_rate: null | string
}