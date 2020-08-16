import { addTodo, editTodo, removeTodo, startAddTodo } from '../../actions/todos'
import mockedTodos from '../fixtures/todosFixture'
import configurMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'

const createMockStore = configurMockStore([thunk])

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
    const result = addTodo(mockedTodos[0])
    expect(result).toEqual({
        type: 'ADD_TODO',
        todo: mockedTodos[0]
    })
})

test('Should add todo to database and store', (done) => {
    const store = createMockStore({})
    const todoData = {
        title: 'Test todo',
        details: 'This is the test todo',
        priority: 2,
        createdAt: 900
    }
    store.dispatch(startAddTodo(todoData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_TODO',
            todo: {
                id: expect.any(String),
                ...todoData
            }
        })
        return database.ref(`todos/${actions[0].todo.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(todoData)
        done()
    })
})

test('Should add todo with default data to database and store', (done) => {
    const store = createMockStore({})
    const todoData = {
        title: '',
        details: '',
        priority: 1,
        createdAt: 0
    }
    store.dispatch(startAddTodo(todoData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_TODO',
            todo: {
                id: expect.any(String),
                ...todoData
            }
        })
        return database.ref(`todos/${actions[0].todo.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(todoData)
        done()
    })
})