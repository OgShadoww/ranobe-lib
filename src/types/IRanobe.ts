import { IImage } from "./IImage";

export interface IRanobe {
    id: number,
    name: string,
    russian: string,
    image:IImage,
    genres: string[],
    url: string,
    kind: string,
    score: string,
    status: string,
    volumes: number,
    chapters: number,
    aired_on: string,
    released_on:string,
    type: string,
}