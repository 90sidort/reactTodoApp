import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "./firebase/firebase";
import { startSetTodos } from "./actions/todos";
import { firebase } from "./firebase/firebase";
import AppRouter, { history } from "./components/routers/AppRouter";
import { login, logout } from "./actions/auth";
// import getVisibleTodos from './selectors/todos'
// import { setTextFilter, setPriorityFilter ,sortByDate, sortByPriority, setStartDate, setEndDate } from './actions/filters'
// import { addTodo, editTodo, removeTodo } from './actions/todos'

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

store.dispatch(startSetTodos());

// store.subscribe(() => {
//     const state = store.getState()
//     const visibleTodos = getVisibleTodos(state.todos, state.filters)
//     console.log(state)
// })

// store.dispatch(addTodo({title: 'Nowy', details: 'Najnowszy', priority: 2, createdAt: 200}))
// store.dispatch(addTodo({title: 'Nowszy', details: 'Naj-Najnowszy', priority: 2, createdAt:100}))
// store.dispatch(addTodo({title: 'NajNowy', details: 'Najnowszy', priority: 1, createdAt: -200}))
// store.dispatch(addTodo({title: 'Stary', details: 'Starszy', priority: 1, createdAt: 55200}))
// store.dispatch(setPriorityFilter(1))

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetTodos()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
