import TodoForm from '../../components/TodoForm'
import { shallow } from 'enzyme'
import React from 'react'
import mockTodos from '../fixtures/todosFixture'

test('Should be able to render TodoForm component correctly', () => {
    const wrapper = shallow(<TodoForm/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render TodoForm with data correctly', () => {
    const wrapper = shallow(<TodoForm expense={mockTodos[0]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render error for invalid form submission', () => {
    const wrapper = shallow(<TodoForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('Should set title on input change', () => {
    const value = 'Tested Title'
    const wrapper = shallow(<TodoForm />)
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('title')).toBe(value)
})

test('Should set details on input change', () => {
    const value = 'Test note'
    const wrapper = shallow(<TodoForm />)
    wrapper.find('textarea').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('details')).toBe(value)
})

test('Should set priority on valid input change', () => {
    const value = 1
    const wrapper = shallow(<TodoForm />)
    wrapper.find('select').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('priority')).toBe(value)
})