import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, setPriorityFilter, sortByPriority, sortByDate, setStartDate, setEndDate } from '../actions/filters'
import { DateRangePicker } from 'react-dates'

export class  TodoListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    onSortChange = (e) => {
        if (e.target.value === 'date'){this.props.sortByDate()}
        else {this.props.sortByPriority()}
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }
    onPriorityChange = (e) => {
        this.props.setPriorityFilter(parseInt(e.target.value))
    }
    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={this.onTextChange} />
                <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="priority">Priority</option>
                </select>
                <select value={this.props.filters.priorityValue} onChange={this.onPriorityChange}>
                    <option value={-1}>All</option>
                    <option value={0}>Low</option>
                    <option value={1}>Normal</option>
                    <option value={2}>High</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({filters: state.filters})

const mapDispatchToProps = (dispatch) => ({
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setPriorityFilter: (priorityValue) => dispatch(setPriorityFilter(priorityValue)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByPriority: () => dispatch(sortByPriority())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoListFilters)