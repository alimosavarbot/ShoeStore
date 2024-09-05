import { RouteObject, createBrowserRouter } from "react-router-dom";
import Home from "../views/home/Home";
import { HOME } from "../constants/routerLinks";

export const Routes: RouteObject[] = [
  {
    path: HOME,
    element: <Home />,
    children: [],
  },
];

export const router = createBrowserRouter(Routes);
