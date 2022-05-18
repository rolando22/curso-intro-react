import React from "react";
import "./TodoItem.css";

function TodoItem({ text, completed, completeTodo, deleteTodo }) {
    return(
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
                onClick={completeTodo}
            >
                √
            </span>
            <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
                { text }
            </p>
            <span
                className="Icon Icon-delete"
                onClick={deleteTodo}
            >
                X
            </span>
        </li>
    );
}

export { TodoItem };