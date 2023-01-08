import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { genresApi, ranobeApi, ranobeApiSearch, topicApi } from "./services/services";

const combine = combineReducers({
    [ranobeApi.reducerPath]: ranobeApi.reducer,
    [ranobeApiSearch.reducerPath]:ranobeApiSearch.reducer,
    [genresApi.reducerPath]:genresApi.reducer,
    [topicApi.reducerPath]:topicApi.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: combine,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(ranobeApi.middleware).concat(ranobeApiSearch.middleware).concat(genresApi.middleware).concat(topicApi.middleware)
    })
}


export type RootState = ReturnType<typeof combine>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']