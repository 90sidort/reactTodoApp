import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  setPriorityFilter,
  showByStatus,
  sortByPriority,
  sortByDate,
  setStartDate,
  setEndDate,
} from "../actions/filters";
import { DateRangePicker } from "react-dates";

export class TodoListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  onSortChange = (e) => {
    if (e.target.value === "date") {
      this.props.sortByDate();
    } else {
      this.props.sortByPriority();
    }
  };
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onPriorityChange = (e) => {
    this.props.setPriorityFilter(parseInt(e.target.value));
  };
  onStatusChange = (e) => {
    let status = e.target.value;
    if (e.target.value !== "all") {
      status = e.target.value === "true" ? true : false;
    }
    this.props.showByStatus(status);
  };
  render() {
    return (
      <div>
        <div className="content-container">
          <div className="input-group">
            <div className="input-group__item">
              <input
                type="text"
                className="text-input"
                value={this.props.filters.text}
                onChange={this.onTextChange}
                placeholder="Filter todos"
              />
            </div>
            <div className="input-group__item">
              <select
                className="text-select"
                value={this.props.filters.sortBy}
                onChange={this.onSortChange}
              >
                <option value="placeholder" disabled>
                  Sort by:
                </option>
                <option value="date">Date</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="input-group__item">
              <select
                className="text-select"
                value={this.props.filters.priorityValue}
                onChange={this.onPriorityChange}
              >
                <option value="placeholder" disabled>
                  Select priority:
                </option>
                <option value={-1}>All</option>
                <option value={0}>Low</option>
                <option value={1}>Normal</option>
                <option value={2}>High</option>
              </select>
            </div>
            <div className="input-group__item">
              <select
                className="text-select"
                value={this.props.filters.completed}
                onChange={this.onStatusChange}
              >
                <option value="placeholder" disabled>
                  Select status:
                </option>
                <option value="all">All</option>
                <option value={true}>Completed</option>
                <option value={false}>Pending</option>
              </select>
            </div>
          </div>
        </div>
        <div className="content-container">
          <div className="input-group">
            <div className="input-group__item__range">
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
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ filters: state.filters });

const mapDispatchToProps = (dispatch) => ({
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setPriorityFilter: (priorityValue) =>
    dispatch(setPriorityFilter(priorityValue)),
  showByStatus: (completed) => dispatch(showByStatus(completed)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByPriority: () => dispatch(sortByPriority()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListFilters);
