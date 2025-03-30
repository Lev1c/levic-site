import { Login } from "../page/auth/login";
import { Board } from "../page/board";
import Home from "../page/myPage/home";

const HOME_ROUTE = "/";
const AUTH_ROUTE = "/auth";
const ADMIN_ROUTE = "/board";

export const authRoutes = [
  {
    path: ADMIN_ROUTE + "/*",
    Component: <Board />,
  },
];

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: <Home />,
  },
  {
    path: AUTH_ROUTE,
    Component: <Login />,
  },
];
