import { TodoListFilters } from '../../components/TodoListFilters'
import React from 'react'
import { shallow } from 'enzyme'
import { filtersAlt, filtersDefault } from '../fixtures/filtersFixture'

let setTextFilter, setPriorityFilter, sortByPriority, sortByDate, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    setPriorityFilter = jest.fn()
    sortByPriority = jest.fn()
    sortByDate = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(<TodoListFilters
        setTextFilter={setTextFilter}
        setPriorityFilter={setPriorityFilter}
        sortByPriority={sortByPriority}
        sortByDate={sortByDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        filters={filtersDefault}
    />)
})

test('Should render component correctly with default filters', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Should render component correctly with altered filters', () => {
    wrapper.setProps({
        filters: filtersAlt
    })
    expect(wrapper).toMatchSnapshot()
})

test('Should correctly handle text filter', () => {
    wrapper.find('input').at(0).simulate('change', { target: { value: 'test' }})
    expect(setTextFilter).toHaveBeenLastCalledWith('test')
})

test('Should handle priority filter', () => {
    wrapper.find('select').at(1).simulate('change', { target: { value: 2 }})
    expect(setPriorityFilter).toHaveBeenLastCalledWith(2)
})

test('Should correctly handle sort by priority', () => {
    wrapper.find('select').at(0).simulate('change', { target: { value: 'priority' }})
    expect(sortByPriority).toHaveBeenCalled()
})

test('Should correctly handle sort by date', () => {
    wrapper.setProps({
        filters: filtersAlt
    })
    wrapper.find('select').at(0).simulate('change', { target: { value: 'date' }})
    expect(sortByDate).toHaveBeenCalled()
})

test('Should correctly handle date change', () => {
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate: filtersAlt.startDate, endDate: filtersAlt.endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(filtersAlt.startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(filtersAlt.endDate)
})

test('Should correctly handle calendar focus', () => {
    wrapper.find('DateRangePicker').prop('onFocusChange')('endDate')
    expect(wrapper.state('calendarFocused')).toBe('endDate')
})