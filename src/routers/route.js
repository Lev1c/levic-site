import Home from "../page/myPage/home";

const HOME_ROUTE = "/";
const AUTH_ROUTE = "/auth";

export const authRoutes = [];

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: <Home />,
  },
];
