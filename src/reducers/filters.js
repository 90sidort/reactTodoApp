import moment from 'moment'

const filtersReducerDefaultState = {
    text: '',
    priorityValue: -1,
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SET_PRIORITY_FILTER':
            return {
                ...state,
                priorityValue: action.priorityValue
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_PRIORITY':
            return {
                ...state,
                sortBy: 'priority'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}

export default filtersReducer