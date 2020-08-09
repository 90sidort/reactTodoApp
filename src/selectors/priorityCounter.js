const countByPriority = (todos) => {
    let arrLow = 0
    let arrRegular = 0
    let arrHigh = 0
    if (todos.length > 0) {
        todos.map((todo) => {
            if (todo.priority === 0){arrLow++}
            else if (todo.priority === 1){arrRegular++}
            else {arrHigh++}
        })
    }
    return [arrLow, arrRegular, arrHigh]
}

export default countByPriority