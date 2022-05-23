import React from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import "./TodoItem.css";

function TodoItem({ text, completed, completeTodo, deleteTodo }) {
    return(
        <li className="TodoItem">
            <CompleteIcon
                completed={completed}
                onComplete={completeTodo}
            />
            <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
                { text }
            </p>
            <DeleteIcon
                onDelete={deleteTodo}
            />
        </li>
    );
}

export { TodoItem };

//<span
//className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
//onClick={completeTodo}
//>
//√
//</span>

//<span
//                className="Icon Icon-delete"
//                onClick={deleteTodo}
//            >
//                X
//            </span>