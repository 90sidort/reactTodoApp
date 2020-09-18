import React from "react";
import { connect } from "react-redux";
import TodoForm from "./TodoForm";
import { startEditTodo, startRemoveTodo } from "../actions/todos";

export class EditTodoPage extends React.Component {
  onSubmit = (todo) => {
    this.props.startEditTodo(this.props.todo.id, todo);
    this.props.history.push("/");
  };
  onRemove = () => {
    this.props.startRemoveTodo({ id: this.props.todo.id });
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div className="pageHeader">
          <div className="summaryContent">
            <h1 className="pageHeaderTitle">Edit todo</h1>
          </div>
        </div>
        <div className="content-container">
          <TodoForm todo={this.props.todo} onSubmit={this.onSubmit} />
          <button
            onClick={this.onRemove}
            className="buttonLogout"
            style={{ background: "#fe4a49" }}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    todo: state.todos.find((todo) => todo.id === props.match.params.id),
  };
};

const mapDispatchToProps = (dispatch) => ({
  startEditTodo: (id, todo) => dispatch(startEditTodo(id, todo)),
  startRemoveTodo: (data) => dispatch(startRemoveTodo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTodoPage);
