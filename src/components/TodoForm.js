import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.todo ? props.todo.title : "",
      completed: props.todo ? props.todo.completed : false,
      details: props.todo ? props.todo.details : "",
      priority: props.todo ? props.todo.priority : 1,
      createdAt: props.todo ? moment(props.todo.createdAt) : moment(),
      calendarFocused: false,
      error: "",
    };
  }
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };
  onDetailsChange = (e) => {
    const details = e.target.value;
    this.setState(() => ({ details }));
  };
  onPriorityChange = (e) => {
    const priority = e.target.value;
    this.setState(() => ({ priority }));
  };
  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title) {
      this.setState({ error: "Please, provide title" });
    } else {
      this.setState({ error: "" });
      this.props.onSubmit({
        title: this.state.title,
        completed: this.state.completed,
        priority: parseInt(this.state.priority),
        createdAt: this.state.createdAt.valueOf(),
        details: this.state.details,
      });
    }
  };
  onCompletedChange = (e) => {
    e.preventDefault();
    if (!this.state.completed) {
      this.setState(() => ({ completed: true }));
    } else {
      this.setState(() => ({ completed: false }));
    }
  };
  render() {
    let buttonText;
    if (!this.state.completed) {
      buttonText = `Mark as done`;
    } else {
      buttonText = `Mark as undone`;
    }
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.title}
            placeholder="Todo title"
            onChange={this.onTitleChange}
          />
          <button onClick={this.onCompletedChange}>{buttonText}</button>
          <select value={this.state.priority} onChange={this.onPriorityChange}>
            <option value={-1} disabled>
              Select priority:
            </option>
            <option value={0}>Low</option>
            <option value={1}>Normal</option>
            <option value={2}>High</option>
          </select>
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Provide description (optional)"
            value={this.state.details}
            onChange={this.onDetailsChange}
          />
          ]<button>Create todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
