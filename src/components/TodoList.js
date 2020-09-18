import React from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";
import selectTodos from "../selectors/todos";

export const TodoList = (props) => {
  return (
    <div className="content-container list_body">
      <div className="list-header">
        <div className="show_for_mobile">Todos</div>
        <div className="show_for_desktop">Todo</div>
        <div className="show_for_desktop">Status</div>
      </div>
      {props.todos.length === 0 ? (
        <p className="list_item_empty">No todos</p>
      ) : (
        props.todos.map((todo) => <TodoListItem key={todo.id} {...todo} />)
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: selectTodos(state.todos, state.filters),
  };
};

const ConnectedTodoList = connect(mapStateToProps)(TodoList);

export default ConnectedTodoList;
