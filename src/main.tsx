import React from "react";
import App from "./App.tsx";
import "./index.css";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
