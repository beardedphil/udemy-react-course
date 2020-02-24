import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses"

const store = configureStore();

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

store.dispatch(addExpense({
    description: 'Water bill',
    amount: 1200,
    createdAt: 1000,
}));

store.dispatch(addExpense({
    description: 'Gas bill',
    amount: 9500,
    createdAt: 8000,
}));

store.dispatch(addExpense({
    description: 'Rent',
    amount: 85000,
    createdAt: 5000,
}));

// store.dispatch(setTextFilter('Water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter());
// }, 3000);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
