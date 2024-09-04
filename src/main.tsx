import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes.tsx";
import "./index.css";

// For develop
document.documentElement.setAttribute('data-theme', 'light');

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
