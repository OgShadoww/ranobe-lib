import { IImage } from "./IImage";

export interface IPerson {
    id: number,
    name: string,
    russian: string,
    image: IImage,
    url: string
}