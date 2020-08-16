import React from 'react'
import { shallow } from 'enzyme'
import todoMocks from '../fixtures/todosFixture'
import { CreateTodoPage } from '../../components/CreateTodoPage'

let history, wrapper, startAddTodo

beforeEach(() => {
    history = { push: jest.fn()}
    startAddTodo = jest.fn()
    wrapper = shallow(<CreateTodoPage history={history} startAddTodo={startAddTodo} />)
})

test('Should correctly render CreateTodoComponent', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Should handle addTodo correctly', () => {
    wrapper.find('TodoForm').prop('onSubmit')(todoMocks[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startAddTodo).toHaveBeenLastCalledWith(todoMocks[1])
})