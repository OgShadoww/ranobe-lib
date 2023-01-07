import { IForum } from "./IForum"
import { IImage } from "./IImage"
import { ILinked } from "./ILinked"
import { IUser } from "./IUser"

export interface ITopics {
    id: number,
    topic_title: string,
    body: string,
    html_body: HTMLElement,
    html_footer: string,
    created_at: string,
    comments_count: number,
    forum: IForum,
    user: IUser,
    type: string,
    linked_id: number,
    linked_type: string,
    linked: ILinked,
    viewed: boolean,
    last_comment_viewed: boolean,
    event: string | null,
    episode: number | null
}