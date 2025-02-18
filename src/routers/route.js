import MyPage from "../page/myPage/index";
import { HOME_ROUTE, } from "./consts";




export const authRoutes = [
   
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: <MyPage/>
    },
]