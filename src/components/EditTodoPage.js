import React from 'react';
import { connect } from 'react-redux'
import TodoForm from './TodoForm'
import { editTodo, removeTodo } from '../actions/todos'

export class EditTodoPage extends React.Component {
    onSubmit = (todo) => {
        this.props.editTodo(this.props.todo.id, todo)
        this.props.history.push('/')
    }
    onRemove = () => {
        this.props.removeTodo({id: this.props.todo.id})
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <TodoForm 
                    todo={this.props.todo}
                    onSubmit={this.onSubmit}
                />
                <button
                    onClick={this.onRemove}
                >
                    Remove
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        todo: state.todos.find((todo) => todo.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => ({
    editTodo: (id, todo) => dispatch(editTodo(id, todo)),
    removeTodo: (data) => dispatch(removeTodo(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditTodoPage)