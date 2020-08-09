import React from 'react'
import { connect } from 'react-redux'
import countByPriority from '../selectors/priorityCounter'
import getVisibleTodos from '../selectors/todos'

export const TodosSummary = ({visibleTodos}) => {
    const count = countByPriority(visibleTodos)
    const sum = count.reduce((sum, value) => sum + value, 0)
    const countForm = visibleTodos.length === 1 ? 'todo' : 'todos'
    return (
        <div>
            <p>Viewing {sum} {countForm}.</p>
            <p>{count[0]} low, {count[1]} regular and {count[2]} high priotity</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    const filteredTodos = getVisibleTodos(state.todos, state.filters)

    return {
        visibleTodos: filteredTodos
    }
}

export default connect(mapStateToProps)(TodosSummary)