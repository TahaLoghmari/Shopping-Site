import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./components/routes";
import "./styles/index.css";

const router = createBrowserRouter(routes);

createRoot(document.querySelector(".container")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
