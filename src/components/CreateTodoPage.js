import React from 'react'
import TodoForm from './TodoForm'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todos'

const CreateTodoPage = (props) => (
    <div>
        <h1>Create Todo</h1>
        <TodoForm onSubmit={(todo) => {
            props.dispatch(addTodo(todo))
            props.history.push('/')
        }}/>
    </div>
)

export default connect()(CreateTodoPage)