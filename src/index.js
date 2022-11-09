import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import store from './store';

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Counter />
  </Provider>
);
