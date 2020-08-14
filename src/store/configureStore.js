import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import todosReducer from '../reducers/todos'
import filtersReducer from '../reducers/filters'
import thunk from 'redux-thunk'

const composeEnahncers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            todos: todosReducer,
            filters: filtersReducer
        }),
        composeEnahncers(applyMiddleware(thunk))
    )
    return store
}