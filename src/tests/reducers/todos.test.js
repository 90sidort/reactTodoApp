import todosReducers from '../../reducers/todos'
import mockedTodos from '../fixtures/todosFixture'

test('Should be able to remove todo when id is correct', () => {
    const result = todosReducers(mockedTodos, { type: 'REMOVE_TODO', id: '1'})
    expect(result).toEqual([mockedTodos[1], mockedTodos[2]])
})

test('Should not remove todo when id is incorrect', () => {
    const result = todosReducers(mockedTodos, { type: 'REMOVE_TODO', id: '23121'})
    expect(result).toEqual(mockedTodos)
})

test('Should be able to edit todo when id is correct', () => {
    const result = todosReducers(mockedTodos, { type: 'EDIT_TODO', id: '1', updates: { title: 'TestowyCalkiemNowy' }})
    expect(result[0].title).toEqual('TestowyCalkiemNowy')
})

test('Should not be able to edit todo when id is incorrect', () => {
    const result = todosReducers(mockedTodos, { type: 'EDIT_TODO', id: '123', updates: { title: 'TestowyCalkiemNowy' }})
    expect(result).toEqual(mockedTodos)
})

test('Should be able to add todo', () => {
    const result = todosReducers(undefined, { type: 'ADD_TODO', todo: { id: '0', description: 'TestDescription', note: 'TestNote', amount: 500, createdAt: 10 }})
    expect(result).toEqual([{ id: '0', description: 'TestDescription', note: 'TestNote', amount: 500, createdAt: 10 }])
})

test('Should correctly set todos array when initializing', () => {
    const result = todosReducers(undefined, { type: '@@INIT'})
    expect(result).toEqual([])
})
