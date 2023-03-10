import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { forumApi, forumMoreApi, genresApi, ranobeApi, ranobeApiSearch, ranobeFillterApi, ranobeMoreApi, ranobeRelatedApi, ranobeRoleApi, ranobeTopicApi, topicApi } from "./services/services";

const combine = combineReducers({
    [ranobeApi.reducerPath]: ranobeApi.reducer,
    [ranobeApiSearch.reducerPath]:ranobeApiSearch.reducer,
    [genresApi.reducerPath]:genresApi.reducer,
    [ranobeMoreApi.reducerPath]:ranobeMoreApi.reducer,
    [ranobeRoleApi.reducerPath]:ranobeRoleApi.reducer,
    [ranobeFillterApi.reducerPath]:ranobeFillterApi.reducer,
    [ranobeRelatedApi.reducerPath]:ranobeRelatedApi.reducer,
    [forumApi.reducerPath]: forumApi.reducer,
    [ranobeTopicApi.reducerPath]: ranobeTopicApi.reducer,
    [topicApi.reducerPath]: topicApi.reducer,
    [forumMoreApi.reducerPath]: forumMoreApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: combine,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(ranobeApi.middleware).concat(ranobeApiSearch.middleware).concat(genresApi.middleware).concat(ranobeMoreApi.middleware).concat(ranobeRoleApi.middleware).concat(ranobeFillterApi.middleware).concat(ranobeRelatedApi.middleware).concat(forumApi.middleware).concat(ranobeTopicApi.middleware).concat(topicApi.middleware).concat(forumMoreApi.middleware)
    })
}


export type RootState = ReturnType<typeof combine>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
