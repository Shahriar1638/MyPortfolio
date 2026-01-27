import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PageRoutes from "./Routes/PageRoutes";
import { RouterProvider } from "react-router";
import { ThemeProvider } from "./Context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={PageRoutes} />
    </ThemeProvider>
  </StrictMode>,
);
