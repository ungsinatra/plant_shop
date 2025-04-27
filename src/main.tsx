import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { Provider } from "react-redux";
import { setupStore } from "./store/store.tsx";
import { BrowserRouter } from "react-router-dom";
const store = setupStore();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
