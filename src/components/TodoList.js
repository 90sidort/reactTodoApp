import React from 'react'
import { connect } from 'react-redux'
import TodoListItem from './TodoListItem'
import selectTodos from '../selectors/todos'

export const TodoList = (props) => (
    <div>
        <h1>Todo List</h1>
        {props.todos.length === 0 ? (
            <p>No todos to be done</p>
        ) : (
            props.todos.map((todo) => (
                <TodoListItem key={todo.id} {...todo} />
            ))
        )}
    </div>
) 

const mapStateToProps = (state) => {
    return {
        todos: selectTodos(state.todos, state.filters)
    }
}

const ConnectedTodoList = connect(mapStateToProps)(TodoList) 

export default ConnectedTodoList