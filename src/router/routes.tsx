import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";

export const Routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [],
  },
];

export const router = createBrowserRouter(Routes);
