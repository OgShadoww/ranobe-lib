import Catalog from "../section/Catalog";
import Faq from "../section/Faq";
import Forum from "../section/Forum";
import Main from "../section/Main";
import Ranobe from "../section/Ranobe";
import Setting from "../section/Setting";
import { IRoute } from "../types/IRoutes";

export const routers:IRoute[] = [
    {path:'/', element:Main},
    {path:'/catalog', element:Catalog},
    {path:'/forum', element:Forum},
    {path:'/faq', element:Faq},
    {path:'/news', element:Main},
    {path:'/contact', element:Main},
    {path:'/settings', element:Setting},
    {path:'/profile', element:Main},
    {path:'/:id', element:Ranobe},
]