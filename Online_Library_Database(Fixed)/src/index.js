import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// ReactDOM.render(<App />, document.getElementById("root"));

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


