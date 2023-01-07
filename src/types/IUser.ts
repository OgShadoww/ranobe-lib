interface IImage {
    x160:string,
    x148: string,
    x80: string,
    x64: string,
    x48: string,
    x32: string,
    x16: string,
}

export interface IUser {
    id: number,
    nickname: string,
    avatar: string,
    image: IImage,
    last_online_at: string
    url: string
}