import { TodoList } from '../../components/TodoList'
import React from 'react'
import { shallow } from 'enzyme'
import mockTodos from '../fixtures/todosFixture'

test('Should correctly render TodoList component with todos', () => {
    const wrapper = shallow(<TodoList todos={mockTodos}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should correctly render TodoList component with todos', () => {
    const wrapper = shallow(<TodoList todos={[]}/>)
    expect(wrapper).toMatchSnapshot()
})