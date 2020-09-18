import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const TodoListItem = ({
  id,
  title,
  completed,
  details,
  priority,
  createdAt,
}) => {
  let priorityName;
  if (priority === 0) {
    priorityName = "Low";
  } else if (priority === 1) {
    priorityName = "Regular";
  } else {
    priorityName = "High";
  }
  return (
    <Link to={`edit/${id}`} className="list_item">
      <div>
        <h3 className="list_item_description">{title}</h3>
        {details.length > 0 && (
          <p className="list_item_notes">
            <small>{details}</small>
          </p>
        )}
        <p className="list_item_notes">
          <small>{priorityName}</small>
        </p>
        <span>{moment(createdAt).format("Do MMMM YYYY")}</span>
      </div>
      <button
        disabled={true}
        style={{
          background: completed ? "#2ab7ca" : "#fe4a49",
          borderRadius: "10px",
          color: "white",
          width: "100px",
        }}
      >
        {completed ? "Completed" : "Pending"}
      </button>
    </Link>
  );
};

export default TodoListItem;
