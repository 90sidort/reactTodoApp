import { addTodo, editTodo, removeTodo } from '../../actions/todos'

test('Should generete remove todo object correctly',() => {
    const result = removeTodo({ id: '12345'})
    expect(result).toEqual({
        type: 'REMOVE_TODO',
        id: '12345'
    })
})

test('Should generate edit todo object correctly', () => {
    const result = editTodo('12345', {title: 'NewTestTitle'})
    expect(result).toEqual({
        type: 'EDIT_TODO',
        id: '12345',
        updates: {
            title: 'NewTestTitle'
        }
    })
})

test('Should correctly generate create todo object with data', () => {
    const result = addTodo({title: 'NewTestTitle', priority: 2, createdAt: 0})
    expect(result).toEqual({
        type: 'ADD_TODO',
        todo: {
            id: expect.any(String),
            title: 'NewTestTitle',
            priority: 2,
            createdAt: 0,
            details: ''
        }
    })
})

test('Should correctly generate create todo object with no data', () => {
    const result = addTodo('')
    expect(result).toEqual({
        type: 'ADD_TODO',
        todo: {
            id: expect.any(String),
            title: '',
            priority: 1,
            createdAt: 0,
            details: ''
        }
    })
})