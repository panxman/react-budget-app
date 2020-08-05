// Third Party
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// Components
import AppRouter, { history } from "./routers/AppRouter";
// Store
import configureStore from "./store/configureStore";
import { firebase } from "./firebase/firebase";
// Actions
import { startSetExpenses } from "./actions/expenses";
// Styles
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

const jsx = (
  <div>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </div>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.querySelector("#app"));
    hasRendered = true;
  }
};

/* Render */
ReactDOM.render(<p>Loading...</p>, document.querySelector("#app"));

/* Authentication Redirections */
firebase.auth().onAuthStateChanged((user) => {
  // Login
  if (user) {
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();

      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  }
  // Logout
  else {
    renderApp();
    history.push("/");
  }
});
