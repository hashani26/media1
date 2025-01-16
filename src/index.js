import { createRoot } from "react-dom/client";
import App from "./App.js";
import { store } from "./store";
import { Provider } from "react-redux";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <App />
    </Provider>
);
