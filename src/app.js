import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './components/routers/AppRouter'
import configureStore from './store/configureStore'
import './firebase/firebase'
import { startSetTodos } from './actions/todos'
// import getVisibleTodos from './selectors/todos'
// import { setTextFilter, setPriorityFilter ,sortByDate, sortByPriority, setStartDate, setEndDate } from './actions/filters'
// import { addTodo, editTodo, removeTodo } from './actions/todos'

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

store.dispatch(startSetTodos())

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
        <AppRouter/>
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

store.dispatch(startSetTodos()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'))
})