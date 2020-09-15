import React from "react";
import { Link } from "react-router-dom";

const TodoListItem = ({
  id,
  title,
  completed,
  details,
  priority,
  createdAt,
}) => {
  const colour = completed ? "#ffcccb" : "#9ACD32";
  return (
    <div style={{ background: colour }}>
      <Link to={`edit/${id}`}>
        <h3>Description:{title}</h3>
      </Link>
      <p>Details:{details}</p>
      <p>Priority: {priority}</p>
      <p>Creation Time:{createdAt}</p>
    </div>
  );
};

export default TodoListItem;
