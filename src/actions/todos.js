import uuid from 'uuid'
import database from '../firebase/firebase'

// ADD_TODO
export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    todo
})

export const startAddTodo = (todoData = {}) => {
    return (dispatch) => {
        const {
            title = '',
            details = '',
            priority = 1,
            createdAt = 0
        } = todoData
        const todo = { title, details, priority, createdAt }
        database.ref('todos').push(todo).then((ref) => {
            dispatch(addTodo({
                id: ref.key,
                ...todo
            }))
        })
    }
}

// REMOVE_TODO
export const removeTodo = ({id} = {}) => ({
    type: 'REMOVE_TODO',
    id
})
// EDIT_TODO
export const editTodo = (id, updates) => ({
    type: 'EDIT_TODO',
    id,
    updates
})