import { IImage } from "./IImage";

export interface ICharacter {
    id: number,
    name: string,
    russian: string,
    image: IImage,
    url: string
}