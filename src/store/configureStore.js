import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import todosReducer from "../reducers/todos";
import filtersReducer from "../reducers/filters";
import authReducer from "../reducers/auth";

const composeEnahncers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export default () => {
  const store = createStore(
    combineReducers({
      todos: todosReducer,
      filters: filtersReducer,
      auth: authReducer,
    }),
    composeEnahncers(applyMiddleware(thunk))
  );
  return store;
};
