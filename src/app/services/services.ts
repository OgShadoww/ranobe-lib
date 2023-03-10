import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { IFullRanobe } from '../../types/IFullRanobe'
import { IGenres } from '../../types/IGenres'
import { IRoles } from '../../types/IRoles'
import { ITopics } from '../../types/ITopics'
import { IForum } from '../../types/IForum'
import { IRanobe } from '../../types/IRanobe'
import { IRanobeRelatedManga } from '../../types/IRelatedManga'
import { IRanobeRelatedAnime } from '../../types/IRelatedAnime'


export const ranobeApi = createApi({
    reducerPath:'AllRanobeApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shikimori.one/api'
    }),
    endpoints: (build) => ({
        fetchAllRanobe: build.query<IRanobe[], {order: string, limit: number, censored: boolean}>({
            query: ({order, limit, censored}) => ({
                url:'ranobe',
                params: {
                    limit,
                    order,
                    censored
                }
            })
        })
    })
})

export const forumApi = createApi({
    reducerPath:'AllForumsApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shikimori.one/api'
    }),
    endpoints: (build) => ({
        AllForumsApi: build.query<IForum[], string>({
            query: () => ({
                url:'forums',
            })
        })
    })
})

export const forumMoreApi = createApi({
    reducerPath:'forumMoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shikimori.one/api'
    }),
    endpoints: (build) => ({
        AllForumsApi: build.query<ITopics, number>({
            query: (id: number) => ({
                url:`topics/${id}`,
            })
        })
    })
})


export const ranobeTopicApi = createApi({
    reducerPath:'ranobeTopicApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shikimori.one/api'
    }),
    endpoints: (build) => ({
        fetchAllRanobe: build.query<ITopics[], {id: string | number, limit: number}>({
            query: ({id, limit}) => ({
                url:`ranobe/${id}/topics?limit=${limit}`,
            })
        })
    })
})

export const ranobeMoreApi = createApi({
    reducerPath:'ranobeMoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shikimori.one/api'
    }),
    endpoints: (build) => ({
        fetchAllRanobe: build.query<IFullRanobe, number | undefined>({
            query: (num: number | undefined) => ({
                url:`ranobe/${num}`,
            })
        })
    })
})

export const ranobeRelatedApi = createApi({
    reducerPath:'ranobeRelatedApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shikimori.one/api'
    }),
    endpoints: (build) => ({
        fetchAllRanobe: build.query<[IRanobeRelatedManga] | [IRanobeRelatedAnime], {num: number, value: string}>({
            query: ({num, value}) => ({
                url:`ranobe/${num}/${value}`
            })
        })
    })
})

export const ranobeRoleApi = createApi({
    reducerPath:'ranobeRoleApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shikimori.one/api'
    }),
    endpoints: (build) => ({
        fetchAllRanobe: build.query<IRoles[], number | undefined>({
            query: (num: number | undefined, ) => ({
                url:`ranobe/${num}/roles`,
            })
        })
    })
})

export const ranobeFillterApi = createApi({
    reducerPath:'ranobeFillterApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shikimori.one/api'
    }),
    endpoints: (build) => ({
        fetchAllRanobe: build.query<IRanobe[], {order: string, limit: number, genre?: number, search?: string}>({
            query: ({order, limit, genre, search}) => ({
                url:'ranobe',
                params: {
                    limit,
                    order,
                    genre,
                    search
                }
            })
        })
    })
})

export const ranobeApiSearch = createApi({
    reducerPath:'SearchAllRanobeApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shikimori.one/api'
    }),
    endpoints: (build) => ({
        fetchAllRanobe: build.query<IRanobe[], string>({
            query: (search: string | number) => ({
                url:'ranobe',
                params: {
                    limit:10,
                    search
                }
            })
        })
    })
})

export const genresApi = createApi({
    reducerPath:'genresApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shikimori.one/api'
    }),
    endpoints: (build) => ({
        fetchAllRanobe: build.query<IGenres[], string>({
            query: () => ({
                url:'genres'
            })
        })
    })
})

export const topicApi = createApi({
    reducerPath:'topicApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shikimori.one/api'
    }),
    endpoints: (build) => ({
        fetchAllRanobe: build.query<ITopics[], {limit: number, page: number, forum: string}>({
            query: ({limit, page, forum}) => ({
                url:'topics',
                params: {
                    limit,
                    page,
                    forum
                }
            })
        })
    })
})
