// Third Party
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// Components
import AppRouter from "./routers/AppRouter";
// Store
import configureStore from "./store/configureStore";
import "./firebase/firebase";
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
ReactDOM.render(jsx, document.querySelector("#app"));
