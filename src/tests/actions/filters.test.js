import { setStartDate, setPriorityFilter, setTextFilter, sortByDate, sortByPriority, setEndDate } from '../../actions/filters'
import moment from 'moment'

test('Should correctly generate set text object with valid string', () => {
    const result = setTextFilter('note')
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'note'
    })
})

test('Should correctly generate set priority object with valid value', () => {
    const result = setPriorityFilter(1)
    expect(result).toEqual({
        type: 'SET_PRIORITY_FILTER',
        priorityValue: 1
    })
})

test('Should correctly generate set priority object with no value', () => {
    const result = setPriorityFilter()
    expect(result).toEqual({
        type: 'SET_PRIORITY_FILTER',
        priorityValue: -1
    })
})

test('Should correctly generate set text object with no string', () => {
    const result = setTextFilter('')
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('Should correctly generate set start date object', () => {
    const result = setStartDate(moment(0))
    expect(result).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('Should correctly generate set end date object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('Should correctly generate sort by date object', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    })
})

test('Should correctly generate sort by amount object', () => {
    expect(sortByPriority()).toEqual({
        type: 'SORT_BY_PRIORITY',
        sortBy: 'priority'
    })
})
