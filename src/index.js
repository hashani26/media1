import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import { store } from "./store";
import { Provider } from "react-redux";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
