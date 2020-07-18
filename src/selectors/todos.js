const getVisibleTodos = (todos, { text, sortBy, startDate, endDate }) => {
    return todos.filter((todo) => {
        const startDateMatch = typeof startDate !== 'number' || todo.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || todo.createdAt <= endDate
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