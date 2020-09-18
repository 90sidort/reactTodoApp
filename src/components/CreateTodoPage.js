import React from "react";
import TodoForm from "./TodoForm";
import { connect } from "react-redux";
import { startAddTodo } from "../actions/todos";

export class CreateTodoPage extends React.Component {
  onSubmit = (todo) => {
    this.props.startAddTodo(todo);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div className="pageHeader">
          <div className="summaryContent">
            <h1 className="pageHeaderTitle">Create Todo</h1>
          </div>
        </div>
        <div className="content-container">
          <TodoForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddTodo: (todo) => dispatch(startAddTodo(todo)),
});

export default connect(undefined, mapDispatchToProps)(CreateTodoPage);
