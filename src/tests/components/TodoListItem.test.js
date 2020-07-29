import TodoListItem from '../../components/TodoListItem'
import React from 'react'
import { shallow } from 'enzyme'
import mockTodos from '../fixtures/todosFixture'

test('Should correctly render TodoListItemComponent', () => {
    const wrapper = shallow(<TodoListItem {...mockTodos[0]}/>)
    expect(wrapper).toMatchSnapshot()
})

