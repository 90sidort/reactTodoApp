import React from 'react';
import { connect } from 'react-redux'
import TodoForm from './TodoForm'
import { editTodo, removeTodo } from '../actions/todos'

const EditTodoPage = (props) => {
    console.log(props.todo)
    return(
        <div>
            <TodoForm 
                todo={props.todo}
                onSubmit={(todo) => {
                    props.dispatch(editTodo(props.todo.id, todo))
                    props.history.push('/')
                }}
            />
            <button onClick={() => {
                props.dispatch(removeTodo({id: props.todo.id}))
                props.history.push('/')
            }}>Remove</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        todo: state.todos.find((todo) => todo.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditTodoPage)