import { RouteObject, createBrowserRouter } from "react-router-dom";
import { HOME } from "../constants/routerLinks";
import Home from "../pages/home/Home";

export const Routes: RouteObject[] = [
  {
    path: HOME,
    element: <Home />,
    children: [],
  },
];

export const router = createBrowserRouter(Routes);
