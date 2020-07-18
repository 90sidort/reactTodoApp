import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './components/routers/AppRouter'
import { setTextFilter, sortByDate, sortByPriority, setStartDate, setEndDate } from './actions/filters'
import { addTodo, editTodo, removeTodo } from './actions/todos'
import configureStore from './store/configureStore'
import getVisibleTodos from './selectors/todos'

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore()

store.subscribe(() => {
    const state = store.getState()
    const visibleTodos = getVisibleTodos(state.todos, state.filters)
    console.log(visibleTodos)
})

store.dispatch(addTodo({title: 'Nowy', details: 'Najnowszy', priority: 2, createdAt: 200}))
store.dispatch(addTodo({title: 'Nowszy', details: 'Naj-Najnowszy', priority: 2, createdAt:100}))
store.dispatch(addTodo({title: 'NajNowy', details: 'Najnowszy', priority: 1, createdAt: -200}))
// store.dispatch(setTextFilter('Nowy'))

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
