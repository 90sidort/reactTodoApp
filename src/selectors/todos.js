import moment from 'moment'

const getVisibleTodos = (todos, { text, sortBy, startDate, endDate }) => {
    return todos.filter((todo) => {
        const createdAtMoment = moment(todo.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        const textMatch = (todo.title).toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'priority') {
            return  a.priority < b.priority ? 1 : -1
        }
    })
}

export default getVisibleTodos