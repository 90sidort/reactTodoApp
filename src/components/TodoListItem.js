import React from 'react'
import { Link } from 'react-router-dom'

const TodoListItem = ({dispatch, id, title, details, priority, createdAt}) => {
    return (
        <div>
            <Link to={`edit/${id}`}>
                <h3>Description:{title}</h3>
            </Link>
            <p>Details:{details}</p>
            <p>Priority: {priority}</p>
            <p>Creation Time:{createdAt}</p>

        </div>
    )
}

export default TodoListItem