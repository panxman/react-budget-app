// Third Party
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// Components
import AppRouter from "./routers/AppRouter";
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

/* Render */
ReactDOM.render(<p>Loading...</p>, document.querySelector("#app"));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.querySelector("#app"));
});

firebase.auth().onAuthStateChanged((user) => {
    // Login
    if (user) {
        console.log("Log in");
    }
    // Logout
    else {
        console.log("Log out");
    }
});
