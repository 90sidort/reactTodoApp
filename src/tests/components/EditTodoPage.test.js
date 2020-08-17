import React from 'react'
import { shallow } from 'enzyme'
import todoMocks from '../fixtures/todosFixture'
import { EditTodoPage } from '../../components/EditTodoPage'

let startEditTodo, startRemoveTodo, history, wrapper

beforeEach(() => {
    history = { push: jest.fn()}
    startEditTodo = jest.fn()
    startRemoveTodo = jest.fn()
    wrapper = shallow(<EditTodoPage
        history={history}
        startEditTodo={startEditTodo}
        startRemoveTodo={startRemoveTodo}
        todo={todoMocks[0]}
    />)
})

test('Should correctly render EditTodoPage', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Should correctly handle editTodo', () => {
    wrapper.find('TodoForm').prop('onSubmit')(todoMocks[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startEditTodo).toHaveBeenLastCalledWith(todoMocks[0].id, todoMocks[0])
})

test('Should correctly handle removeTodo', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveTodo).toHaveBeenLastCalledWith({id: todoMocks[0].id})
})