import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByPriority, sortByDate } from '../actions/filters'

const TodoListFilters = (props) => (
    <div>
        <input type="text" value={props.filters.text} onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value))
        }} />
        <select value={props.filters.sortBy} onChange={(e) => {
            if (e.target.value === 'date'){props.dispatch(sortByDate())}
            else {props.dispatch(sortByPriority())}
        }}>
            <option value="date">Date</option>
            <option value="priority">Priority</option>
        </select>
    </div>
)

const stateMapToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(stateMapToProps)(TodoListFilters)