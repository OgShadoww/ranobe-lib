import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { IGenres } from '../../types/IGenres'
import { ITopics } from '../../types/ITopics'
import { IUser } from '../../types/IUser'
import { IRanobe } from '../../types/RanobeType'

export const ranobeApi = createApi({
    reducerPath:'AllRanobeApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shikimori.one/api'
    }),
    endpoints: (build) => ({
        fetchAllRanobe: build.query<IRanobe[], {order: string, limit: number}>({
            query: ({order, limit}) => ({
                url:'ranobe',
                params: {
                    limit,
                    order,
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
        fetchAllRanobe: build.query<ITopics[], {limit: number, forum: string}>({
            query: ({limit, forum}) => ({
                url:'topics',
                params: {
                    limit,
                    forum
                }
            })
        })
    })
})