import React from "react";
import { connect } from "react-redux";
import countByPriority from "../selectors/priorityCounter";
import getVisibleTodos from "../selectors/todos";

export const TodosSummary = ({ visibleTodos }) => {
  const count = countByPriority(visibleTodos);
  const sum = count.reduce((sum, value) => sum + value, 0);
  const countForm = visibleTodos.length === 1 ? "todo" : "todos";
  return (
    <div className="pageHeader">
      <div className="summaryContent">
        <p className="pageHeaderTitle">
          <span>{sum}</span> {countForm}.{" "}
          <span className="spanSmaller">{count[0]}</span> low,{" "}
          <span className="spanSmaller">{count[1]}</span> regular and{" "}
          <span className="spanSmaller">{count[2]}</span> high priority.
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const filteredTodos = getVisibleTodos(state.todos, state.filters);

  return {
    visibleTodos: filteredTodos,
  };
};

export default connect(mapStateToProps)(TodosSummary);
