import React from 'react'
import TodoForm from './TodoForm'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todos'

export class CreateTodoPage extends React.Component {
    onSubmit = (todo) => {
        this.props.addTodo(todo)
        this.props.history.push('/')
    }
    render() {
        return(
            <div>
                <h1>Create Todo</h1>
                <TodoForm onSubmit={this.onSubmit}/>
            </div>
        )
    }   
}

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch(addTodo(todo))
})

export default connect(undefined, mapDispatchToProps)(CreateTodoPage)