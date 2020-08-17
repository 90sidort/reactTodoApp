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
        return database.ref('todos').push(todo).then((ref) => {
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

export const startRemoveTodo = ({ id }) => {
    return (dispatch) => {
        return database.ref(`todos/${id}`).remove().then(() => {
            dispatch(removeTodo({ id }))
        })
    }
}

// EDIT_TODO
export const editTodo = (id, updates) => ({
    type: 'EDIT_TODO',
    id,
    updates
})

export const startEditTodo = (id, updates) => {
    return (dispatch) => {
        return database.ref(`todos/${id}`).update(updates).then(() => {
            dispatch(editTodo(id, updates))
        })
    }
}

export const setTodos = (todos) => ({
    type: 'SET_TODOS',
    todos
})

export const startSetTodos = () => {
    return (dispatch) => {
        return database.ref(`todos`).once('value').then((snapshot) => {
            const todos = []
            snapshot.forEach((childSnapshot) => {
                todos.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setTodos(todos))
        })
    }
}