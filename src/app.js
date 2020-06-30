// Third Party
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// Components
import AppRouter from "./routers/AppRouter";
// Store
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
// Styles
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 3000, createdAt: 100 }));
store.dispatch(addExpense({ description: "Gas bill", amount: 5000, createdAt: 200 }));
store.dispatch(addExpense({ description: "Rent", amount: 45000, createdAt: 300 }));
store.dispatch(addExpense({ description: "Phone bill", amount: 4000, createdAt: 400}));

const jsx = (
    <div>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </div>
);

/* Render */
ReactDOM.render(jsx, document.querySelector("#app"));
