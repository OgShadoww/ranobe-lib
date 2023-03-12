import { IImage } from "./IImage"

export interface ILinked {
    id: number,
    name: string,
    russian: string,
    image: IImage,
    url: string,
    kind: string,
    score: string,
    status: string,
    episodes: number,
    episodes_aired: number,
    aired_o: string,
    released_on: string
}