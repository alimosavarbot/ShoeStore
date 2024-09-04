import { RouteObject, createBrowserRouter } from "react-router-dom";
import Home from "../views/home/Home";

export const Routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
];

export const router = createBrowserRouter(Routes);
