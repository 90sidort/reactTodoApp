import React from 'react';
import ConnectedTodoList from './TodoList'
import TodoListFilters from '../components/TodoListFilters'

const TodoDashboardPage = () => (
    <div>
        This is my TodoDashboardPage.
        <TodoListFilters/>
        <ConnectedTodoList/>
    </div>
)

export default TodoDashboardPage