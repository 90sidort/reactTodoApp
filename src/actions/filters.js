// SET_TEXT_FILTER
export const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
})

// SORT_BY_PRIORITY
export const sortByPriority = () => ({
    type: 'SORT_BY_PRIORITY',
    sortBy: 'priority'
})
// SET_START_DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
// SET_END_DATA
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})