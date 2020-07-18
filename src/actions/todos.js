import uuid from 'uuid'

// ADD_TODO
export const addTodo = ({title = '', details = '', priority = '', createdAt = 0}) => ({
    type: 'ADD_TODO',
    todo: {
        id: uuid(),
        title,
        details,
        priority,
        createdAt
    }
})
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