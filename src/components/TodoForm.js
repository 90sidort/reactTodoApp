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
      this.setState({ error: "Please, provide meaningful title" });
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
    let buttonColor;
    if (!this.state.completed) {
      buttonText = `Mark as done`;
      buttonColor = "#2AB7CA";
    } else {
      buttonText = `Mark as pending`;
      buttonColor = "#fe4a49";
    }
    return (
      <form onSubmit={this.onSubmit} className="form">
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          autoFocus
          className="text-input"
          value={this.state.title}
          placeholder="Todo title"
          onChange={this.onTitleChange}
        />
        <button
          onClick={this.onCompletedChange}
          className="buttonLogout"
          style={{ background: buttonColor }}
        >
          {buttonText}
        </button>
        <select
          value={this.state.priority}
          onChange={this.onPriorityChange}
          className="text-select"
        >
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
          className="text-textarea"
          placeholder="Provide description (optional)"
          value={this.state.details}
          onChange={this.onDetailsChange}
        />
        <div>
          <button className="buttonLogout">Save todo</button>
        </div>
      </form>
    );
  }
}

export default TodoForm;
