import { TodosSummary } from '../../components/TodosSummary'
import React from 'react'
import { shallow } from 'enzyme'
import mockTodos from '../fixtures/todosFixture'

test('Should render component correctly with no todos', () => {
    const result = shallow(<TodosSummary visibleTodos={[]}/>)
    expect(result).toMatchSnapshot()
})

test('Should render component correctly with one todo', () => {
    const result = shallow(<TodosSummary visibleTodos={[mockTodos[0]]}/>)
    expect(result).toMatchSnapshot()
})

test('Should render component correctly with multiple todos', () => {
    const result = shallow(<TodosSummary visibleTodos={mockTodos}/>)
    expect(result).toMatchSnapshot()
})