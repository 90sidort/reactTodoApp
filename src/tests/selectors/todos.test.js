import todosMock from '../fixtures/todosFixture'
import moment from 'moment'
import getVisibleTodos from '../../selectors/todos'

test('Should be able to sort by date', () => {
    const filters = {
        text: '',
        priorityValue: -1,
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleTodos( todosMock ,filters)
    expect(result).toEqual([todosMock[2], todosMock[0], todosMock[1]])
})

test('Should be able to sort by priority', () => {
    const filters = {
        text: '',
        priorityValue: -1,
        sortBy: 'priority',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleTodos( todosMock ,filters)
    expect(result).toEqual([todosMock[1], todosMock[2], todosMock[0]])
})

test('Should be able to filter by text', () => {
    const filters = {
        text: 'todo',
        priorityValue: -1,
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleTodos( todosMock ,filters)
    expect(result).toEqual([todosMock[0], todosMock[1]])
})

test('Should be able to filter by priority', () => {
    const filters = {
        text: '',
        priorityValue: 1,
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleTodos(todosMock ,filters)
    expect(result).toEqual([todosMock[2]])
})

test('Should be able to filter by start date', () => {
    const filters = {
        text: '',
        priorityValue: -1,
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = getVisibleTodos( todosMock ,filters)
    expect(result).toEqual([todosMock[2], todosMock[0]])
})

test('Should be able to filter by end date', () => {
    const filters = {
        text: '',
        priorityValue: -1,
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const result = getVisibleTodos( todosMock ,filters)
    expect(result).toEqual([todosMock[1]])
})
