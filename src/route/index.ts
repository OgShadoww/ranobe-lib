import Main from "../section/Main";
import Ranobe from "../section/Ranobe";
import { IRoute } from "../types/RoutesType";

export const routers:IRoute[] = [
    {path:'/ranobe-lib', element:Main},
    {path:'/ranobe-lib/forum', element:Main},
    {path:'/ranobe-lib/faq', element:Main},
    {path:'/ranobe-lib/news', element:Main},
    {path:'/ranobe-lib/contact', element:Main},
    {path:'/ranobe-lib/profile', element:Main},
    {path:'/ranobe-lib/:id', element:Ranobe},
]