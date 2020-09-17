import React from "react";
import ConnectedTodoList from "./TodoList";
import TodoListFilters from "../components/TodoListFilters";
import TodosSummary from "../components/TodosSummary";

const TodoDashboardPage = () => (
  <div>
    <TodosSummary />
    <TodoListFilters />
    <ConnectedTodoList />
  </div>
);

export default TodoDashboardPage;
